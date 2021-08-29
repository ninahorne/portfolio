function generate60Stars() {
  let stars = document.createElement("div");
  stars.classList.add("stars");
  const bodyHeight = document.body.clientHeight;
  
  let shootingStarOne = document.createElement('div');
 

  shootingStarOne.classList.add('shooting-star-1');


  stars.appendChild(shootingStarOne);





  stars.setAttribute('style', `height: ${bodyHeight}px`)
  document.body.appendChild(stars);
  for (let i = 0; i < 1000; i++) {
    let star = document.createElement("div");
    star.classList.add("star", 'rellax');
    const top = Math.random()*bodyHeight + 'px';
    const left = Math.random()*100 + 'vw';
    star.setAttribute('style',`top:${top};left: ${left}`);
    if(i%5 === 0){
        const randomNumber = Math.round(Math.random()*10);
        const direction = randomNumber % 2 == 0 ? -1 : 1;
        star.setAttribute('data-rellax-speed', direction * Math.round(Math.random()*5));
    }
   
    const stars = document.querySelector(".stars");
    stars?.appendChild(star);
    
  }
}

function moonEffects() {
  var moon = document.querySelector(".moon");

  moon.addEventListener("mousemove", function (t) {
    var e = -(window.screen.width / 2 - t.pageX) / 30,
      n = (window.screen.height / 2 - t.pageY) / 10;
    moon.setAttribute(
      "style",
      "transform: rotateY(" +
        e +
        "deg) rotateX(" +
        n +
        "deg);-webkit-transform: rotateY(" +
        e +
        "deg) rotateX(" +
        n +
        "deg);-moz-transform: rotateY(" +
        e +
        "deg) rotateX(" +
        n +
        "deg)"
    );
  });
}

setTimeout(() => {
  generate60Stars();
  var rellax = new Rellax('.rellax');

//   moonEffects();
}, 100);
