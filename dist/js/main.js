const hambtn = document.querySelector(".hamburger");

hambtn.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
  hambtn.classList.toggle("active");
});
