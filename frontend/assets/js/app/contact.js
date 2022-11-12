export default (function () {
  var contact = {
    init: function () {
      var contact = $(".contact");
      var a = 100;
      // add animation on scroll to section
      contact.find(".blast").each(function () {
        let elem = $(this);
        a += 100;
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

      $("#submit").click((e) => {
        e.preventDefault();
        const name = $("#name").val();
        const email = $("#mail").val();
        const subject = $("#subject").val();
        const msgText = $("#msg").val();

        const checkInputsResult = this.validateInputs(name, email, msgText);
        subject ? subject : undefined;

        console.log(checkInputsResult);
        console.log(subject);
        if (checkInputsResult) {
          axios({
            method: "post",
            url: "/api/send-msg",
            data: {
              name,
              email,
              subject,
              msgText,
            },
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(function (res) {
              console.log(res.data);
            })
            .catch(function (err) {
              console.log(err.msg);
            });
        }
      });
    },
    validateInputs: function (name, email, msgText) {
      let valid = true;

      const errMsg = $(".err-msg");
      errMsg.text("");

      if (!/^[a-z ,.'-]+$/i.test(name)) {
        valid = false;
        $("#name").css("box-shadow", "inset #bb6ef5 0px 1px 2px 1px");
        $("#name-msg").text("names can contain only letters");
      }
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
        valid = false;
        $("#mail").css("box-shadow", "inset #bb6ef5 0px 1px 2px 1px");
        $("#mail-msg").text("please add a valid E-mail");
      }
      if (!msgText) {
        valid = false;
        $("#msg").css("box-shadow", "inset #bb6ef5 0px 1px 2px 1px");
        $("#textare-msg").text("please add your message");
      }
      return valid;
    },
  };
  return contact;
})();
