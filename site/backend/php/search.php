<?php
// save data in SQL 
$conn = mysqli_connect('127.0.0.1', 'root', '', "adshop"); // ! ETABLISH CONNEXION WITH THE SERVER 

// check for GET varaible 
if (isset($_POST['name'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $nameFilter =  $_POST['name'] ;
    $wilayaFilter =  $_POST['wilaya'] ;
    $low =  $_POST['low'] ;
    $high =  $_POST['high'] ;
    // $query =  "SELECT * FROM adshop.phones WHERE title REGEXP '$nameFilter' AND wilaya REGEXP '$wilayaFilter' ";

    if($low > 0 && $high > 0) {
        $query =  "SELECT * FROM adshop.phones
        WHERE
        title REGEXP '$nameFilter' 
        AND 
        wilaya REGEXP '$wilayaFilter'  
        AND price BETWEEN '$low' AND '$high' ";
    }else{
        $query =  "SELECT * FROM adshop.phones
        WHERE
        title REGEXP '$nameFilter' 
        AND 
        wilaya REGEXP '$wilayaFilter'  
        ";
    }


    if (mysqli_query($conn, $query)) {
        $resultQuery = mysqli_query($conn, $query);
        $users = mysqli_fetch_all($resultQuery, MYSQLI_ASSOC);
        $data = json_encode($users);
        echo $data;
    } else {
        echo "ERROR";
    }
}

    