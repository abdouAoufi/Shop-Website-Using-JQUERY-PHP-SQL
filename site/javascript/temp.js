$(document).ready(() => {
  $("#SHOP").click(() => {
    activeShopMenu();
  });
  $(".form-cancel").click(removeForm);
  $(".shop").click(displayBag);
  $(".btn-container").click(() => {
    $(".shopping-bag").removeClass("show-bag");
    $(".form").removeClass("form-only");
  });
  // swichImages();
});

function swichImages() {
  setTimeout(() => {
    $(".f-slide-2").css("transform", "translateX(0)").delay(3000);
  }, 2000);

  setTimeout(() => {
    $(".f-slide-3").css("transform", "translateX(0)").delay(3000);
  }, 3000);

  setTimeout(() => {
    $(".f-slide-4").css("transform", "translateX(0)").delay(3000);
  }, 4000);
}

function removeShopMenu() {
  $(".form").removeClass("form-only");
  $(".shop-menu").removeClass("showw");
}

function activeShopMenu() {
  $(".shop-menu").addClass("showw");
  $(".form").addClass("form-only");
}

function removeForm() {
  $(".form").removeClass("form-active");
  $(".form").removeClass("sign-active");
}

function displayBag() {
  $(".form").addClass("form-only");
  $(".shopping-bag").addClass("show-bag");
}
