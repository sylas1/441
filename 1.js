function myfunction(){
	var abc=document.getElementById("abc").value;
	if (abc==="student"){
		location.href="https://sylas1.github.io/441/about%20us.html";
		return false;
	}if (abc==="parent"){
		location.href="https://sylas1.github.io/441/";
		return false;
	}else{
		alert("Please enter student or parent");
		return true;
	}
}