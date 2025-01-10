const grids = document.querySelector('.grids');
const totalGrids = document.querySelectorAll('.grid').length;
let index = 0;
const interval = 5000; // 5 seconds per grid

function slideGrids() {
  index = (index + 1) % totalGrids; // Loop back to the first grid
  grids.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideGrids, interval);
