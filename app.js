const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn1 = document.querySelector("#sign-patient-btn");
const sign_up_btn2 = document.querySelector("#sign-doctor-btn");
const container = document.querySelector(".container");
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
function validatePassword() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity('');
  }
}
password.addEventListener('change', validatePassword);
confirmPassword.addEventListener('keyup', validatePassword);

sign_up_btn1.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode-2");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode-2");
});

