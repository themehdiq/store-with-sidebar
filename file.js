// Get the button, and when the user clicks on it, execute myFunction
document.querySelector(".title").onclick = function () {
  myFunction();
};
document.querySelector(".title1").onclick = function () {
  myFunction1();
};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.querySelector(".sub-cat").classList.toggle("show-list");
  document.querySelector(".up-arrow").classList.toggle("rotate-arrow");
}
function myFunction1() {
  document.querySelector(".sub-cat1").classList.toggle("show-list");
  document.querySelector(".up-arrow1").classList.toggle("rotate-arrow");
}
