const toggleContainer = document.querySelector(".toggleContainer");
const toggle = document.querySelector("#toggle");

toggleContainer.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleContainer.classList.toggle("move");
});
