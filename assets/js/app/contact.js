export default (function () {
  var contact = {
    init: function () {
      var contact = $(".contact");
      var a = 100;
      // add animation on scroll to section
      contact.find(".blast").each(function () {
        let elem = $(this);
        a += 200;
        setTimeout(() => {
          elem.addClass("animate__animated animate__fadeIn");
        }, a);
      });

      // add char animation
      setTimeout(() => {
        // remove the start aimation
        contact.find(".blast").each(function () {
          $(this)
            .removeClass("animate__animated animate__fadeIn")
            .css("opacity", 1);
        });

        // add event listener
        contact.find(".blast").each(function () {
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
      }, 2000);

      $("#msg").on("focus", function () {
        $(".textarea-label").css("transform", "translate3d(0,0,0)");
      });
      $("#msg").on("blur", function () {
        $(".textarea-label").css("transform", "translate3d(100%,0,0)");
      });
    },
  };
  return contact;
})();
