export default (function () {
  var menu = {
    init: function () {
      $(".menu_icon").click(function () {
        this.classList.toggle("open");
        this.parentNode.classList.toggle("open");
      });

      $(".menu_nav a").click(function () {
        $(".menu_nav a").each(function () {
          $(this).removeClass("animate__animated animate__headShake");
        });

        $(this).addClass("animate__animated animate__headShake");
      });
    },
  };
  return menu;
})();
