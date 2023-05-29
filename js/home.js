//======= Home =======
var personName = document.getElementById("personName");
var logoutBtn = document.getElementById("logoutBtn");

//======== To print username ==========
var pName = localStorage.getItem("name");
personName.innerHTML = pName;

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("name");
});
