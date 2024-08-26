<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $question = $_POST["question"];

    if ($name=="" or $email=="" or $question==""){
        echo "Form empty fields!";
    }

    else {
        $to = "wolf1222555@gmail.com";
        $subject = "Message from rstrn.info";
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <rstrn.info>\r\n";

        $message = "User name: ".$name."\n";
        $message .= "User email: ".$email."\n";
        $message .= "User question: ".$question."\n";

        $send = mail($to, $subject, $message, $headers);

        if ($send == "true")
        {
            echo "Form success!\r\n";
        }
        else
        {
            echo "Form error!";
        }
    }
?>
