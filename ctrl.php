<?php

// ---------------------------------------------------------Obtencion de datos Form Data 
$path = __DIR__."/". basename($_FILES['foto']['name']); 
// $path = __DIR__."/Nombre.pdf"; 


if(move_uploaded_file($_FILES['foto']['tmp_name'], $path)) {
    echo "El archivo ".  basename( $_FILES['foto']['name']). " ha sido subido";
} else{
    echo "El archivo no se ha subido correctamente";
}

// --------------------------------------------------------
?>