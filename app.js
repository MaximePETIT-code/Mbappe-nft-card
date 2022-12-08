const card = document.querySelector(".card");
let cardSize;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - cardSize.x;
  const topY = mouseY - cardSize.y;
  const center = {
    x: leftX - cardSize.width / 2,
    y: topY - cardSize.height / 2,
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  card.style.transform = `
    scale3d(1.05, 1.05, 1.05)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;
  card.style.opacity = "1";
}

card.addEventListener("mouseenter", () => {
  cardSize = card.getBoundingClientRect();
  document.addEventListener("mousemove", rotateToMouse);
});

card.addEventListener("mouseleave", () => {
  document.removeEventListener("mousemove", rotateToMouse);
  card.style.transform = "";
  card.style.opacity = "";
});
