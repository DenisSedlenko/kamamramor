<? 
    header('Content-Type: text/html; charset=utf8');
    if((isset($_POST['name']))) {
        $to = 'kamamramor16@yandex.ru'; 
            $subject = 'Заявка';
            $subjectt = ' '.$_POST['name'];
                        
            $message = '
                    <html>
                        <head>
                            <title>'.$subject.'</title>
                        </head>
                        <body>
                            <p>Имя: '.$_POST['name'].'</p>
                            <p>Фамилия: '.$_POST['surname'].'</p>
                            <p>Телефон: '.$_POST['part1'] .$_POST['part2'].'</p>
                            <p>Email: '.$_POST['email'].'</p>
                            <p>Сообщение: '.$_POST['comment'].'</p>
                            <p><a href='.$_POST['file']'></a></p>				
                        </body>
                    </html>'; 
            $headers  = "Content-type: text/html; charset=utf-8 \r\n";
            $headers .= "From: $subjectt <kama-mramor>\r\n";
            mail($to, $subject, $message, $headers); 
        
    }
?>