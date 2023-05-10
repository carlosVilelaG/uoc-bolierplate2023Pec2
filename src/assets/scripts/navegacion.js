document.getElementById("actionHome").onclick = function () {
  ocultarTodo();
};

document.getElementById("actionPageTwo").onclick = function () {
  mostrarPageTwo();
};

document.getElementById("actionPageThree").onclick = function () {
  mostrarPageThree();
};

document.getElementById("actionFour").onclick = function () {
  mostrarPageFour();
};

function mostrarPageTwo() {
  document.getElementById("pageTwo").style.display = "block";
  document.getElementById("pageThree").style.display = "none";
  document.getElementById("pageFour").style.display = "none";
  document.getElementById("home").style.display = "none";
}

function mostrarPageThree() {
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageThree").style.display = "block";
  document.getElementById("pageFour").style.display = "none";
  document.getElementById("home").style.display = "none";
}

function mostrarPageFour() {
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageThree").style.display = "none";
  document.getElementById("pageFour").style.display = "block";
  document.getElementById("home").style.display = "none";
}

function ocultarTodo() {
  document.getElementById("pageTwo").style.display = "none";
  document.getElementById("pageThree").style.display = "none";
  document.getElementById("pageFour").style.display = "none";
  document.getElementById("home").style.display = "block";
}
