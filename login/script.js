
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})
function validateForm() {
    var email = document.querySelector("input[name='email']").value;
    var password = document.querySelector("input[name='password']").value;

    if (email === "" || password === "") {
alert("Preencha todos os campos.");
return false;
    }

    return true;
}
  // Envia o formulário de login
function submitForm() {
    if (validateForm()) {
document.querySelector("form").submit();
    }
}
document.querySelector("button").addEventListener("click", submitForm);