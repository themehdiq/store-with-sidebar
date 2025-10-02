// Get the button, and when the user clicks on it, execute myFunction
document.querySelector(".category-name-1").onclick = function () {
  showList1();
};
document.querySelector(".category-name-2").onclick = function () {
  showList2();
};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function showList1() {
  document.querySelector(".menu-1").classList.toggle("show-list");
  document.querySelector(".list-arrow-1").classList.toggle("rotate-arrow");
}

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function showList2() {
  document.querySelector(".menu-2").classList.toggle("show-list");
  document.querySelector(".list-arrow-2").classList.toggle("rotate-arrow");
}
