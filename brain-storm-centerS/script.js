//button X menu
document.querySelector(".nav-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

//button scrool
document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("body").style.scrollBehavior = "smooth";

  setTimeout(() => {
    document.querySelector("body").style.scrollBehavior = "unset";
  }, 1000);
});

//Formulaire dynamique
//les elements
const form = document.getElementById("form");
const names = document.getElementById("names");
const email = document.getElementById("email");
const messages = document.getElementById("messages");

//soumission formulaire
form.addEventListener("submit", () => {
  e.preventDefault();
  alert("submited");
  checkInputs();
});

$("#form").submit(function (event) {
  event.preventDefault();
  checkInputs();
});

/*
function checkInputs() {
  //get values in inputs
  const namesValue = names.value.trim();
  const emailValue = email.value.trim();
  const messagesValue = message.value.trim();

  //Verif value
  if (namesValue === "") {
    setErrorFor(names, "Username cannot be blank");
  } else {
    setSuccessFor(names);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (isEmail(emailValue)) {
    setErrorFor(email, "Email is not  valide");
  } else {
    setSuccessFor(email);
  }
  if (messages === "") {
    setErrorFor(messages, " Please, write your concern");
  } else {
    setSuccessFor(messages);
  }
}

function setErrorFor(input, message) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector("small");

  //add the error message
  small.innerText = message;
  //add error class
  formcontrol.className = "form-control error";
}

function setSuccessFor(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control success";
}

*/
