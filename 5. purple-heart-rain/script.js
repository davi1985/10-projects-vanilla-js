function createHeart() {
  const img = document.createElement("img");
  img.setAttribute("src", "./js.svg");
  const heart = document.createElement("div").appendChild(img);

  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 400);
