<?php

// save data in SQL 
$conn = mysqli_connect('127.0.0.1', 'root', '', "adshop"); // ! ETABLISH CONNEXION WITH THE SERVER 

// check for GET varaible 
if (isset($_POST['email'])) {
    $name = mysqli_real_escape_string($conn, $_POST['email']);
    $email =  $_POST['email'] ;
    $password =  $_POST['password'] ;
    $query =  "SELECT * FROM adshop.users 
    WHERE email = '$name'  AND password = '$password' ";
    if (mysqli_query($conn, $query)) {
        $resultQuery = mysqli_query($conn, $query);
        $users = mysqli_fetch_all($resultQuery, MYSQLI_ASSOC);
        $data = json_encode($users);
        echo $data;
    } else {
        echo "ERROR";
    }
}


    