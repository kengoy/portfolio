const buttons = document.querySelectorAll("[data-carousel-button]");
const dots = document.querySelectorAll("[data-carousel-indicator]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    showSlides(offset);
  });
});

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const activeDot = document
      .querySelector("[data-carousel-nav]")
      .querySelector("[data-active]");
    const targetDot = e.target.closest("button");
    if (activeDot === targetDot) return;
    delete activeDot.dataset.active;
    targetDot.dataset.active = true;
    const targetIndex = Array.from(dots).findIndex((dot) => dot === targetDot);

    const slides = document.querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    slides.children[targetIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

function showSlides(offset) {
  const slides = document.querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;

  const activeDot = document
    .querySelector("[data-carousel-nav]")
    .querySelector("[data-active]");
  dots[newIndex].dataset.active = true;
  delete activeDot.dataset.active;
}

setInterval(function () {
  showSlides(1);
}, 5000);
