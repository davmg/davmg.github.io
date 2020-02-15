<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>MEDISUN</title>

    <!--Jquery-->
    <script type="text/javascript" src="js/jquery.min.js"></script>

    <!-- BOOTSTRAP -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

    <!--CSS-->
    <link rel="stylesheet" href="css/estilos.css">

    <!-- fuentes -->
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">

    <!-- favicon -->
    <link rel="icon" type="image/ico" href="insumos/ico-logo.png" />
    <link rel="shortcut icon" type="insumos/ico" href="insumos/ico-logo.png" />
</head>

<body>
    <div id="formulario"></div>
    <div class="contacto-titulo">
        <h1>Contáctenos</h1>
        <h3>Nos pondremos en contacto lo más pronto posible</h3>
    </div>
    <div class="contenedor-form">
        <form id="contact-form" method="POST" action="contact-form-handler.php">
            <input name="nombre" type="text" class="form-control" placeholder="Su nombre" required>
            <input name="email" type="email" class="form-control" placeholder="Su correo" required>
            <textarea name="mensaje" class="form-control" placeholder="Mensaje" rows="4" required></textarea>
            <input type="submit" class="form-control" value="ENVIAR">
        </form>
    </div>
</body>
