<?php 
        // if(isset($_POST['btn']){
        //     echo "clicked";
        // })
        if(isset($_POST['btn'])){
            echo "clicked";
        }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>J Query</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script>
        $(function(){ 
            $('button').click(function(){
                $("[href]").attr("href", "<?php echo "2.html"; ?>");
            })
           
        });
    </script>
</head>
<body>
    <form action="" method="post">
    <input type="number">
    <button name="btn">
    <a href="change">Go</a></button></form>
    
</body>
</html>