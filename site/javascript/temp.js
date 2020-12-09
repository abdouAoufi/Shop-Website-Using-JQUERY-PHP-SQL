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

    });
    $('.shop').click(displayBag);
    $('.btn-container').click(function(){
        $('.shopping-bag').removeClass('show-bag');
        $('.form').removeClass('form-only');
    })
    getDataFromJson();
    swichImages();
})

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

function displayBag(){
    $('.form').addClass('form-only');
    $('.shopping-bag').addClass('show-bag');
}

function getDataFromJson(){
    $.ajax({
    method : 'GET',
    url : "data/data.json",
    dataType : "json",
}).done(function(data){
    $.each(data , function displayNames(id , name) {
        displayData(name , id)
    })
})
}
let postCounter = 0 ;

function displayData( full , id){
    
    product = `<a href="#">
    <article class="producte-home" id=${full.postId} >
    
        <div class="hd">
            <span>-14%</span>
        </div>
        <img src="${full.img[0]}" alt="">
        <div class="info">
            <h6>${full.title}</h6>
            <strong>${full.price} DA</strong>
        </div>
    </article>
</a>`;
if(postCounter < 8){
    $('.product-container').append(product);
    postCounter++;
}

$(`#${id}`).click(function (){
    appendHtml(full);
})
 

}
let isPictureDisplayerOpen = false ;

function appendHtml(data) {
    $('body').append(
        ` <section class="displayer full-page">
           <div class="display-content" id="pro">
               <div class="closee"><i class="fas fa-times"></i></div>
               <article class="product-to-diplay">
                   <h2 class="dis-title sp">${data.title} </h1>
                       <h3 class="dis-price sp"> ${data.price} DA <span class="priceState"> [
                               ${data.stateSell} ] </span> </h3>
                       <h3 class="dis-place sp">${data.place}
                       </h3>
                       <h3 class="dis-phone sp">Phone : <span>
                               ${data.phonePost}</span> </h3>

                       <a href="#"class="dis-category sp">
                           ${data.category} </a>
                       <p class="dis-date">Posted : <span>${data.hourPost}</span> </p>
                       <div class="dis-details sp">
                           <h5>Details : </h5>
                           <p>${data.descreption} </p>
                       </div>
                       <h3 class="dis-see sp">See Photos</h3>
                       <h5 class="seller-info">Information Seller :
                       </h5>
                       <div class="dis-profile">
                           <div class="inner-nav">
                               <div class="impor">
                                   <img src="https://images.unsplash.com/photo-1604919912564-6480b79b1c11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                                       alt="" height="60">
                                   <div class="dis-basic-info">
                                       <h5 class="name">${data.profile.name}</h5>
                                       <h5 class="wilaya">${data.profile.wilaya}</h5>
                                   </div>
                               </div>
                               <button class="others"><i class="fas
                                fa-caret-down"></i></button>
                           </div>
                           <div class="contact">
                               <button class="message" title="send message"><i class="far
                                fa-comments"></i></button>
                               <button class="others" title="save"><i class="fas
                                fa-bookmark"></i></button>
                               <button class="others" title="share"><i class="fas
                                fa-share"></i></button>
                               <button class="others" title="more"><i class="fas
                                fa-caret-down"></i></button>
                           </div>
                       </div>

               </article>

               <div class="pictures-container">
                   <img class="image-show" src="${data.img[0]}" alt="galaxy" title="${data.title}">
                  <i class = "fas fa-chevron-right next-image change-image" > </i>
                  <i class = "fas fa-chevron-left pre-image change-image" > </i>
               </div>
           </div>
       </section>

       `);

       $('.dis-see').click(function () {
        showImage();
    });

       let indexImg = 0;
            $('.next-image').click(function name(params) {
                if (indexImg < data.img.length - 1) {
                    ++indexImg;
                    $(".image-show").attr("src", data.img[indexImg])
                }
            });

            $('.pre-image').click(function name(params) {
                if (indexImg > 0 || indexImg > 1) {
                    --indexImg;
                    $(".image-show").attr("src", data.img[indexImg])
                }
            })
       $(".closee").click(function () {
        if (isPictureDisplayerOpen) {
            hideImage();
        } else {
            hideFull();
        }
   });

}

function showImage() {
    $(".product-to-diplay ").hide();
    $(' .pictures-container').css({
        display: 'grid'
    });
    isPictureDisplayerOpen = !isPictureDisplayerOpen;
}

function hideImage() {
    $(".product-to-diplay ").show();
    $(' .pictures-container').css({
        display: 'none'
    });
    isPictureDisplayerOpen = !isPictureDisplayerOpen;

}

function hideFull() {
    $(".displayer").fadeOut(500);
}

 