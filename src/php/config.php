<?php

// host donde se hospeda la pagina
//$host =  "http://148.202.119.37/sica";  //"http://localhost/checador"; // //http://www.cuvalles.udg.mx/sica";
$host = "http://127.0.0.1/sica"; //Dirección para que trabaje en local!

// detalles de la conexion a mysql
//$dbhost =   			"148.202.119.37"; //'localhost';
$dbhost = "127.0.0.1";  //Conexión Local
$user =     				"frank"; //'frank';
$password = 				"frankvalles65"; //'frankvalles65';

// nombre de la base de datos utilizada
$db =       "checador";

// direccion de la carpeta en el disco duro
$dir = "C:\wamp64\www\sica";
//$dir = "C:\wamp\www\sica/";
//$dir = "C:\wamp\www\sica";

//Create connection
$con = mysqli_connect($dbhost, $user, $password, $db);
//Check connection
if (!$con){
    die("Conection failed: ". mysqli_connect_error());
}


?>