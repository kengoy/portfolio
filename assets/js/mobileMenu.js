const hamburgerCheckBox = document.getElementById("hamburger-check");
hamburgerCheckBox.addEventListener("change", (e) => {
  if (e.target.checked) {
    window.addEventListener("scroll", disableScroll, { passive: false });
    window.addEventListener("touchmove", disableScroll, { passive: false });
  } else {
    window.removeEventListener("scroll", disableScroll, { passive: false });
    window.removeEventListener("touchmove", disableScroll, { passive: false });
  }
});

const navAboutMe = document.getElementById("mobile-nav-aboutme");
navAboutMe.addEventListener("click", (e) => {
  hamburgerCheckBox.checked = false;
  triggerEvent(hamburgerCheckBox, "change");
});

const navResume = document.getElementById("mobile-nav-resume");
navResume.addEventListener("click", (e) => {
  hamburgerCheckBox.checked = false;
  triggerEvent(hamburgerCheckBox, "change");
});

const navPortfolio = document.getElementById("mobile-nav-portfolio");
navPortfolio.addEventListener("click", (e) => {
  hamburgerCheckBox.checked = false;
  triggerEvent(hamburgerCheckBox, "change");
});

function disableScroll() {
  window.scrollTo(0, 0);
}

function triggerEvent(element, eventName) {
  var event = new Event(eventName);
  element.dispatchEvent(event);
}
