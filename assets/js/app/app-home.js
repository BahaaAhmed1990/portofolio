export default (function () {
  const home = {
    init: function () {
      $("#txt").blast({ delimiter: "character", tag: "span" });
    },
    initSectionHome: function () {
      var hero = jQuery(".hero");
      var a = 0;

      // add animation after loading page
      hero.find(".blast").each(function () {
        a = a + 100;

        var elem = $(this);

        setTimeout(function () {
          elem.addClass("animate__animated animate__fadeIn");
        }, a);
      });

      // add animation on hover char
      setTimeout(function () {
        // removing start up animation classes
        hero
          .find(".blast")
          .removeClass("animate__animated animate__fadeIn")
          .css("opacity", 1);

        // add eventlisteners
        hero.find(".blast").mouseenter(function () {
          var elem = jQuery(this);

          elem.addClass("animate__animated animate__rubberBand");
          elem.one(
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
            function () {
              elem.removeClass("animate__animated animate__rubberBand");
            }
          );
        });
      }, 3000);
    },
  };
  return home;
})();
