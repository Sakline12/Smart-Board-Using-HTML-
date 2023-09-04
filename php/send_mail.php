<?php
    use PHPMailer\PHPMailer\PHPMailer;

    if (isset($_POST['email'])) {
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['body']; 


        $submit_message = "<table style='width: 100%;'> <tr style='background-color: RED;' ><td>From</td><td>' . $email . '</td></tr> 
        <tr><td>Subject</td><td>' . $subject . '</td></tr> 
        <tr><td>Details</td><td>' . $message . '</td></tr>
        </table>";

        require_once "PHPMailer/PHPMailer.php";
        require_once "PHPMailer/SMTP.php";
        require_once "PHPMailer/Exception.php";

        $mail = new PHPMailer();

        //SMTP Settings
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "saklineheemel51@gmail.com"; 
        $mail->Password = 'sceshqlskakvgkzv'; 
        $mail->Port = 465;
        $mail->SMTPSecure = "ssl";

        //Email Settings
        $mail->isHTML(true);
        $mail->setFrom($email);
        $mail->addAddress("saklineheemel51@gmail.com"); 
        $mail->From=($email);
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
?>
