function generate60Stars() {
  let stars = document.createElement("div");
  stars.classList.add("stars");
  document.body.appendChild(stars);
  document.addEventListener("mousemove", (e) => {

    const mousePosX = e.clientX;
    const mousePosY = e.clientY;

    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      const top = star.getBoundingClientRect().y;
      const left = star.getBoundingClientRect().x;
      const distance = Math.hypot(left - mousePosX, top - mousePosY);

      const withinRange = distance <= 100;
      if (withinRange) {
        star.style.transform = "scale(3)";
      } else if (!withinRange) {
        if (star.style.transform == "scale(3)") {
          star.style.transform = "scale(1)";
        }
      }
    });
  });
  for (let i = 0; i < 1000; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    const stars = document.querySelector(".stars");
    stars?.appendChild(star);
  }
}

setTimeout(() => {
  generate60Stars();
}, 100);
