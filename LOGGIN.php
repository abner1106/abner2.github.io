<?php
session_start();
require_once('CONEXION.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitizar entrada
    $usuario = $conexion->real_escape_string($_POST['usuario']);
    $contrasena = $_POST['contrasena'];

    // Consulta adaptada a tu tabla actual
    $sql = "SELECT id_empleado, nombre, rol 
            FROM empleados 
            WHERE usuario = '$usuario' AND contrasena = '$contrasena'";

    $resultado = $conexion->query($sql);

    if ($resultado && $resultado->num_rows === 1) {
        $empleado = $resultado->fetch_assoc();

        // Guardar datos en la sesión
        $_SESSION['id_empleado'] = $empleado['id_empleado'];
        $_SESSION['nombre'] = $empleado['nombre'];
        $_SESSION['rol'] = $empleado['rol'];

        // Redirección según rol
        if ($empleado['rol'] === 'administrador') {
            header('Location: /RESTAURANT-BAR/DASHBOARD/VENTA_DIA.html');
        } else {
            header('Location: DASHBOARD/MENU.html');
        }
        exit();
    } else {
        $error = "Usuario o contraseña incorrectos";
        // Opcional: redirigir de vuelta al login con mensaje
        // header("Location: login.php?error=" . urlencode($error));
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Las Miches - Login</title>
    <link rel="stylesheet" href="CSS/LOGGIN.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="icon" type="image/x-icon" href="IMAGES/LOGO_MICHES.png" />

</head>
<body>
    <div class="login-container">
        <div class="logo-container animate__animated animate__bounceIn">
        </div>

        <form method="POST" class="login-form animate__animated animate__fadeInUp">
            <div class="avatar-container">
                <img src="IMAGES/LOGO_MICHES.png" alt="Empleado" class="avatar">
            </div>
            
            <h2>Iniciar Sesión</h2>
            
            <?php if (isset($error)): ?>
                <div class="error-message animate__animated animate__shakeX">
                    <?php echo $error; ?>
                </div>
            <?php endif; ?>
            
           <div class="input-group">
                <input type="text" name="usuario" required>
                <label>Usuario</label>
                <span class="bar"></span>
            </div>
            
            <div class="input-group">
                <input type="password" name="contrasena" required>
                <label>Contraseña</label>
                <span class="bar"></span>
            </div>
            
            <button type="submit" class="btn-login">
                <span>Ingresar</span>
                <div class="liquid"></div>
            </button>
        </form>
    </div>

    <script src="JAVA/LOGGIN.js"></script>
</body>
</html>