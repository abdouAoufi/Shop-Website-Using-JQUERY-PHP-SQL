       const toggle = $(".hamburger");
       const closeToggle = $(".toggle-close");
       const sideBar = $(".sidebar");
       let isSideBarOpen = false;
       let isPictureDisplayerOpen = false;
       let url = "data/data.json";

       $(document).ready(function () {

         var moment = require("moment");
         let myDate = new Date('November 11, 2020 09:24:00');
         console.log((moment(myDate).endOf('day').fromNow()));
         toggle.click(clickToggle);
         closeToggle.click(closeSidebar);
         $(".sec").click(function (param) {
           if (isSideBarOpen) {
             closeSidebar();
           }
         });
         $(".displayer").click(function (param) {
           if (isSideBarOpen) {
             closeSidebar();
           }
         });

         $(".displayer").hide(2400);
       });

       $.ajax({
         url: "data/data.json",
         method: "GET",
         dataType: "json"
       }).done(displayData);

       function displayData(data) {

         //  $.each(data, display);

         $(".title-product, .img-container ").click(function () {
           let id = parseInt($(this).children(0).html());
           displayFull(data[id]);
         })

         $(".dropdown").click(function name(params) {
           $(this)
             .children(2)
             .fadeIn().delay(2000);
           $(".dropdown-content").fadeOut(400);
         });
       }

       function display(index, dataSet) {
         $(".section-container").append(`<article class="product" data-name="fuck">
               <div class="title-product">
                <p class="data-hold"> ${dataSet.postId} </p>
                   <h4 href=""> ${dataSet.title} </h4>
               </div>
               <div class="img-container">
                <p class="data-hold"> ${dataSet.postId} </p>
                   <img src="${dataSet.img[0]}" title="${dataSet.title}"  alt="galaxy" height="200" width="180">
               </div>
               <div class="product-price sp">
                   <p class="price-product">${dataSet.price} <span>DA</span></p>
                 <p class="priceState"> [ <span>${dataSet.stateSell}</span> ] </p>
               </div>
               
                 <div class="product-price">
                     <p class="hour-product">${dataSet.hourPost} </p>
                     <p class="place-product">${dataSet.wilaya}  </p>
                 </div>
               <p class="descreption-product"> ${dataSet.descreption}</p>
               <div class="dropdown">

              <img class="dots" src="images/menu.svg" height=17>
                       <div class="dropdown-content">

                           <ul>
                               <li> <i class="fas fa-shopping-bag"></i> <a href="#">Add to bag</a> </li>
                               <li> <i class="fas fa-thumbs-down"></i><a href="#">Not interested</a></li>
                               <li> <i class="fas fa-eye-slash"></i> <a href="#">Hide</a></li>
                               <li> <i class="fas fa-flag"></i> <a href="#">Report</a></li>
                           </ul>

                       </div>
               </div>
           </article>`);
         $(".priceState").is(function name(params) {
           // console.log($(this).text());
           let text = $(this).children(0).text();

           if (text == "negociable") {
             $(this).children(0).css({
               color: "green"
             })
           }
           //  );

         })

       }

       function clickToggle() {
         isSideBarOpen = true;
         sideBar.addClass("hide-side-bar");
       }

       function closeSidebar() {
         isSideBarOpen = false;
         sideBar.removeClass("hide-side-bar");
       }


       function displayFull(data) {
         let indexImg = 0;
         appendHtml(data);
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
         $(".closee").click(function clickedProduct(params) {
           if (isPictureDisplayerOpen) {
             hideImage();
           } else {
             hideFull();
           }
         });

         $('.dis-see').click(function () {
           showImage();
         });

         $(".product-to-diplay ").on("swipeleft", function () {
           alert();
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
         $(".nav").show();
       }

       function appendHtml(data) {
         $('body').append(
           ` <section class="displayer">
                   <div class="display-content">
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
                               <p class="dis-date">Posted : <span>${data.datePost}</span> </p>
                               <div class="dis-details sp">
                                   <h5>Details : </h5>
                                   <p>${data.descreption} </p>
                               </div>

                               <h3 class="dis-see sp">See pictures</h3>



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
                           <img src="images/next.svg" class="next-image change-image" height=30>
                           <img src="images/pre.svg" class="pre-image change-image" height=30>
                       </div>
                   </div>
               </section>

               `);
         $('.nav').hide();
       }