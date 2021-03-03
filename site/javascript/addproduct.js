const title = $("#title");
const category = $("#category");
const img = $("#img");
const img2 = $("#img2");
const img3 = $("#img3");
const hourPost = $("#hourPost");
const phonePost = $("#phonePost");
const stateSell = $("#stateSell");
const wilaya = $("#wilaya");
const datePost = $("#datePost");
const profile = $("#profile");
const postId = $("#postId");
const descreption = $("#descreption");
const submit = $("#subm");
const idRelete = $("#idRelete");
const price = $("#price");
const isCar = $("#car");
let isCarBool = false;

let Title,
  Category,
  Img,
  Img2,
  Img3,
  HourPost,
  PhonePost,
  StateSell,
  DatePost,
  Wilaya,
  Profile,
  PostId,
  Descreption,
  Price,
  IdRelete;
let values;
let lengthState = false;
let keep = true;

function setVariable() {
  Title = title.val();
  Category = category.val();
  Img = img.val();
  Img2 = img2.val();
  Img3 = img3.val();
  HourPost = hourPost.val();
  PhonePost = phonePost.val();
  StateSell = stateSell.val();
  Wilaya = wilaya.val();
  Profile = profile.val();
  PostId = postId.val();
  DatePost = datePost.val();
  Descreption = descreption.val();
  IdRelete = idRelete.val();
  Price = price.val();
  values = [
    Title,
    Category,
    Img,
    Img2,
    Img3,
    HourPost,
    DatePost,
    PhonePost,
    StateSell,
    Wilaya,
    Profile,
    PostId,
    Descreption,
    IdRelete,
    Price,
    isCarBool
  ];
}
isCar.click(function () {
  isCarBool = !isCarBool;
  // console.log(isCarBool);
});
submit.click(function () {
  setVariable();
  checkVariablelLength();
  if (lengthState) {
    console.log("call back end success !");
    callBackEnd();
  } else {
    console.log("check your entries !!!");
  }
});

function checkVariablelLength() {
  keep = true;
  values.forEach((element) => {
    if (keep) {
      check(element);
    }
  });
}

function check(str) {
  if(str == true || str == false){
    lengthState = true;
  }
  else if (str.length > 0) {
    lengthState = true;
  } else {
    lengthState = false;
    keep = false;
  }
}

function callBackEnd() {
  let product = {
    Title,
    Category,
    Img,
    Img2,
    Img3,
    HourPost,
    PhonePost,
    StateSell,
    DatePost,
    Wilaya,
    Profile,
    PostId,
    Descreption,
    IdRelete,
    Price,
    isCarBool
    
  };
  // console.log(product);
  $.ajax({
    url: "backend/php/addProduct.php",
    type: "POST",
    // dataType: "json",
    data: product,
    success: function (data) {
      //   manipulateData(data);
      // console.log(data);
      console.log("response from server ---> ", data);
    },
  });
}
