
var skillSection = document.getElementsByClassName("skill");
var skillContainer = document.getElementById("skillsdisplay");
var count = false;
window.addEventListener("scroll", checkScroll);
function iniZero() {
  for (let bar of skillSection) {
    bar.style.width = 0 + "%";
  }
}
iniZero();
function filling() {
  for (let bar of skillSection) {
    let filling = bar.getAttribute("data-value");
    let current = 0;
    let interval = setInterval(function () {
      if (current > filling) {
        clearInterval(interval);
        return;
      }
      current++;
      bar.style.width = current + "%";
    }, 5);
  }
}

function checkScroll() {
  var Coordinates = skillContainer.getBoundingClientRect();
  if(!count && Coordinates.top <= window.innerHeight) {
    count = true;
    filling();
  }
    else if(Coordinates.top > window.innerHeight){
    count=false;
    iniZero();
  }
}
