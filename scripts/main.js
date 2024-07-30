document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  const myText = new SplitType(".txt-to-animate", { types: 'words' });
  const txtToAnimateList = gsap.utils.toArray(".txt-to-animate");

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


 });