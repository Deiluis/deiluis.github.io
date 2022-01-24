<?php

    if(isset($_POST['enviar'])){

        $destinatario = 'luisconforti04@gmail.com';
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $asunto = $_POST['asunto'];
        $telefono = $_POST['telefono'];
        $mensaje = $_POST['nombre'];

        $header = "Consulta desde la página web del ISFD";
        $mensajeCompleto = "Consulta de: " . $nombre . "\nEmail: " . $email . "\nTelefóno: " . $telefono . "\n\nMensaje: " . $mensaje;

        mail($destinatario, $asunto, $mensajeCompleto, $header);

    }
?>