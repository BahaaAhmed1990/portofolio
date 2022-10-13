import home from "../js/app/app-home.js";
import menu from "../js/app/app-menu.js";
(function () {
  //======== start menu
  if ($(".menu")) {
    menu.init();
  }

  if ($(".hero")) {
    window.scrollTo(0, 0);

    home.init();

    home.initSectionHome();
  }
})();
