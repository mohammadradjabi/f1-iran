var flag = true;

$(".burgur").on("click", function () {
  if (flag) {
    $(".menu-sm").slideDown(500);
    flag = false;
  } else {
    $(".menu-sm").slideUp(500);
    flag=true
  }
});
