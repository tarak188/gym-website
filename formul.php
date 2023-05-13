<?php
// database connection code
$con = mysqli_connect('localhost', 'root', '', 'gym');

// get the post records
$txtName = $_POST['name1'];
$txtEmail = $_POST['name2'];
$txtPhone = $_POST['mail'];
$txtMessage = $_POST['password'];
$rad1 = $_POST['tb1'];
$rad2 = $_POST['tb2'];

// database insert SQL code
if (empty($rad1)) {
    $sql = "INSERT INTO `goldgym` (`Id`, `nom`, `prenom`, `email`, `password`, `card`) 
            VALUES ('0', '$txtName', '$txtEmail', '$txtPhone', '$txtMessage', '$rad2')";
} else {
    $sql = "INSERT INTO `tarak2` (`Id`, `nom`, `prenom`, `email`, `password`, `card`) 
            VALUES ('0', '$txtName', '$txtEmail', '$txtPhone', '$txtMessage', '$rad1')";
}

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs) {
	echo "Contact Records Inserted";
}



?>