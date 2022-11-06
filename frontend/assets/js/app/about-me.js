export default (function () {
  var aboutMe = {
    init: function () {
      var about = $(".about-me");
      var a = 100;
      // add animation on scroll to section
      about.find(".blast").each(function () {
        let elem = $(this);
        a += 100;
        setTimeout(() => {
          elem.addClass("animate__animated animate__fadeIn");
        }, a);
      });

      // add char animation
      setTimeout(() => {
        // remove the start aimation
        about.find(".blast").each(function () {
          $(this)
            .removeClass("animate__animated animate__fadeIn")
            .css("opacity", 1);
        });

        // add event listener
        about.find(".blast").each(function () {
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
    initCanvas: function () {
      if (
        !$("#myCanvas").tagcanvas({
          textColour: "#bb6ef5",
          outlineThickness: 0.5,
          outlineColour: "#FE0853",
          maxSpeed: 0.06,
          freezeActive: true,
          shuffleTags: true,
          shape: "sphere",
          zoom: 0.8,
          wheelZoom: false,
          noSelect: true,
          textFont: "sans-serif,Arial",
          textHeight: 16,
          freezeDecel: true,
          fadeIn: 3000,
          initial: [0.3, -0.1],
          depth: 1.1,
        })
      ) {
        // TagCanvas failed to load
        $("#myCanvasContainer").hide();
      }
    },
  };
  return aboutMe;
})();
