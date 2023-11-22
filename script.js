const imgsContainer = document.getElementById("img");
const imgs = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
  idx++;
  if (idx > imgs.length - 1) {
    idx = 0;
  }

  imgsContainer.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);