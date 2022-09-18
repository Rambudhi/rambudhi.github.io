$(document).ready(function(){
    $(this).scrollTop(0);
});

(function ($) {
    ("use strict");

    // Page loading
    $(window).on("load", function () {
        $("#preloader-active").delay(450).fadeOut("slow");
        $("body").delay(450).css({
            overflow: "visible"
        });
        $("#onloadModal").modal("show");
    })

    /*-----------------
        Menu Stick
    -----------------*/
    var header = $(".sticky-bar");
    var win = $(window);
    win.on("scroll", function () {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass("stick");
            $(".header-style-2 .categories-dropdown-active-large").removeClass("open");
            $(".header-style-2 .categories-button-active").removeClass("open");
        } else {
            header.addClass("stick");
        }
    });

    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class="fi-rs-arrow-small-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    });

})(jQuery);

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        text: 'Thanks for your submission!',
      })
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data["errors"].map(error => error["message"]).join(", ")
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "There was a problem submitting your form"
          })
        }
      })
    }
  }).catch(error => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "There was a problem submitting your form"
    })
  });
}
form.addEventListener("submit", handleSubmit)