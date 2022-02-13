<?php
        $destinatario = 'luisconforti04@gmail.com';
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $asunto = $_POST['asunto'];
        $telefono = $_POST['telefono'];
        $mensaje = $_POST['mensaje'];

        $header = 'Consulta ILFL';
        $mensajeCompleto = 'Consulta de: ' . $nombre . '\nEmail: ' . $email . '\nTelefóno: ' . $telefono . '\n\nMensaje: ' . $mensaje;

        mail($destinatario, $asunto, $mensajeCompleto, $header);

        header(Location:index.html);
?>