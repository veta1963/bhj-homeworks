let clicker__counter = 0;

document.getElementById("cookie").onclick = Counter;
function Counter() {
  document.getElementById("cookie").width = "300";
  clicker__counter ++
  document.getElementById("clicker__counter").innerHTML = clicker__counter;
};
