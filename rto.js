function validateform(){
var num=document.myform.num.value;
var fname=document.myform.fname.value;
var lname=document.myform.lname.value;
var mail=document.myform.mail.value;
var atposition=mail.indexOf("@");  
var dotposition=mail.lastIndexOf(".");  
if (fname===null || fname===""){
	alert("First name can't be blank!");
	return false;
}if (lname===null || lname===""){
	alert("Last name can't be blank!");
	return false;
}if (num===null || num===""){
	alert("Phone number can't be blank!");
	return false;
}if (mail===null || mail===""){
	alert("E-mail can't be blank!");
	return false;
}else if (isNaN(num)){
	alert("Phone number please enter number");
	return false;
}else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=mail.length){
	alert("Please enter a valid e-mail adress!");
	return false;
}else{
	alert("Form completed!");
	return true;
}
}