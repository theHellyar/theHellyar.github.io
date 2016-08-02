<?php
$errors=0;
//$error="The following errors occured while processing your form input.<ul>";
//pt_register('POST','name');
//pt_register('POST','email');
//pt_register('POST','subject');
//pt_register('POST','message');
//$message=preg_replace("/(\015\012)|(\015)|(\012)/","&nbsp;<br />", $message);
//if($email=="" ){
//$errors=1;
//$error.="<li>You did not enter one or more of the required fields. Please go back and try again.";
//}
//if(!filter_var($email, FILTER_VALIDATE_EMAIL))
//{
//$error.="<li>Invalid email address entered";
//$errors=1;
//}
//if($errors==1) echo $error;
//else{

$where_form_is="http://".$_SERVER['SERVER_NAME'].strrev(strstr(strrev($_SERVER['PHP_SELF']),"/"));

mail("bradhellyar@gmail.com","Inquiry from Portfolio",
     "name: " . $_POST['name'] . " 
     email: " . $_POST['email'] . " 
     subject: " . $_POST['subject'] . " 
     message: " . $_POST['message'] . " 
");

header("Refresh: 0;url=http://brad.hellyar.me");
//}
?>