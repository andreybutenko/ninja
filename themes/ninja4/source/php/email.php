<?php
    $from = 'contact@andrey.ninja';
    $to = 'hello@andrey.ninja';
    $subject = 'Contact form';
    $name = trim(stripslashes($_POST['name']));
    $email = trim(stripslashes($_POST['email']));
    $message = trim(stripslashes($_POST['message']));

    $body = '';

    function addLine($label, $value) {
        $body .= $label . ': ' . $value . '\n';
    }

    addLine('Name', $name);
    addLine('Email', $email);
    addLine('Message', $message);

    mail($to, $subject, $body, 'From: <' . $from . '>');
?>
