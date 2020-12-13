var isSearchOpen = false;
$(document).ready(function () {


    $('.search').click(function () {
        activeSearch();
    });
    $('.form').click(function () {
        if ($('.search-bar').hasClass('search-bar-active')) {
            removeSearch();
        }
    });

});
document.getElementById("ssearch-cancel").addEventListener("click", function (event) {
    event.preventDefault();
    let start = document.getElementById("ttarget").value;
    var params = "name=" + start;
    var XHR = new XMLHttpRequest();
    XHR.open("POST", 'backend/php/search.php', true);
    XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    XHR.onload = function () {
        let Result = (JSON.parse(this.responseText));
        $('.product-container').html("");
        Result.forEach(function (full, index) {
            displayDataa(full, index);
        })
        removeSearch();

    }
    XHR.send(params);
});


function displayDataa(full, index) {
    img = JSON.parse(full.img);
    product = `<a href="#">
<article class="producte-home" id=${full.id} >

<div class="hd">
<span>-14%</span>
</div>
<img src="${img[0]}" alt="product">
<div class="info">
<h6>${full.title}</h6>
<strong>${full.price} DA</strong>
</div>
</article>
</a>`;
    $('.product-container').append(product);
    $(`#${full.id}`).click(function (event) {
        event.preventDefault();
        let start = full.id;
        var params = "name=" + start;
        var XHR = new XMLHttpRequest();
        XHR.open("POST", 'backend/php/appendhtml.php', true);
        XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        XHR.onload = function () {
            let Result = (JSON.parse(this.responseText));
            appendHtml(Result[0]);
        }
        XHR.send(params);
    });

};



function appendHtml(data) {
    let img = JSON.parse(data.img);
    let profile = JSON.parse(data.profile);
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
                                       <h5 class="name"></h5>
                                       <h5 class="wilaya"></h5>
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
                   <img class="image-show" src="${img[0]}" alt="galaxy" title="${data.title}">
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
        if (indexImg < img.length - 1) {
            ++indexImg;
            $(".image-show").attr("src", img[indexImg])
        }
    });

    $('.pre-image').click(function name(params) {
        if (indexImg > 0 || indexImg > 1) {
            --indexImg;
            $(".image-show").attr("src", img[indexImg])
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






function activeSearch() {
    isSearchOpen = true;
    $('.search-bar').addClass('search-bar-active');
    $('.form').addClass('form-only');
}

function removeSearch() {
    isSearchOpen = false;
    $('.search-bar').removeClass('search-bar-active');
    $('.form').removeClass('form-only');
}