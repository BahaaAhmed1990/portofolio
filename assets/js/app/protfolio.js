export default (function () {
  var portfolio = {
    init: function () {
      var portfolio = $(".portfolio");
      var a = 100;
      // add animation on scroll to section
      portfolio.find(".blast").each(function () {
        let elem = $(this);
        a += 100;
        setTimeout(() => {
          elem.addClass("animate__animated animate__fadeIn");
        }, a);
      });

      // add char animation
      setTimeout(() => {
        // remove the start aimation
        portfolio.find(".blast").each(function () {
          $(this)
            .removeClass("animate__animated animate__fadeIn")
            .css("opacity", 1);
        });

        // add event listener
        portfolio.find(".blast").each(function () {
          const elem = $(this);
          elem.mouseenter(function () {
            elem.addClass("animate__animated animate__rubberBand");
            elem.one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function () {
                elem.removeClass("animate__animated animate__rubberBand");
              }
            );
          });
        });
      }, 1000);
    },
    initProjects: function () {
      $("#portfolio-list").isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: { duration: "750", easing: "linear" },
      });

      $("#portfolio-filter")
        .find("li")
        .click(function () {
          var selector = $(this).attr("data-filter");
          $("#portfolio-list").isotope({
            filter: selector,
            animationOptions: {
              duration: "750",
              easing: "linear",
              queue: "false",
            },
          });
          return false;
        });
    },
  };
  return portfolio;
})();
