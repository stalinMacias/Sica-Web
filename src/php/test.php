<?php
    include "config.php";

    if($isset($_GET(['userCode']))){
        echo("Si se manda llamar el archivo test.php");
    }else{
        echo("Algo anda petando xd!");
    }


?>