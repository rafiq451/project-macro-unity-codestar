const imgCourse1 = document.querySelector(".image-course1");
const imgCourse2 = document.querySelector(".image-course2");

function lebarlayar() {
  let lebarLayar = window.innerWidth;

  if (lebarLayar <= 992) {
    imgCourse1.classList.add("desktop2");
    imgCourse2.classList.add("desktop1");
    imgCourse1.classList.remove("desktop1");
    imgCourse2.classList.remove("desktop2");
  } else {
    imgCourse1.classList.add("desktop1");
    imgCourse2.classList.add("desktop2");
    imgCourse1.classList.remove("desktop2");
    imgCourse2.classList.remove("desktop1");
  }
}

window.onload = lebarlayar;
window.onresize = lebarlayar;

// notification-box

let box = document.getElementById("box");
let down = false;

function toggleNotification() {
  if (down) {
    box.style.height = "0px";
    box.style.opacity = 0;
    down = false;
  } else {
    box.style.height = "auto";
    box.style.opacity = 1;
    down = true;
  }
}
