import aboutMe from "../js/app/about-me.js";
import home from "../js/app/app-home.js";
import menu from "../js/app/app-menu.js";
import protfolio from "./app/protfolio.js";
(function () {
  //forcing scroll to top on reload
  window.onbeforeunload = function () {
    // window.scrollTo(0, 0);
  };

  //======== start menu
  if ($(".menu")) {
    menu.init();
  }
  //========== hero section
  if ($(".hero")) {
    home.init();

    home.initSectionHome();
  }
  // add animation on scroll
  var aboutMeOpen, portfolioOpen;
  function reveal() {
    const sections = $(".section");
    for (let i = 0; i < sections.length; i++) {
      const elementTop = sections[i].getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      if (elementVisible < windowHeight - elementTop) {
        sections[i].classList.add("reveal");
        if (
          aboutMeOpen === undefined &&
          sections[i].classList.contains("about-me")
        ) {
          aboutMe.init();
          aboutMeOpen = true;
        }
        if (
          portfolioOpen === undefined &&
          sections[i].classList.contains("portfolio")
        ) {
          protfolio.init();
          portfolioOpen = true;
        }
      }
    }
  }

  window.addEventListener("scroll", reveal);
  reveal();

  //======== about-me
  if ($(".about-me")) {
    aboutMe.initCanvas();
  }

  //======== portfolio
  if ($(".portfolio")) {
    protfolio.initProjects();
  }
})();
