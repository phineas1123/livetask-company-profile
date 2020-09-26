$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#scroll-top").fadeIn();
    } else {
      $("#scroll-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#scroll-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});
function scrollClick(id) {
  console.log("pressed");
  $("html,body").animate(
    {
      scrollTop: $("#" + id).offset().top,
    },
    "slow"
  );
}
