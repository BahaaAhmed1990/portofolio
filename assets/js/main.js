import home from "../js/app/app-home.js";
import menu from "../js/app/app-menu.js";
(function () {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    console.log("first");
  };
  //======== start menu
  if ($(".menu")) {
    menu.init();
  }

  if ($(".hero")) {
    window.scrollTo(0, 0);

    home.init();

    home.initSectionHome();
  }
  function reveal() {
    const sections = $(".section");
    for (let i = 0; i < sections.length; i++) {
      const elementTop = sections[i].getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
      if (elementVisible < windowHeight - elementTop) {
        sections[i].classList.add("reveal");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  reveal();
})();
