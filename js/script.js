const imgCourse1 = document.querySelector('.image-course1');
const imgCourse2 = document.querySelector('.image-course2');

function lebarlayar() {
  let lebarLayar = window.innerWidth;

  if (lebarLayar <= 992) {
    imgCourse1.classList.add('desktop2');
    imgCourse2.classList.add('desktop1');
    imgCourse1.classList.remove('desktop1');
    imgCourse2.classList.remove('desktop2');
  } else {
    imgCourse1.classList.add('desktop1');
    imgCourse2.classList.add('desktop2');
    imgCourse1.classList.remove('desktop2');
    imgCourse2.classList.remove('desktop1');
  }
}

window.onload = lebarlayar;
window.onresize = lebarlayar;

// ketika di submit form nya kita tangkap nilai dari form tersebut
const formPesan = document.getElementById('form');

formPesan.addEventListener('submit', function (e) {
  e.preventDefault();

  const bodyDisk = document.querySelector('.body-disk');
  const elemenNew = document.createElement('p');

  elemenNew.innerText = document.getElementById('pesan').value;
  bodyDisk.appendChild(elemenNew);
  formPesan.reset();
});
