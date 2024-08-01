document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  splitTexts();
  const txtToAnimateList = gsap.utils.toArray(".txt--animation");

  txtToAnimateList.forEach(txtToAnimate => {
    const txtToAnimateSelector = gsap.utils.selector(txtToAnimate);
    gsap.to(txtToAnimateSelector(".word"), {
      y: 0,
      stagger: 0.15,
      delay: 0.1,
      duration: 0.2,
      scrollTrigger: {
        trigger: txtToAnimate
      }
    });
  });

  // gsap.to((".card--animation .card"), {
  //   y: 0,
  //   scale: 1,
  //   opacity: 1,
  //   delay: 0.1,
  //   duration: 0.1,
  //   scrollTrigger: {
  //     trigger: ".card--animation",
  //   }
  // });

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
});

function splitTexts() {
  new SplitType(".txt--animation .title", { types: 'words' });
  new SplitType(".txt--animation .subtitle", { types: 'words' });
}