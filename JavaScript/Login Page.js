
function CREATE_ACCOUNT() {
  // Email Verification

  var mail = document.getElementById("mailid").value;
  var mail_flag = false
  var flag1 = false
  var flag2 = true
  for (var i=0; i<mail.length; i++) {
    if (mail[i] == '@') {
      flag1 = true
    }
    if ((mail[i] >= 'A') && (mail[i] <= 'Z')) {
      flag2 = false
    }
  }
  if ((flag1 == true) && (flag2 == true)) {
    mail_flag = true
  }

  //Phone Number Verification

  var phone = document.getElementById("phoneno").value;
  var number_flag = false
  if ((phone >= 6000000000) && (phone <= 9999999999)) {
    number_flag = true
  }

  //Final Verification 

  if (
    mail_flag == true &&
    number_flag == true
  ) {
    window.location.href = "/HTML/Rentify Home Page.html";
  } else {
    alert("Please Enter Valid Mail Id and Phone Number");
     document.getElementById("mailid").style.border = "2px red solid";
     document.getElementById("phoneno").style.border = "2px red solid";
  }
}