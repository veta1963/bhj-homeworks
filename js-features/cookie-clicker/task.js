let clickerCounter = 0;
document.getElementById("cookie").onclick = function () {
	if (document.getElementById("cookie").width === 300)
	document.getElementById("cookie").width = "200"
	else document.getElementById("cookie").width = "300";	
	clickerCounter ++;
	document.getElementById("clicker__counter").innerHTML = clickerCounter;
};
