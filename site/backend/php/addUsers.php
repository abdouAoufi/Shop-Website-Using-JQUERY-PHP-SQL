<?php

// save data in SQL 
$conn = mysqli_connect('127.0.0.1', 'root', '', "adshop"); // ! ETABLISH CONNEXION WITH THE SERVER 

// check for GET varaible 
if (isset($_POST['name'])) {
    // $name = mysqli_real_escape_string($conn, $_POST['email']);
    $nameU =  $_POST['name'] ;
    $family =  $_POST['familyName'] ;
    $email =  $_POST['email'] ;
    $phone =  $_POST['phone'] ;
    $password =  $_POST['password'] ;
    $query =  " INSERT INTO adshop.users ( id_relate , name , familyName , email , phone , wilaya ,  street , password) 
     VALUES  ( 1, '$nameU','$family' ,'$email' ,  '$phone' ,'not', 'not ', '$password' ) " ;
         mysqli_query($conn, $query);
}
