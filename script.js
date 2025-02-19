const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const userName = document.getElementById("username");
const generate = document.getElementById("generate");
const currentDate = document.getElementById('current-date'); 
const secondContent = document.querySelector("#second-content");
const logo = document.querySelector(".logo");


generate.addEventListener("click", function (e) {
  e.preventDefault();
  if (fullName.value === "" || email.value === "" || userName.value === "") {
    alert("Please fill in the missing fields");
    return;
  } else {
    secondContent.style.display = "block";
logo.style.display = "none";
    return;
  }
});

const d = new Date();

currentDate.innerHTML = d;