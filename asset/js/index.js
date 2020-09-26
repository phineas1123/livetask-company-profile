function scrollClick(id) {
  console.log("pressed");
  $("html,body").animate(
    {
      scrollTop: $("#" + id).offset().top,
    },
    "slow"
  );
}
