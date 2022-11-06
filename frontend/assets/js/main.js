import aboutMe from "../js/app/about-me.js";
import home from "../js/app/app-home.js";
import menu from "../js/app/app-menu.js";
import protfolio from "./app/protfolio.js";
import contact from "./app/contact.js";

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
  var aboutMeOpen, portfolioOpen, contactOpen;
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
        if (
          contactOpen === undefined &&
          sections[i].classList.contains("contact")
        ) {
          contact.init();
          contactOpen = true;
        }
      }
    }
  }

  function navHighter() {
    const sections = $("section[id]");
    // Get current scroll position
    let scrollY = window.pageYOffset;

    //loop through sections get height,top and id
    sections.each(function () {
      let sectionHeight = $(this)[0].offsetHeight;
      // console.log($(this)[0].getBoundingClientRect().top);
      // console.log(window.pageYOffset);
      const sectionTop =
        $(this)[0].getBoundingClientRect().top + window.pageYOffset - 100;
      // console.log(sectionTop);
      const sectionId = $(this)[0].getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".menu_nav a[href*=" + sectionId + "]")
          .classList.add("active");
        console.log(sectionId);
      } else {
        document
          .querySelector(".menu_nav a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    });
  }
  window.addEventListener("scroll", reveal);
  window.addEventListener("scroll", navHighter);
  reveal();

  //======== about-me
  if ($(".about-me")) {
    aboutMe.initCanvas();
  }

  //======== portfolio
  if ($(".portfolio")) {
    protfolio.initProjects();
  }

  //======== contact
  if ($(".contact")) {
    console.log("from contact section");
  }
})();
