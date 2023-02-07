'use strict'

const timerStart = 59;
for (let i = 0, i < 59, i++) {
    const timerFinish = document.getElementById("timer");
    timerFinish -= timerStart;
}
if (timerFinish === 0) {
    Window.alert("«Вы победили в конкурсе!»");
}
