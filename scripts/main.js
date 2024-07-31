const today = new Date();

document.addEventListener("DOMContentLoaded", (event) => {
  setFooterYear();
});

 function setFooterYear() {
  const footerYear = document.querySelector(".footer-year__txt");
  footerYear.textContent = today.getFullYear();
 }