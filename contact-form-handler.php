<?php
$nombre = $_POST['nombre'];
$email_visitante = $_POST['email'];
$mensaje = $_POST['mensaje'];

$email_envio = 'david12mg96@gmail.com';
$email_asunto = "Nuevo contacto";
$email_body = "Nombre: $name.\n".
                "Email: $email_visitante.\n".
                    "Mensaje: $mensaje.\n";

$email_destino = "david12mg96@gmail.com";
$headers = "From: $email_envio \r\n";
$headers .= "Reply-to: $email_visitante \r\n";

mail($email_destino, $email_asunto, $email_body, $headers);
header("Location:form.php");
?>
