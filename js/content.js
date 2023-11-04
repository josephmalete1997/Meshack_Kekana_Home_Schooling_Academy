const openPlus = document.querySelectorAll(".open-panel .plus");
const openMinus = document.querySelectorAll(".open-panel .minus");
const openText = document.querySelectorAll(".open-panel p");

openPlus.forEach((openPlus, index) => {
  openPlus.addEventListener("click", () => {
    openPlus.style.display = "none";
    openMinus[index].style.display = "block";
    openText[index].style.display = "block";
  });
});
openMinus.forEach((openMinus, index) => {
  openMinus.addEventListener("click", () => {
    openPlus[index].style.display = "block";
    openMinus.style.display = "none";
    openText[index].style.display = "none";
  });
});
