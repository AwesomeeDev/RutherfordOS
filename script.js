let code = "";

function sendCode() {
  const email = document.getElementById("email").value;

  if (!email.endsWith("@rutherford.school.nz")) {
    document.getElementById("error").innerText =
      "Use school email.";
    return;
  }

  code = Math.floor(100000 + Math.random() * 900000).toString();

  alert("Your code is: " + code);

  document.getElementById("codeBox").style.display = "block";
}

function verifyCode() {
const ADMIN_CODE = "100-335-256";

function verifyCode() {
  const input = document.getElementById("codeInput").value;

  // ADMIN BACKDOOR (SAFE INTERNAL VERSION)
  if (input === ADMIN_CODE) {
    sessionStorage.setItem("role", "admin");
    window.location.href = "desktop.html";
    return;
  }

  // NORMAL USER LOGIN
  if (input === code) {
    sessionStorage.setItem("role", "student");
    window.location.href = "desktop.html";
  } else {
    document.getElementById("error").innerText =
      "Incorrect code.";
  }
}
