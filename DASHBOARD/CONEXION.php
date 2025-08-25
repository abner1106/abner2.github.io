<?php
// CONEXION.php - Versión robusta con manejo de errores
$host = 'localhost';
$db   = 'las_miches';  // REEMPLAZAR con tu nombre de BD
$user = 'root';        // REEMPLAZAR con tu usuario
$pass = 'abner';     // REEMPLAZAR con tu contraseña
$charset = 'utf8mb4';

// Opciones para la conexión PDO
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $conn = new PDO($dsn, $user, $pass, $options);
    
    // Verificación adicional de conexión
    $conn->query("SELECT 1");
} catch (PDOException $e) {
    // Registrar error en archivo de log
    error_log('['.date('Y-m-d H:i:s').'] Error de conexión: '.$e->getMessage()."\n", 3, __DIR__.'/error.log');
    
    // Mensaje seguro para producción
    die(json_encode([
        'status' => 'error',
        'message' => 'Error en la conexión a la base de datos'
    ]));
}
?>