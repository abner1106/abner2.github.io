<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
date_default_timezone_set('America/Mexico_City');

// Manejar solicitud OPTIONS para CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

function json_response($success, $message = '', $data = []) {
    $response = [
        'success' => $success,
        'message' => $message,
        'data' => $data,
        'timestamp' => date('Y-m-d H:i:s')
    ];
    return json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
}

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
        throw new Exception('Método no permitido. Se requiere GET', 405);
    }

    $fecha = $_GET['fecha'] ?? date('Y-m-d');
    
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $fecha)) {
        throw new Exception('Formato de fecha inválido. Use YYYY-MM-DD');
    }

    require_once $_SERVER['DOCUMENT_ROOT'] . '/RESTAURANT-BAR/DASHBOARD/CONEXION.php';
    
    if (!isset($conn) || !($conn instanceof PDO)) {
        throw new Exception('Error en la conexión a la base de datos');
    }

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consulta ventas
    $sqlVentas = "SELECT 
                    v.id_venta,
                    v.fecha as fecha_hora,
                    v.total,
                    v.metodo_pago,
                    d.id_detalle,
                    d.id_producto,
                    d.nombre_producto,
                    d.cantidad,
                    d.precio_unitario as precio,
                    d.notas as observaciones
                FROM ventas v
                LEFT JOIN detalle_venta d ON v.id_venta = d.id_venta
                WHERE DATE(v.fecha) = :fecha
                ORDER BY v.fecha DESC";

    $stmtVentas = $conn->prepare($sqlVentas);
    $stmtVentas->execute([':fecha' => $fecha]);
    $ventasRaw = $stmtVentas->fetchAll(PDO::FETCH_ASSOC);

    // Agrupar productos por venta
    $ventas = [];
    foreach ($ventasRaw as $row) {
        $ventaId = $row['id_venta'];
        if (!isset($ventas[$ventaId])) {
            $ventas[$ventaId] = [
                'id_venta' => $row['id_venta'],
                'fecha_hora' => $row['fecha_hora'],
                'total' => $row['total'],
                'metodo_pago' => $row['metodo_pago'],
                'productos' => []
            ];
        }
        
        if ($row['id_detalle']) {
            $ventas[$ventaId]['productos'][] = [
                'id' => $row['id_producto'],
                'nombre' => $row['nombre_producto'],
                'cantidad' => $row['cantidad'],
                'precio' => $row['precio'],
                'observaciones' => $row['observaciones']
            ];
        }
    }

    // Consulta totales por método de pago
    $sqlTotales = "SELECT 
                    metodo_pago,
                    COUNT(*) as cantidad,
                    SUM(total) as total
                FROM ventas
                WHERE DATE(fecha) = :fecha
                GROUP BY metodo_pago";

    $stmtTotales = $conn->prepare($sqlTotales);
    $stmtTotales->execute([':fecha' => $fecha]);
    $totalesRaw = $stmtTotales->fetchAll(PDO::FETCH_ASSOC);

    $totales = [
        'efectivo' => 0,
        'tarjeta' => 0,
        'transferencia' => 0,
        'total_dia' => 0
    ];

    foreach ($totalesRaw as $row) {
        $totales[$row['metodo_pago']] = (float)$row['total'];
        $totales['total_dia'] += (float)$row['total'];
    }

    // Consulta retiros (con verificación de tabla)
    $retiros = [];
    $tablaRetirosExiste = $conn->query("SHOW TABLES LIKE 'retiros'")->rowCount() > 0;
    
    if ($tablaRetirosExiste) {
        $sqlRetiros = "SELECT 
                        r.id_retiro,
                        r.monto,
                        r.motivo,
                        r.fecha,
                        e.nombre as empleado
                    FROM retiros r
                    LEFT JOIN empleados e ON r.id_empleado = e.id_empleado
                    WHERE DATE(r.fecha) = :fecha
                    ORDER BY r.fecha DESC";

        $stmtRetiros = $conn->prepare($sqlRetiros);
        $stmtRetiros->execute([':fecha' => $fecha]);
        $retiros = $stmtRetiros->fetchAll(PDO::FETCH_ASSOC);
    }

    // Calcular efectivo en caja
    $efectivoCaja = $totales['efectivo'];
    if ($tablaRetirosExiste) {
        $sqlRetirosTotal = "SELECT COALESCE(SUM(monto), 0) as total_retiros 
                           FROM retiros 
                           WHERE DATE(fecha) = :fecha";
        $stmtRetirosTotal = $conn->prepare($sqlRetirosTotal);
        $stmtRetirosTotal->execute([':fecha' => $fecha]);
        $totalRetiros = (float)$stmtRetirosTotal->fetchColumn();
        $efectivoCaja -= $totalRetiros;
    }

    $totales['efectivo_caja'] = $efectivoCaja;

    echo json_response(true, 'Datos obtenidos correctamente', [
        'ventas' => array_values($ventas),
        'totales' => $totales,
        'retiros' => $retiros,
        'meta' => [
            'fecha_consultada' => $fecha,
            'tabla_retiros_existe' => $tablaRetirosExiste
        ]
    ]);

} catch (PDOException $e) {
    echo json_response(false, 'Error de base de datos: ' . $e->getMessage());
} catch (Exception $e) {
    echo json_response(false, $e->getMessage());
}
?>