document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  splitTexts();
  const txtHeaderToAnimateList = gsap.utils.toArray(".header__txt--animation");
  const txtToAnimateList = gsap.utils.toArray(".txt--animation");
  const textsToShuffle = document.querySelectorAll(".text--shuffle");
  const cardsToAnimate = document.querySelectorAll(".card");

  txtHeaderToAnimateList.forEach(txtToAnimate => {
    const txtToAnimateSelector = gsap.utils.selector(txtToAnimate);
    gsap.to(txtToAnimateSelector(".word"), {
      y: 0,
      stagger: 0.15,
      delay: 0.1,
      duration: 0.2,
      scrollTrigger: {
        trigger: txtToAnimate,
      }
    });
  });

  txtToAnimateList.forEach(txtToAnimate => {
    const txtToAnimateSelector = gsap.utils.selector(txtToAnimate);
    gsap.to(txtToAnimateSelector(".word"), {
      y: 0,
      stagger: 0.15,
      delay: 0.1,
      duration: 0.2,
      scrollTrigger: {
        trigger: txtToAnimate,
        toggleActions: "play reset none reset"
      }
    });
  });

  gsap.to((".card--animation .card.card--animation-left"), {
    opacity: 1,
    rotate: -20,
    x: -50,
    delay: 0.3,
    duration: 0.1,
    scrollTrigger: {
      trigger: ".card--animation",
    }
  });

  gsap.to((".card--animation .card.card--animation-right"), {
    opacity: 1,
    rotate: 20,
    x: 50,
    delay: 0.3,
    duration: 0.1,
    scrollTrigger: {
      trigger: ".card--animation",
    }
  });

  gsap.to((".card--animation .card.card--animation-center"), {
    opacity: 1,
    y: -20,
    delay: 0.3,
    duration: 0.1,
    scrollTrigger: {
      trigger: ".card--animation",
    }
  });

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
});

function splitTexts() {
  new SplitType(".txt--animation .title", { types: 'words' });
  new SplitType(".txt--animation .subtitle", { types: 'words' });
  new SplitType(".header__txt--animation .title", { types: 'words' });
  new SplitType(".header__txt--animation .subtitle", { types: 'words' });
}