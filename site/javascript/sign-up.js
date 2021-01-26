const loginButton = $(".login");
const emailText = $(".email");
const passwordText = $("#pass");
const validEmail = $("#email-parent");
const validPassword = $("#valid-password");
$(document).ready(() => {
  loginButton.click(() => {
    let emailTxt = emailText.val();
    let passTxt = passwordText.val();
    checkEmailValidatiion(emailTxt);
    checkPasswordValidatiion(passTxt);
  });
});

function ValidateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
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
  }
}

function checkPasswordValidatiion(password) {
  if (password.length <= 8) {
    showPasswordwarning(" password is invalid  ");
    return;
  } else {
    $("#password-parent").removeClass("show-valid");
  }
}
