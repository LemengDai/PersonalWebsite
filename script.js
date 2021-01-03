window.onload = startFunction;

function startFunction() {
  var txt = "Hello, I'm Lemeng Dai : )";
  var i = 0;
  var speed = 300;
  typeWriter();
  setInterval(cursorAnimation, 500);

  var button = document.getElementById("button");
  var sideBar = document.getElementById("sideBar");

  button.addEventListener("click", function() {
    if (sideBar.style.display == "none") {
      sideBar.setAttribute("style", "display: block");
    } else {
      sideBar.setAttribute("style", "display: none");
    }
  });

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typeWriter").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}

function cursorAnimation() {
  var cursor = document.getElementById("cursor");
  cursor.animate({
    opacity: [0, 1], 
  },500)
}