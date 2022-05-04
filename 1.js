function myfunction(){
	var abc=document.getElementById("abc").value;
	if (abc==="student"){
		location.href="https://cn.bing.com/";
		return false;
	}if (abc==="parent"){
		location.href="https://www.baidu.com/";
		return false;
	}else{
		alert("Please enter student or parent");
		return true;
	}
}