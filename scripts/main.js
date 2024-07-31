document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  const myText = new SplitType(".txt--animation", { types: 'words' });
  const txtToAnimateList = gsap.utils.toArray(".txt--animation");

  txtToAnimateList.forEach(txtToAnimate => {
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

  gsap.to((".card--animation .card"), {
    y: 0,
    opacity: 1,
    delay: 0.1,
    duration: 0.2,
    scrollTrigger: {
      trigger: ".card--animation",
      markers: true
    }
  });
 });