export default (function () {
  var modal = {
    initSlideShow: function (imgArr) {
      // chech existance of image in array
      if (imgArr.length !== 0) {
        // slides to sidehow container
        for (let i = 0; i < imgArr.length; i++) {
          const mySlides = $("<div></div>");
          mySlides.attr("class", "myslides fade");
          const img = $("<img />");
          img.attr("src", imgArr[i].getAttribute("href"));
          mySlides.append(img);
          $(".slideshow-container").append(mySlides);
        }
      } else {
        const msg = $("<p>No Img Found</p>");
        msg.attr("class", "slideshow-msg");
        $(".slideshow-container").append(msg);
        return;
      }
      let slideIndex = 1;
      showSlides(slideIndex);

      function showSlides(n) {
        const slides = $(".myslides");
        //check for last image
        if (n > slides.length) {
          slideIndex = 1;
        }
        //check for first image
        if (n < 1) {
          slideIndex = slides.length;
        }
        // make all slides disappear
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "flex";
      }

      // add eventlistener functions to previous and next controllers
      $(".prev").click(function () {
        showSlides((slideIndex -= 1));
      });
      $(".next").click(function () {
        showSlides((slideIndex += 1));
      });
    },
    plusSlide: function (n) {},
  };

  return modal;
})();
