<?php
$conn = mysqli_connect('127.0.0.1', 'root', '', "ad-shop"); // ! ETABLISH CONNEXION WITH THE SERVER 


    $query =  "SELECT * FROM `ad-shop`.phones LIMIT 10";
    if (mysqli_query($conn, $query)) {
        $resultQuery = mysqli_query($conn, $query);
        $users = mysqli_fetch_all($resultQuery, MYSQLI_ASSOC);
        $data = json_encode($users);
        echo $data;
    } else {
        echo "ERROR";
    }
