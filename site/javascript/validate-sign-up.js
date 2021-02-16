
const nameT = $("#nameT"); 
const familyNameT = $('#familyNameT'); 
const emailT = $('#emailT'); 
const phoneT = $('#phoneT'); 
const passwordT = $('#passwordT'); 
const passwordConfirmT = $('#passwordConfirmT'); 
let name , familyName , email , phone , password , passwordC ;
let theProblem = "nothing yet";
let validationLength = false ;
let validationNumLength = false ;
let validationPassLength = false ;
let validationPassMatch = false ;
let validationEmail = false ; 

$(document).ready(function(){
  // alert('hello world')
  $('#sgnBtn').click(function(){
    setVariables(); 
    checkLength();
    if(validationLength ) {
      if(validationEmail){
        if(validationPassLength){
            if(validationPassMatch){
              if(validationNumLength){
                callBackEnd();
                cleanUp();
            } else if(!validationNumLength){
              shoWarning("Please insert valid number phone !")
               }
            } else if(!validationPassMatch){
              shoWarning("Password not match !")
               }
            } else if(!validationPassLength){
              shoWarning("Your password should be at least 8 chracteres")
        }
      } else if (!validationEmail){
        shoWarning("Please insert valid email !")
      }
    }else{
      shoWarning("Check your entries !")

    }
  })
});
function setVariables(){
  name = nameT.val();
  familyName = familyNameT.val();
  email = emailT.val();
  phone = phoneT.val();
  password = passwordT.val();
  passwordC = passwordConfirmT.val();
}
function checkLength(){
  checkValid(name);
  checkValid(familyName);
  checkValid(email);
  validationEmail = ValidateEmail(email);
  checkValid(phone);
  checkValidPhone(phone);
  checkValidPassword(password);
  checkValidPassword(passwordC);
  checkMatchingPassword(password , passwordC);
}
function checkValid(str){
    if(str.length > 1){
      validationLength = true ;
      return ; 
    }
    validationLength = false ; 
}

function checkValidPassword(str){
    if(str.length >=  8){
      validationPassLength = true ;
      return ; 
    }
    validationPassLength = false ; 
}

function checkValidPhone(str){
  if(str.length >=  10){
    validationNumLength = true ;
      return ; 
    }
    validationNumLength = false ; 
}

function checkMatchingPassword(passwordSent , confirmationSent){
    if(passwordSent == confirmationSent){
      validationPassMatch = true ; 
      return ;
    }
    validationPassMatch = false ;
}


function ValidateEmail(mail) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    return true;
  }
  return false;
}

function shoWarning(text){
  $('#content-info').text(text);
  // $('.warn-container').show(1700);
  // $('.warn-container').hide(500);
  $('.warn-container').fadeIn('fast');
  setTimeout(function() {
    $('.warn-container').fadeOut('fast');
}, 1000); 
}

function callBackEnd(){
  let information = {
    name , 
    familyName , 
    email , 
    phone , 
    password 
  }
  $.ajax({
    url: "backend/php/addUsers.php",
    type: "POST",
    // dataType: "json",
    data: information,
    success: function (data) {
    //   manipulateData(data);
    console.log("response from server ---> "  , data);

    },
  });
  
  
}


function cleanUp(){
  nameT.val("");
  emailT.val("");
  familyNameT.val("");
  passwordT.val("");
  phoneT.val("");
  passwordConfirmT.val("")
}