var userNameInput = document.getElementById("userNameInput");
var passwordInput = document.getElementById("passwordInput");
var confirmPasswordInput = document.getElementById("confirmPasswordInput");
var emailInput = document.getElementById("emailInput");

var userNameStyle = userNameInput.style;
var passwordStyle = passwordInput.style;
var confirmedPasswordStyle = confirmPasswordInput.style;
var emailStyle = emailInput.style;

var userNameLetters = /^[A-Za-z]/i;
var userNameLength = /^.{3,}$/;
var passwordVerfication =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

var blackBox = "2px solid black";
var redBox = "2px solid red";

const validate = (e) => {
  const userName = document.registrationForm.username.value;
  const email = document.registrationForm.email.value;
  const password = document.registrationForm.password.value;
  const confirmPassword = document.registrationForm.confirmPassword.value;

  const userNameFocus = document.registrationForm.username.focus();
  const emailFocus = document.registrationForm.email.focus();
  const passwordFocus = document.registrationForm.password.focus();
  const confirmPasswordFocus = document.registrationForm.confirmPassword.focus();

  if (userName == "") {
    e.preventDefault();
    alert("Username required");
    userNameFocus;
    return false;
  }
  if (!userName.match(userNameLetters)) {
    e.preventDefault();
    alert("Make sure username starts with a letter A-Z");
    userNameFocus;
    return false;
  }
  if (!userName.match(userNameLength)) {
    e.preventDefault();
    alert("Make sure username is 3 or more alphanumeric characters long");
    userNameFocus;
    return false;
  }

  if (email == "") {
    e.preventDefault();
    alert("Email Required");
    emailStyle.outline = redBox;
    emailFocus;
    return false;
  } else {
    emailStyle.outline = blackBox;
  }

  if (password == "") {
    e.preventDefault();
    alert("Password Required");
    passwordFocus;
    return false;
  }
  if (!password.match(passwordVerfication)) {
    e.preventDefault();
    alert(
      "Make sure password is 8 alphanumeric characters long, contains at least one upper case letter, one number, and one of the following special characters: / * - + ! @ # $ ^ & ~ [ ]"
    );
    passwordFocus;
    return false;
  }

  if (confirmPassword == "") {
    e.preventDefault();
    alert("Confirm password");
    confirmPasswordFocus;
    return false;
  }

  if (password != confirmPassword) {
    e.preventDefault();
    alert("Make sure both passwords match exactly");
    confirmPasswordFocus;
    return false;
  }
}

const checkUsername = () => {
  var value = userNameInput.value;

  if (value.match(userNameLetters) && value.match(userNameLength)) {
    userNameStyle.outline = blackBox;
  } else {
    userNameStyle.outline = redBox;
  }
}

const checkPassword = () => {
  var password = passwordInput.value;

  if (password.match(passwordVerfication)) {
    passwordStyle.outline = blackBox;
  } else {
    passwordStyle.outline = redBox;
  }
}

const checkPasswords = () => {
  var password = passwordInput.value;
  var confirmedPassword = confirmPasswordInput.value;

  if (password === confirmedPassword) {
    confirmedPasswordStyle.outline = blackBox;
  } else {
    confirmedPasswordStyle.outline = redBox;
  }
}

const validated = () => {
  alert("The form was submitted succesfully... Reloading the page");
  location.reload();
}
