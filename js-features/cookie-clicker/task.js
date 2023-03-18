let clickerCounter = 0 , image = document.getElementById("cookie");
image.onclick = function () {
	if (image.width === 300)
	image.width = "200"
	else image.width = "300";	
	clickerCounter ++;
	document.getElementById("clicker__counter").innerHTML = clickerCounter;
};
