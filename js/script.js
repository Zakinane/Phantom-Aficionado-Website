///////////////////////////////////////////////////////////THE PAGES
let currentPage = 1;

function showPage(pageNumber) {
  const container = document.querySelector(".container");
  container.style.transform = `translateX(-${(pageNumber - 1) * 100}vw)`;
  currentPage = pageNumber;
  updateIcons();
}

function updateIcons() {
  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon, index) => {
    if (index === currentPage - 1) {
      icon.classList.add("active");
    } else {
      icon.classList.remove("active");
    }
  });
}

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;

function handleTouchStart(evt) {
  const firstTouch = evt.touches[0];
  xDown = firstTouch.clientX;
}

function handleTouchMove(evt) {
  if (!xDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let xDiff = xDown - xUp;

  if (xDiff > 0) {
    if (currentPage < 4) { //to increment for every page added "Phorum - Poll - Notifications - IM"
      showPage(currentPage + 1);
    }
  } else {
    if (currentPage > 1) {
      showPage(currentPage - 1);
    }
  }
  xDown = null;
}

////////////////////////////////////////////////////////Poll of the week
