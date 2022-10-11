import home from "../js/app/app-home.js";
(function () {
  //======== split h1 text

  if ($(".hero")) {
    window.scrollTo(0, 0);

    home.init();

    home.initSectionHome();
  }
})();
