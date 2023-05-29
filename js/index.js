//======= Sign Up =======
var upName = document.getElementById("upName");
var upMail = document.getElementById("upMail");
var upPassword = document.getElementById("upPassword");
var message = document.getElementById("message");
var signupBtn = document.getElementById("signup");

//======= Sign In =======
var inMail = document.getElementById("inMail");
var inPassword = document.getElementById("inPassword");
var signinBtn = document.getElementById("signin");

//=============================== Sign Up ================================

var personContainerUp = [];
if (localStorage.getItem("data") == null) {
  personContainerUp = [];
} else {
  personContainerUp = JSON.parse(localStorage.getItem("data"));
}
// localStorage.clear();

function getdataUp() {
  //Check if inputs are empty or not
  if (upName.value == "" || upMail.value == "" || upPassword.value == "") {
    message.innerHTML = `All field are required`;
    return false;
  }

  //If all inputs have value
  var person = {
    pName: upName.value,
    pMail: upMail.value,
    pPassword: upPassword.value,
  };
  //first registeration there is no mails to compare with in local storage
  if (personContainerUp.length == 0) {
    personContainerUp.push(person);
    message.classList.remove("text-danger");
    message.style.color = "green";
    message.innerHTML = `Success`;
    localStorage.setItem("data", JSON.stringify(personContainerUp));
    return true;
  }

  //Email already exist
  if (checkMails() == true) {
    message.classList.add("text-danger");
    message.innerHTML = `email already exists`;
  } else {
    personContainerUp.push(person);
    message.classList.remove("text-danger");
    message.style.color = "green";
    message.innerHTML = `Success`;
    localStorage.setItem("data", JSON.stringify(personContainerUp));
  }
}
function checkMails() {
  for (var i = 0; i < personContainerUp.length; i++) {
    if (upMail.value == personContainerUp[i].pMail) {
      return true;
    }
  }
}

if (signupBtn) {
  signupBtn.addEventListener("click", getdataUp);
}
// console.log(personContainerUp);

//=============================== Sign In ================================

function checkInputsIn() {
  for (var i = 0; i < personContainerUp.length; i++) {
    if (inMail.value == "" || inPassword.value == "") {
      message.innerHTML = `All field are required`;
    } else if (
      inMail.value == personContainerUp[i].pMail &&
      inPassword.value == personContainerUp[i].pPassword
    ) {
      signinBtn.setAttribute("href", "home.html");
      localStorage.setItem("name", personContainerUp[i].pName);
      message.classList.remove("text-danger");
      message.style.color = "green";
      message.innerHTML = `Success`;
      break;
    } else if (
      inMail.value != personContainerUp[i].pMail ||
      inPassword != personContainerUp[i].pPassword
    ) {
      message.innerHTML = `incorrect email or password`;
    }
  }
}

if (signinBtn) {
  signinBtn.addEventListener("click", checkInputsIn);
}
