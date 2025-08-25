<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Manejar solicitud OPTIONS para CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

function json_response($success, $message = '', $data = []) {
    http_response_code($success ? 200 : 400);
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'data' => $data,
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Método no permitido. Se requiere POST', 405);
    }

    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Error al decodificar JSON: ' . json_last_error_msg());
    }

    $required = ['motivo', 'monto', 'id_empleado'];
    foreach ($required as $field) {
        if (!isset($data[$field])) {
            throw new Exception("El campo '$field' es requerido");
        }
    }

    require_once $_SERVER['DOCUMENT_ROOT'] . '/RESTAURANT-BAR/DASHBOARD/CONEXION.php';
    
    if (!isset($conn) || !($conn instanceof PDO)) {
        throw new Exception('Error en la conexión a la base de datos');
    }

    // Verificar si la tabla existe
    $tablaExiste = $conn->query("SHOW TABLES LIKE 'retiros'")->rowCount() > 0;
    if (!$tablaExiste) {
        throw new Exception('La tabla de retiros no existe en la base de datos');
    }

    // Verificar empleado existe
    $stmtEmp = $conn->prepare("SELECT id_empleado FROM empleados WHERE id_empleado = ?");
    $stmtEmp->execute([$data['id_empleado']]);
    if ($stmtEmp->rowCount() === 0) {
        throw new Exception('El empleado especificado no existe');
    }

    $conn->beginTransaction();

    $sql = "INSERT INTO retiros (monto, motivo, id_empleado, notas) 
            VALUES (:monto, :motivo, :id_empleado, :notas)";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute([
        ':monto' => (float)$data['monto'],
        ':motivo' => $data['motivo'],
        ':id_empleado' => (int)$data['id_empleado'],
        ':notas' => $data['notas'] ?? null
    ]);

    $idRetiro = $conn->lastInsertId();

    $conn->commit();
    
    json_response(true, 'Retiro registrado exitosamente', [
        'id_retiro' => $idRetiro,
        'fecha' => date('Y-m-d H:i:s')
    ]);

} catch (PDOException $e) {
    if (isset($conn) && $conn->inTransaction()) {
        $conn->rollBack();
    }
    json_response(false, 'Error de base de datos: ' . $e->getMessage());
} catch (Exception $e) {
    json_response(false, $e->getMessage());
}
?>