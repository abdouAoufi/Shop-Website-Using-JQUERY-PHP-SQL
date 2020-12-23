$(document).ready(function () {

    $('#SHOP').click(function () {
        activeShopMenu();
    })
    $('.form-cancel').click(removeForm);
    $('.f-slider-btn').click(function () {

    });
    $('.shop').click(displayBag);
    $('.btn-container').click(function () {
        $('.shopping-bag').removeClass('show-bag');
        $('.form').removeClass('form-only');
    })
    // swichImages();
});

function swichImages() {

    setTimeout(function () {
        $('.f-slide-2').css(
            "transform", "translateX(0)",
        ).delay(3000);
    }, 2000)


    setTimeout(function () {
        $('.f-slide-3').css(
            "transform", "translateX(0)",
        ).delay(3000);
    }, 3000)

    setTimeout(function () {
        $('.f-slide-4').css(
            "transform", "translateX(0)",
        ).delay(3000);
    }, 4000)
}



function removeShopMenu() {
    $('.form').removeClass('form-only');
    $('.shop-menu').removeClass('showw');
}

function activeShopMenu() {
    $('.shop-menu').addClass('showw');
    $('.form').addClass('form-only');
}

function removeForm() {
    $('.form').removeClass('form-active');
    $('.form').removeClass('sign-active');
}

function displayBag() {
    $('.form').addClass('form-only');
    $('.shopping-bag').addClass('show-bag');
}






