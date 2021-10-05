function animateTitle() {
  const heading = document.querySelector(".intro__paragraph h2");
  const text = "Hi, I'm Nina!";
  const containerSpan = document.createElement('span');
  heading.append(containerSpan);
  if (!heading) return;

  text.split("").map((char, index) => {
    let style =`animation-delay: ${0.5 + index / 10}s`;
    let span = document.createElement("span");
    span.textContent = char;
    span.style = style;
    containerSpan.appendChild(span);
  });
}


document.addEventListener("DOMContentLoaded", animateTitle);
