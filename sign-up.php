<?php
session_start();
header('location:login.html');
$servername='localhost';
$username='root';
$password='';
$database='medicare';
$conn=mysqli_connect($servername,$username,$password,$database);
if($conn)
{
    echo "Connected";
}
else{
    echo "Not connected";
}
$name=$_POST['email'];
$pass=$_POST['password'];
$query= "Select * from `userdata` where username - '$name' && password - '$pass' ";
$result=mysqli_query($conn,$query);
$num=mysqli_num_rows($result);
if($num==1)
{
    echo "Duplicate data";
}
else{
    $query="insert into `userdata` (`username`,`password`) values('$name','$pass')";
    mysqli_query($conn,$query);
}
?>