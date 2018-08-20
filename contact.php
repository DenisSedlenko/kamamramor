<?
    function prepareAttachment($path) {
        $rn = "\r\n";

        if (file_exists($path)) {
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $ftype = finfo_file($finfo, $path);
            $file = fopen($path, "r");
            $attachment = fread($file, filesize($path));
            $attachment = chunk_split(base64_encode($attachment));
            fclose($file);

            $msg = 'Content-Type: \'' . $ftype . '\'; name="' . basename($path) . '"' . $rn;
            $msg .= "Content-Transfer-Encoding: base64" . $rn;
            $msg .= 'Content-ID: <' . basename($path) . '>' . $rn;
            $msg .= $rn . $attachment . $rn . $rn;
            return $msg;
        } else {
            return false;
        }
    }

    $sendto = "kamamramor16@yandex.ru"; 		
    $username = $_POST['name'];
    $phoneNumber = $_POST['phone'];

    $my_file = "";
    if (!empty($_FILES['file']['tmp_name'])) {
        $path = $_FILES['file']['name']; 
        if (copy($_FILES['file']['tmp_name'], $path)) $my_file = $path; 
    }

    $my_message = "Имя: ".$username."\r\nНомер телефона: ".$phoneNumber;

    if ((isset($_POST['email']))) {
        $my_message .= "\r\nЕ-mail: ".$_POST['email'];
    }

    if ((isset($_POST['comment']))) {
        $my_message .= "\r\nСообщение: ".$_POST['comment']."\r\n";
    }

    $rn = "\r\n";
    $boundary = md5(rand());
    $boundary_content = md5(rand());

    $headers = 'From: '.$username.' <kama-mramor>' . $rn;
    $headers .= 'Mime-Version: 1.0' . $rn;
    $headers .= 'Content-Type: multipart/related;boundary=' . $boundary . $rn;

    $msg = $rn . '--' . $boundary . $rn;
    $msg.= "Content-Type: multipart/alternative;" . $rn;
    $msg.= " boundary=\"$boundary_content\"" . $rn;

    $msg.= $rn . "--" . $boundary_content . $rn;
    $msg .= "Content-type:text/plain; charset=utf-8 \r\n";
    $msg .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $msg .= $my_message."\r\n\r\n";
    $msg .= $rn . '--' . $boundary_content . '--' . $rn;

    if ($my_file != '' && file_exists($my_file)) {
        $conAttached = prepareAttachment($path);
        if ($conAttached !== false) {
            $msg .= $rn . '--' . $boundary . $rn;
            $msg .= $conAttached;
        }
    }

    $msg .= $rn . '--' . $boundary . '--' . $rn;

    if(mail($sendto, 'Заявка', $msg, $headers)) {
        echo "true";
    } else {
        echo "false";
    }
?>
