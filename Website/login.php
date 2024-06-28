<!DOCTYPE html>
<html lang="en">
<head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Login</title>
       <link rel="stylesheet" href="login.css">
</head>
<body>
       <img src="/images/sspalogo.png" alt="logo" class="logo">


<form method= "post" action="login.php">
       <h1>Welcome SSPA Employee</h1> 
       <div class= "textBox">
              <input type="text" placeholder="Enter Username" name="username">
       </div>
       <div class= "textBox">
              <input type="text" placeholder= "Enter Password" name="password">
       </div>
       <input type="submit" value="Login" class= "loginBtn" name= "loginBtn">
       <div class="backHome">
              Not an Employee?
       </br>
       <a href="/Website/index.html">Back to Home</a>
       </div>
</form>
       
</body>
</html>

<?php>
$connection = mysqli_connect("localhost", "root", "");
if(isset($_POST['loginBtn'])){
       $username=$_POST['username'];
       $password=$_POST['password'];
       $sql= "SELECT * FROM websitelogin.logindetails where username = '$username'";
       $result = mysqli_query($connection,$sql);
       while($row = mysqli_fetch_assoc($result)){
              $resultPassword = $row['password'];
              if($password == $resultPassword){
                     header('Location:/Login/test.html');
              }else{
                     echo "<script> 
                     alert('Login unsuccessful');
                     </script>";
              }
       }

}

?>