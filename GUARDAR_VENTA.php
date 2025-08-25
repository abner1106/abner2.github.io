<?php
header('Content-Type: application/json');

require_once 'CONEXION.php';

$response = ['success' => false, 'message' => '', 'id_venta' => null];

try {
    // Validar datos recibidos
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!$data) {
        throw new Exception('Datos no válidos');
    }

    // Validar campos obligatorios
    if (empty($data['paymentMethod']) || empty($data['items']) || !isset($data['total'])) {
        throw new Exception('Faltan datos requeridos');
    }

    // Iniciar transacción
    $conn->beginTransaction();

    // 1. Insertar en tabla ventas
    $stmtVenta = $conn->prepare("INSERT INTO ventas (total, concepto, detalles, metodo_pago) 
                               VALUES (:total, :concepto, :detalles, :metodo_pago)");
    
    $stmtVenta->bindParam(':total', $data['total'], PDO::PARAM_STR);
    $stmtVenta->bindParam(':concepto', $data['concepto'], PDO::PARAM_STR);
    $stmtVenta->bindParam(':detalles', $data['detalles'], PDO::PARAM_STR);
    $stmtVenta->bindParam(':metodo_pago', $data['paymentMethod'], PDO::PARAM_STR);
    
    if (!$stmtVenta->execute()) {
        throw new Exception('Error al guardar la venta principal');
    }
    
    $id_venta = $conn->lastInsertId();
    $response['id_venta'] = $id_venta;

    // 2. Preparar statement para verificar productos
    $stmtCheckProduct = $conn->prepare("SELECT COUNT(*) FROM productos WHERE id_producto = :id_producto");
    
    // 3. Preparar statement para insertar detalles
    $stmtDetalle = $conn->prepare("INSERT INTO detalle_venta 
                                 (id_venta, id_producto, nombre_producto, cantidad, precio_unitario, notas) 
                                 VALUES (:id_venta, :id_producto, :nombre_producto, :cantidad, :precio_unitario, :notas)");
    
    // Procesar cada item del carrito
    foreach ($data['items'] as $item) {
        // Verificar si el producto existe
        $stmtCheckProduct->bindParam(':id_producto', $item['id_producto'], PDO::PARAM_INT);
        $stmtCheckProduct->execute();
        
        $productExists = $stmtCheckProduct->fetchColumn();
        
        if (!$productExists) {
            // Opciones:
            // 1. Insertar con id_producto NULL (si tu estructura lo permite)
            // $item['id_producto'] = null;
            
            // 2. Omitir este producto (no recomendado)
            // continue;
            
            // 3. Cancelar toda la transacción (recomendado)
            throw new Exception("El producto con ID {$item['id_producto']} no existe en la base de datos");
        }

        // Insertar detalle de venta
        $stmtDetalle->bindParam(':id_venta', $id_venta, PDO::PARAM_INT);
        $stmtDetalle->bindParam(':id_producto', $item['id_producto'], PDO::PARAM_INT);
        $stmtDetalle->bindParam(':nombre_producto', $item['nombre_producto'], PDO::PARAM_STR);
        $stmtDetalle->bindParam(':cantidad', $item['cantidad'], PDO::PARAM_INT);
        $stmtDetalle->bindParam(':precio_unitario', $item['precio_unitario'], PDO::PARAM_STR);
        $stmtDetalle->bindParam(':notas', $item['notas'], PDO::PARAM_STR);
        
        if (!$stmtDetalle->execute()) {
            throw new Exception('Error al guardar detalle de venta para el producto ID: ' . $item['id_producto']);
        }
    }

    // Confirmar transacción si todo salió bien
    $conn->commit();
    $response['success'] = true;
    $response['message'] = 'Venta registrada correctamente';

} catch (PDOException $e) {
    // Revertir en caso de error
    if ($conn->inTransaction()) {
        $conn->rollBack();
    }
    $response['message'] = 'Error en la base de datos: ' . $e->getMessage();
} catch (Exception $e) {
    // Revertir en caso de error
    if ($conn->inTransaction()) {
        $conn->rollBack();
    }
    $response['message'] = $e->getMessage();
} finally {
    // Cerrar statements
    if (isset($stmtVenta)) $stmtVenta = null;
    if (isset($stmtCheckProduct)) $stmtCheckProduct = null;
    if (isset($stmtDetalle)) $stmtDetalle = null;
    // Cerrar conexión
    $conn = null;
}

echo json_encode($response);
?>