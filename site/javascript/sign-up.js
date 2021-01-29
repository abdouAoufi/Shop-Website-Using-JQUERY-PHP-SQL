
const loginButton = $(".login");
const emailText = $(".email");
const passwordText = $("#pass");
const validEmail = $("#email-parent");
const validPassword = $("#valid-password");
$(document).ready(() => {

  function setUp(){
    let emailTxt = emailText.val();
    let passTxt = passwordText.val();
    let em = checkEmailValidatiion(emailTxt);
    let ps = checkPasswordValidatiion(passTxt);
    let data = {
      email: emailTxt,
      password: passTxt,
    };
    if (em && ps) {
      callBackEnd(data);
    }
  }

  loginButton.click((event) => {
    // event.preventDefault();
    setUp();
  });

});

function ValidateEmail(mail) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    return true;
  }
  return false;
}

function showEmailwarning(text) {
  $("#email-warning").html(text);
  $("#email-parent").addClass("show-valid");
}

function showPasswordwarning(text) {
  $("#password-warning").html(text);
  $("#password-parent").addClass("show-valid");
}

function checkEmailValidatiion(emailTxt) {
  let isemailText = ValidateEmail(emailTxt);
  if (emailTxt.length == 0) {
    showEmailwarning("Please enter your email ! ");
    return;
  } else if (isemailText == false) {
    showEmailwarning("Please enter a valid email");
    return;
  } else {
    $("#email-parent").removeClass("show-valid");
    return true;
  }
}

function checkPasswordValidatiion(password) {
  if (password.length < 8) {
    showPasswordwarning(" password is invalid  ");
    passwordText.val = 0 ;
    return;
  } else {
    $("#password-parent").removeClass("show-valid");
    return true;
  }
}

function callBackEnd(data) {
  $.ajax({
    url: "backend/php/login.php",
    type: "POST",
    dataType: "json",
    data: data,
    success: function (data) {
      manipulateData(data);
    },
  });
}

function manipulateData(data) {
  if (data.length > 0) {
    window.location.href = "http://localhost/ad/site/index.html";
  } else {
    showPasswordwarning("Your password is incorrect ! ");
  }
}
