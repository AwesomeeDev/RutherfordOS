let code = "";

/* -----------------------------
   LOGIN: SEND CODE
------------------------------ */
function sendCode() {
  const email = document.getElementById("email").value;
  const error = document.getElementById("error");

  if (!email.endsWith("@rutherford.school.nz")) {
    error.innerText = "Use your school email (@rutherford.school.nz).";
    return;
  }

  // generate 6-digit code
  code = Math.floor(100000 + Math.random() * 900000).toString();

  // simulate sending
  console.log("LOGIN CODE:", code);
  alert("Your RutherfordOS code is: " + code);

  document.getElementById("codeBox").style.display = "block";
  error.innerText = "";
}

/* -----------------------------
   LOGIN: VERIFY CODE
------------------------------ */
function verifyCode() {
  const input = document.getElementById("codeInput").value;
  const error = document.getElementById("error");

  if (input === code) {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "desktop.html";
  } else {
    error.innerText = "Incorrect code. Try again.";
  }
}

/* -----------------------------
   DESKTOP: OPEN APPS
------------------------------ */
function openApp(id) {
  const app = document.getElementById(id);
  if (app) {
    app.style.display = "block";
  }
}

function closeApp(id) {
  const app = document.getElementById(id);
  if (app) {
    app.style.display = "none";
  }
}

/* -----------------------------
   LINKS / APPS
------------------------------ */
function openMail() {
  window.open("https://outlook.live.com", "_blank");
}

function openSearch() {
  window.open("https://www.google.com", "_blank");
}

/* -----------------------------
   CLOCK (optional for taskbar)
------------------------------ */
setInterval(() => {
  const clock = document.getElementById("clock");
  if (clock) {
    clock.innerText = new Date().toLocaleTimeString();
  }
}, 1000);

/* -----------------------------
   AUTO CHECK LOGIN (optional)
------------------------------ */
window.onload = () => {
  const loggedIn = sessionStorage.getItem("loggedIn");

  if (loggedIn === "true") {
    if (window.location.pathname.includes("index.html")) {
      window.location.href = "desktop.html";
    }
  }
};
