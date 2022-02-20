<?php

        //Inicialmente no se especifica el destinatario, luego se elige con el select de opciones.
        $destinatario = "";

        //Los emails de cada opcion:
        $emailInicial = "luisconforti04@gmail.com";
        $emailPrimario = "luisconforti04@gmail.com";
        $emailSecundario = "luisconforti04@gmail.com";
        $emailAdministrativas = "luisconforti04@gmail.com";

        //Variables extraidas del formulario para armar el mail.
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $asunto = $_POST['asunto'];
        $telefono = $_POST['telefono'];
        $mensaje = $_POST['mensaje'];
        $opciones = $_POST['opciones'];

        //En caso de que el usuario no adjunte un número de telefono, se indica como "No asignado".
        if ($telefono == "") {
                $telefono = "No asignado";
        }

        $mensajeCompleto = "";

        

        //Las opciones del select:

        if ($opciones == "inicial") {

                $destinatario = $emailInicial;
                $mensajeCompleto = "Inicial" . "\r\n\r\n";

        } else if ($opciones == "primario") {

                $destinatario = $emailPrimario;
                $mensajeCompleto = "Primario" . "\r\n\r\n";

        } else if ($opciones == "secundario") {

                $destinatario = $emailSecundario;
                $mensajeCompleto = "Secundario" . "\r\n\r\n";

        } else if ($opciones == "administrativas") {

                $destinatario = $emailAdministrativas;
                $mensajeCompleto = "Administrativa" . "\r\n\r\n";

        }

        //Armado de la cabecera del mail.
        $header = "From: noreply@example.com" . "\r\n";
        $header .= "Reply-To: noreply@example.com" . "\r\n";
        $header .= "X-Mailer: PHP/" . phpversion();

        //Armado del mensaje en texto plano del mail.
        $mensajeCompleto .= "Consulta de: " . $nombre . "\r\n";
        $mensajeCompleto .= "Email: " . $email . "\r\n";
        $mensajeCompleto .= "Telefóno: " . $telefono . "\r\n\r\n";
        $mensajeCompleto .= "Mensaje: " . $mensaje;

        //Se envía el mail y enviamos al usuario a otra pagina.

        $mail = mail($destinatario, $asunto, $mensajeCompleto, $header);

        header("location:../../mail-enviado.html");
?>