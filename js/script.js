///////////////////////////////////////////////////////////THE PAGES
var currentPage = 1;
function showPage(pageNumber) {
    var container = document.querySelector(".container");
    if (container) {
        container.style.transform = "translateX(-".concat((pageNumber - 1) * 100, "vw)");
        currentPage = pageNumber;
    }
    updateIcons();
}
function updateIcons() {
    var icons = document.querySelectorAll(".icon");
    icons.forEach(function (icon, index) {
        if (index === currentPage - 1) {
            icon.classList.add("active");
        }
        else {
            icon.classList.remove("active");
        }
    });
}
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
var xDown = null;
function handleTouchStart(evt) {
    var firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
}
function handleTouchMove(evt) {
    if (!xDown) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var xDiff = xDown - xUp;
    if (xDiff > 0) {
        if (currentPage < 4) {
            //to increment for every page added "Phorum - Poll - Notifications - IM"
            showPage(currentPage + 1);
        }
    }
    else {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    }
    xDown = null;
}
////////////////////////////////////////////////////////Poll of the week
