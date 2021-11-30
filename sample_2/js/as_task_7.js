function open1() {
	document.getElementById("b").style.width = "220px";
	document.getElementById("b").style.display = "block";
	document.getElementById("gg").style.marginLeft = "50px";
	document.getElementById("btn2").style.display = "block";

	document.getElementById("gg").style.display = "flex";
	document.getElementById("gg").style.left = "0px";
	document.getElementById("mnav").style.paddingLeft = "170px";
  
	document.getElementById("atc").style.paddingLeft = "220px";
  }
  function close1() {
	document.getElementById("b").style.display = "none";
	document.getElementById("btn2").style.display = "none";
	document.getElementById("mnav").style.paddingLeft = "0px";
	document.getElementById("btn2").style.display = "none";
	document.getElementById("atc").style.paddingLeft = "0px";
	document.getElementById("gg").style.marginLeft = "0px";
	document.getElementById("gg").style.display = "none";
	document.getElementById("b").style.width = "0px";
  }
  