$(document).ready(function () {
    $('.search').click(function () {
        activeSearch();
    });
    $('.form').click(function () {
        if ($('.search-bar').hasClass('search-bar-active')) {
            removeSearch();
        }
        if ($('.shop-menu').hasClass('showw')) {
            removeShopMenu();
        }
    });
    $('.search-cancel').click(function () {
        $('.ser').val("");
    })
    $('#SHOP').click(function () {
        activeShopMenu();
    })
    $('.form-cancel').click(removeForm);
    $('.f-slider-btn').click(function () {

    })
    // swichImages();
})

function swichImages() {
    setTimeout(function () {
        $('.f-slide-1').css(
            "transform", "translateX(500%)",
        ).delay(3000);
    }, 2000)

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


    setTimeout(function () {
        $('.f-slide-1').css(
            "transform", "translateX(-500%)",
        ).delay(3000);
    }, 5000)
}

function activeSearch() {
    $('.search-bar').addClass('search-bar-active');
    $('.form').addClass('form-only');
}

function removeSearch() {
    $('.search-bar').removeClass('search-bar-active');
    $('.form').removeClass('form-only');
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