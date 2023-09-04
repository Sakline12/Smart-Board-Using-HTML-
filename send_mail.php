<?php

use PHPMailer\PHPMailer\PHPMailer;

if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['body'];

    $submit_message = "<table style='width: auto; border: 2px solid #e0e8ef; border-collapse: collapse;'>
    <tr style='background-color: #e0e8ef; color: black;'>
        <th style='padding: 10px; text-align: left;'>From</th>
        <td style='padding: 10px; color: black;'>" . $email . "</td>
    </tr>
    <tr>
        <th style='padding: 10px; text-align: left;'>Subject</th>
        <td style='padding: 10px;'>" . $subject . "</td>
    </tr>
    <tr>
        <th style='padding: 10px; text-align: left;'>Details</th>
        <td style='padding: 10px;'>" . $message . "</td>
    </tr>
</table>";



    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    $mail = new PHPMailer();

    //SMTP Settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "saklineheemel51@gmail.com"; //enter your email address
    $mail->Password = 'sceshqlskakvgkzv'; //enter your email password
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    //Email Settings
    $mail->isHTML(true);
    $mail->setFrom($email);
    $mail->addAddress("saklineheemel51@gmail.com"); //enter your email address
    $mail->Subject = ("$email ($subject)");
    $mail->Body = $submit_message;

    if ($mail->send()) {
        $status = "success";
        $response = "Email is sent!";
    } else {
        $status = "failed";
        $response = "Something is wrong: <br><br>" . $mail->ErrorInfo;
    }

    exit(json_encode(array("status" => $status, "response" => $response)));
}
