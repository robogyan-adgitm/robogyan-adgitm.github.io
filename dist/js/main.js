const hambtn = document.querySelector(".hamburger");

hambtn.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
  hambtn.classList.toggle("active");
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}