<?php
$host = "localhost";
$usuario = "root";
$contrasena = "abner";
$base_datos = "las_miches";

$conexion = new mysqli($host, $usuario, $contrasena, $base_datos);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Configurar charset
$conexion->set_charset("utf8mb4");
?>