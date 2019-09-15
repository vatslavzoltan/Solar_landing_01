document.addEventListener("DOMContentLoaded", function() {
  $(".hamburger").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".header").toggleClass("active");
  });

  $('a[href*="#"]').on("click", function(e) {
    e.preventDefault();
    $(".header").removeClass("active");
    $(".hamburger").removeClass("active");

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100
      },
      500,
      "linear"
    );
  });
});
$(document).ready(function() {
  //E-mail Ajax Send
  $("form.callback").submit(function(e) {
    //Change
    e.preventDefault();
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(th)
        .find(".success")
        .addClass("active")
        .css("display", "flex")
        .hide()
        .fadeIn();
      setTimeout(function() {
        $(th)
          .find(".success")
          .removeClass("active")
          .fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });
});
