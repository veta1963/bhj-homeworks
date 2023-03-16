let timerStart = 5;
let downloadTimer = setInterval(function(){
  if (timerStart > 0) {
    timerStart --;
    document.getElementById("timer").innerHTML = "До окончания конкурса осталось " + timerStart + " секунд";
  }
  else {  
    clearInterval(downloadTimer);  
    alert("«Вы победили в конкурсе!»");
  }  
  }, 1000); 
