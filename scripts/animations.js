const cardAnimations = {
  left: {
    opacity: 1,
    rotate: -20,
    x: -50,
    delay: 0,
    duration: 0.1
  },
  right: {
    opacity: 1,
    rotate: 20,
    x: 50,
    delay: 0,
    duration: 0.1,
  },
  center: {
    opacity: 1,
    y: -20,
    delay: 0,
    duration: 0.1,
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  splitTexts();
  const sectionsToAnimate = gsap.utils.toArray(".section--animation");

  sectionsToAnimate.forEach((section) => {
    const sectionSelector = gsap.utils.selector(section);
    const textsToAnimate = gsap.utils.toArray(sectionSelector(".txt--animation"));
    const cardsToAnimate = gsap.utils.toArray(sectionSelector(".card--animation .card"));

    //GSAP Timelines does not need a selector
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        markers: true
      }
    });

    textsToAnimate.forEach((text) => {
      const textSelector = gsap.utils.selector(text);
      tl.to(textSelector(".word"), {
        y: 0,
        stagger: 0.15,
        delay: 0.1,
        duration: 0.2
      });
    });

    cardsToAnimate.forEach((card) => {
      const animationDirection = card.getAttribute("data-animation-direction");
      tl.to(card, cardAnimations[animationDirection]);
    });
  });

  setTextsHoverEffect();
});

function splitTexts() {
  //TODO simplificar isso aqui
  new SplitType(".txt--animation .title", { types: 'words' });
  new SplitType(".txt--animation .subtitle", { types: 'words' });
}

function setTextsHoverEffect() {
  const textsToShuffle = document.querySelectorAll(".text--shuffle");

  textsToShuffle.forEach(text => {
    if (!(text instanceof HTMLElement)) return;

    const textToShuffle = baffle(text, {
      characters: 'abcdefghijklmnopqrstuvwxyz',
      speed: 75,
    });

    text.addEventListener("mouseenter", _.throttle(() => {
      textToShuffle.start();
      textToShuffle.reveal(1000, 500);
    }, 1000, { 'trailing': false }))
  });
}