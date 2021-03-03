<?php

// save data in SQL 
$conn = mysqli_connect('127.0.0.1', 'root', '', "adshop"); // ! ETABLISH CONNEXION WITH THE SERVER 
$isCAR = false ; 
// check for GET varaible 
if (isset($_POST['Title'])) {
          $Title  =  $_POST['Title'] ;
          $Category =  $_POST['Category'] ;
          $Img =  $_POST['Img'] ;
          $Img2 =  $_POST['Img2'] ;
          $Img3 =  $_POST['Img3'] ;
          $HourPost  =  $_POST['HourPost'] ;
          $PhonePost =  $_POST['PhonePost'] ;
          $StateSell =  $_POST['StateSell'] ;
          $DatePost =  $_POST['DatePost'] ;
          $Wilaya=  $_POST['Wilaya'] ;
          $Profile=  $_POST['Profile'] ;
          $PostId=  $_POST['PostId'] ;
          $Descreption=  $_POST['Descreption'] ;
          $IdRelete=  $_POST['IdRelete'] ;
          $Price=  $_POST['Price'] ;
          $isCarBool=  $_POST['isCarBool'] ;
          $images = [$Img , $Img2 , $Img3];

          $tableName = "adshop.phones";
          $isCAR = $isCarBool ; 
          if( $isCAR == "true" ){
            $tableName = "adshop.cars"; 
          }
          $query = 
            "INSERT INTO $tableName
            (hourPost,
            category,
            img1,
            img2,
            img3,
            title,
            price,
            phonePost,
            descreption,
            stateSell,
            wilaya,
            datePost,
            place,
            postId,
            id_relate) 
            VALUES 
            ('$HourPost',
            '$Category',
            '$Img',
            '$Img2',
            '$Img3',
            '$Title',
            '$Price',
            '$PhonePost',
            '$Descreption',
            '$StateSell',
            '$Wilaya',
            '$DatePost',
            'static data',
            $PostId , 
            '$IdRelete')";
mysqli_query($conn, $query);
}