<? 
    header('Content-Type: text/html; charset=utf8');
    if((isset($_POST['phone']))) {
        $to = 'kamamramor16@yandex.ru'; 
            $subject = 'Заявка'; 	
                
            $message = '
                    <html>
                        <head>
                            <title>'.$subject.'</title>
                        </head>
                        <body>
                            <p>Телефон: '.$_POST['phone'].'</p>
                            <p>Email: '.$_POST['email'].'</p>
                        </body>
                    </html>'; 
            $headers  = "Content-type: text/html; charset=utf-8 \r\n";
            $headers .= "From: unknown <kama-mramor>\r\n";
            mail($to, $subject, $message, $headers); 	
    }
?>