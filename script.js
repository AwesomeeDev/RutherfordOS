let code = "";

// CLOCK
setInterval(() => {
  document.getElementById("clock").innerText =
    new Date().toLocaleTimeString();
}, 1000);

// LOGIN
function sendCode() {
  const email = document.getElementById("email").value;

  if (!email.endsWith("@rutherford.school.nz")) {
    document.getElementById("error").innerText = "Invalid school email.";
    return;
  }

  code = Math.floor(100000 + Math.random() * 900000).toString();

  console.log("CODE:", code);
  alert("Your code is: " + code);

  document.getElementById("codeArea").style.display = "block";
}

function verifyCode() {
  const input = document.getElementById("codeInput").value;

  if (input === code) {
    document.getElementById("login").style.display = "none";
    document.getElementById("desktop").style.display = "block";
  } else {
    document.getElementById("error").innerText = "Wrong code.";
  }
}

// WINDOWS
function openApp(id) {
  document.getElementById(id).style.display = "block";
}

function closeApp(id) {
  document.getElementById(id).style.display = "none";
}

// LINKS
function openMail() {
  window.open("https://outlook.live.com", "_blank");
}

function openSearch() {
  window.open("https://www.google.com", "_blank");
}
