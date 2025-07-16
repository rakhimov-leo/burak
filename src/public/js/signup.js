console.log("Signup frontend javascript file");

$(function () {});

function validateSignupForm() {
  const memberNick = $(".member-nick").val();
  const memberPhone = $(".member-phone").val();
  const memberPassword = $(".member-password").val();
  const confirmPasword = $(".confirm-password").val();

  if (
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPasword === ""
  ) {
    alert("Please insert all required inputs");
    return false;
  }

  if (memberPassword !== confirmPasword) {
    alert("Password differs, please check!");
    return false;
  }
}
