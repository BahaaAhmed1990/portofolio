export default (function () {
  var modal = {
    initSlideShow: function (imgArr) {
      console.log("first");
      console.log(imgArr.length);
      if (imgArr.length === 0) {
        const msg = $("<p>No Img Found</p>");
        console.log(msg);
        $(".slideshow-container").append(msg);
      }
    },
  };
  return modal;
})();
