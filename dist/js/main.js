const hambtn = document.querySelector(".hamburger");

hambtn.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
  hambtn.classList.toggle("active");
});



let mybutton = document.getElementById("btnScrollToTop");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
