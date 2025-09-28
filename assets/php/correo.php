<?php
        $destinatario = "luisconforti04@gmail.com";
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $asunto = $_POST['asunto'];
        $telefono = $_POST['telefono'];
        $mensaje = $_POST['mensaje'];

        $header = "From: noreply@example.com" . "\r\n";
        $header .= "Reply-To: noreply@example.com" . "\r\n";
        $header .= "X-Mailer: PHP/" . phpversion();

        $mensajeCompleto = "Consulta de: " . $nombre . "\r\n";
        $mensajeCompleto .= "Email: " . $email . "\r\n";
        $mensajeCompleto .= "Telefóno: " . $telefono . "\r\n\r\n";
        $mensajeCompleto .= "Mensaje: " . $mensaje;

        $mail = mail($destinatario, $asunto, $mensajeCompleto, $header);

        if($mail){
                echo "<h4>Consulta enviada exitosamente.</h4>";
        } else {
                echo "<h4>Error al enviar la consulta.</h4>";
        }

        header("location:index.html");

?>