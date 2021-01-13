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
         $(".sec").click(() =>  {
           if (isSideBarOpen) {
             closeSidebar();
           }
         });
         $(".displayer").click(() =>  {
           if (isSideBarOpen) {
             closeSidebar();
           }
         });

         $(".displayer").hide(2400);
       });


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

         $('.pre-image').click(() =>  {
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