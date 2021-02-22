const btn = document.querySelectorAll("button");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
let referenceId;

btn.forEach((element) => {
  element.addEventListener("click", () => {
    if (element === start) {
      reference = setInterval(newBg, 300);
    }
    if (element === stop) {
      clearInterval(reference);
      defaultBg();
    }
  });
});

const randomBg = () => {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
};

const newBg = () => {
  document.body.style.background = randomBg();
};

const defaultBg = () => {
  document.body.style.background = "#fff";
};
