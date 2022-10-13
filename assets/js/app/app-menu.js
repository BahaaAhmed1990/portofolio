export default (function () {
  var menu = {
    init: function () {
      $(".menu_icon").click(function () {
        this.classList.toggle("open");
        this.parentNode.classList.toggle("open");
      });
    },
  };
  return menu;
})();
