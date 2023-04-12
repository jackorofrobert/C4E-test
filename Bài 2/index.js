function numberOneTriangle(n) {
  let html = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) html += "* ";
    html += "<br>";
  }
  return html;
}

function print() {
  let number = +document.getElementById("number").value;
  document.getElementById("result").innerHTML = numberOneTriangle(number);
}

document
  .getElementById("printOneTriangle")
  .addEventListener("click", print);