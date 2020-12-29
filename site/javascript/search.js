<<<<<<< HEAD

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
    var text = $("#ttarget").val();
    var data = {
        "name": text
    };
    $.ajax({
        url: 'backend/php/search.php',
        type: "POST",
        dataType: "json",
        data: data,
        success: function (data) {
            $(".product-container").html("");
            data.forEach(function (full, index) {
                displayDataa(full, index);
            });
        }

    }).done(function(){
        removeSearch();
    })
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

        $.ajax({
            url: 'backend/php/appendhtml.php',
            type: "POST",
            dataType: "json",
            data: params,
            success: function (data) {
                appendHtml(data[0]);
            }

        }).done(function(){

        })

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
=======

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

    getDataFromJson();

});
document.getElementById("ssearch-cancel").addEventListener("click", function (event) {
    event.preventDefault();
    var text = $("#ttarget").val();
    var data = {
        "name": text
    };
    $.ajax({
        url: 'backend/php/search.php',
        type: "POST",
        dataType: "json",
        data: data,
        success: function (data) {
            $(".product-container").html("");
            data.forEach(function (full, index) {
                displayDataa(full, index);
            });
        }

    }).done(function(){
        removeSearch();
    })
});



function getDataFromJson() {
  $.ajax({
      method: 'GET',
      url: "backend/php/random.php",
      dataType: "json",
      success : function(data , index){
        data.forEach(function(item , index){
          displayDataa(item , index);
        })
          
      }
  }).done(function (data) {

  })
}


function displayDataa(full, index) {
  console.log(full);
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

        $.ajax({
            url: 'backend/php/appendhtml.php',
            type: "POST",
            dataType: "json",
            data: params,
            success: function (data) {
                appendNew(data[0]);
            }

        }).done(function(){

        })
    });
};

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
    $('.form').empty();
    $(".form").removeClass("form-only");
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

function appendNew(data){
  let img = JSON.parse(data.img);
  let profile = JSON.parse(data.profile);
    let element = `

    <div class="big-container">
      <div class="close-fun" id="clox">
        <i class="fas fa-times"></i>
      </div>
      <div class="details-txt">
        <span class="text importantt" id="pr-name">${data.title} </span>
        <span class="text importantt" id="pr-price">
          Price :
          <span>${data.price} DA</span>
          <span id="state"> [ ${data.stateSell} ] </span>
        </span>

        <span class="text importantt" id="pr-wilaya">
          Wilaya :
          <span>${data.place}</span>
          <span id="exact">  </span>
        </span>

        <span class="text importantt" id="pr-phone">
          Phone :
          <span>${data.phonePost}</span>
        </span>

        <a href="#">
          <span class="text less-important d-b" id="pr-category"
          ${data.category}
          </span>
        </a>

        <span id="pr-post" class="d-b text less-important">
          Posted on :
          <span>${data.hourPost}</span>
        </span>

        <span class="d-b text less-important text" id="pr-condition">
          Condition : <span>Used - fair</span>
        </span>

        <span id="pr-details" class="d-b less-important"> Details : </span>

        <p id="pr-desc">
          ${data.descreption}
        </p>

        <span id="seller-zone " class="text"> Seller information : </span>
        <div class="seller-container">
          <div class="first-row">
            <div class="profile-pic">
              <img src="${img[0]}" alt="" height="60" />
            </div>
            <div class="info-basic">
              <span id="name-pr" class="text"> Sara Aoufi </span>
              <span id="user-name-pr" class="d-b"> @Sara_tech12 </span>
            </div>
          </div>
          <div class="second-row">
              <div class="s-c">
                    <div class="borders"></div>
                    <span id="social"> Social network </span>
                    <div class="borders"></div>
              </div>

            <div class="social-media-container">
              <div class="item">
                <img src="images/facebook.svg" alt="">
              </div>

              <div class="item">
                <img src="images/instagram.svg" alt="">
              </div>

              <div class="item">
                <img src="images/youtube.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="image-container">
        <div class="previous mod">
          <i class="fas fa-chevron-left"></i>
        </div>

        <img src="${img[0]}" alt="" srcset="" />

        <div class="next mod">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>

    `;
    $('.form').append(element);
    $('.form').addClass('form-only');
    $("#clox").click(function () {
          hideFull();
  });
}
>>>>>>> 5bbea3ed7286853d088cd47e52eb92f2eb64509e
