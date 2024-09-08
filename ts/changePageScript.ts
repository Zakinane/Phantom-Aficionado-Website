// // import function to register Swiper custom elements
// import { register } from "swiper/element/bundle";
// // register Swiper custom elements
// register();

// let currentPageIndex: number = 0;

// /**  Switch to the page number in parameter by translating the html content
//  *
//  * Note that the buttons in the footer call this function (see main.html) */
// function showPage(pageIndex: number): void {
//   const container: HTMLElement | null = document.querySelector(".container");

//   if (container) {
//     updateIcons(pageIndex);

//     // Move all content to move pages
//     container.style.transform = `translateX(-${pageIndex * 100}vw)`;

//     currentPageIndex = pageIndex;
//   }
// }

// function updateIcons(newActiveIconIndex: number): void {
//   const icons = document.querySelectorAll(".icon");

//   icons[currentPageIndex].classList.remove("active");
//   icons[newActiveIconIndex].classList.add("active");
// }

// /** Initial position of where a touchEvent was triggered. */
// let initialXTouchPos: number | null = null;

// document.addEventListener(
//   "touchstart",

//   // Save the initial touch position
//   function (evt: TouchEvent): void {
//     initialXTouchPos = evt.touches[0].clientX;
//   },
//   false
// );

// document.addEventListener(
//   "touchmove",

//   // Scroll the pages
//   function (evt: TouchEvent): void {
//     if (initialXTouchPos === null) {
//       return;
//     }

//     let finalXTouchPos = evt.touches[0].clientX;
//     let xDiff = finalXTouchPos - initialXTouchPos;

//     if (xDiff < 0) {
//       if (currentPageIndex < 4) {
//         //to increment for every page added "Phorum - Poll - Notifications - IM"
//         showPage(currentPageIndex + 1);
//       }
//     } else {
//       if (currentPageIndex > 0) {
//         showPage(currentPageIndex - 1);
//       }
//     }

//     initialXTouchPos = null;
//   },
//   false
// );
