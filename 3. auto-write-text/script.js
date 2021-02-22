const btn = document.getElementById("btn");
const textContainer = document.getElementById("textContainer");
let textInput = document.querySelector("input");

let textToWrite = "";
let index = 0;

textInput.addEventListener("input", (e) => {
  textToWrite = e.target.value;
});

btn.addEventListener("click", () => {
  for (let i = 0; i <= textToWrite.length; i++) {
    write();
  }
  textInput.value = "";
});

function write() {
  textContainer.innerText = textToWrite.slice(0, index);
  index++;

  if (index > textToWrite.length) {
    index = 0;
  }
}
