const emailT = $("#dataeml");
const passwordT = $("#pass");
const loginBtn = $("#loginBtn");

let email, password;
$(document).ready(function () {
  loginBtn.click(function () {
    setVariables();
    if (checkEmailValidation(email) == true) {
      if (checkPasswordValidation(password) == true) {
        cleanUpWarning();
        let data = {
          email,
          password,
        };
        callBackEnd(data);
      } else {
        showPasswordwarning("your password should be 8 chracters");
        cleanUpPassword();
      }
    } else {
      showEmailwarning("your email is invalid");
    }
  });
});

function setVariables() {
  email = emailT.val();
  password = passwordT.val();
}

function checkEmailValidation(email) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return true;
  }
  return false;
}

function checkPasswordValidation(password) {
  if (password.length >= 8) {
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

function cleanUpWarning() {
  $("#password-parent").removeClass("show-valid");
  $("#email-parent").removeClass("show-valid");
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
function cleanUpPassword(){
    passwordT.val("");
}

function manipulateData(data) {
  if (data.length > 0) {
    window.location.href = "http://localhost/ad/site/index.html";
  } else {
    showPasswordwarning("Your password is incorrect ! ");
    cleanUpPassword();
  }
}

module.exports = checkEmailValidation ; 
