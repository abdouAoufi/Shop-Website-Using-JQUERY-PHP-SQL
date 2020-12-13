<?php
// save data in SQL 
$conn = mysqli_connect('127.0.0.1', 'root', '', "adshop"); // ! ETABLISH CONNEXION WITH THE SERVER 

// check for GET varaible 
if (isset($_POST['name'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $result =  $_POST['name'];
    // echo $result;
    $query =  "SELECT * FROM adshop.phones WHERE id =  '$result'";
    if (mysqli_query($conn, $query)) {
        $resultQuery = mysqli_query($conn, $query);
        $users = mysqli_fetch_all($resultQuery, MYSQLI_ASSOC);
        $data = json_encode($users);
        echo $data;
    } else {
        echo "ERROR";
    }
}
