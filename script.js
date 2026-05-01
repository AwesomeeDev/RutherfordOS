let generatedCode = "";

// ---------------- LOGIN ----------------
function sendCode() {
  const email = document.getElementById("email").value;

  if (!email.endsWith("@rutherford.school.nz")) {
    document.getElementById("loginError").innerText =
      "Use your school email.";
    return;
  }

  generatedCode = Math.floor(100000 + Math.random() * 900000).toString();

  console.log("CODE:", generatedCode);

  document.getElementById("codeBox").style.display = "block";
  alert("Your code is: " + generatedCode); // simulation
}

function verifyCode() {
  const input = document.getElementById("codeInput").value;

  if (input === generatedCode) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("desktop").style.display = "block";
    sessionStorage.setItem("loggedIn", "true");
  } else {
    document.getElementById("loginError").innerText = "Wrong code.";
  }
}

// ---------------- WINDOWS ----------------
function openApp(id) {
  document.getElementById(id).style.display = "block";
}

function closeApp(id) {
  document.getElementById(id).style.display = "none";
}

// ---------------- DOCS SAVE ----------------
function saveDoc() {
  const text = document.getElementById("docText").value;
  localStorage.setItem("rutherfordDoc", text);
  alert("Saved!");
}

window.onload = () => {
  if (localStorage.getItem("rutherfordDoc")) {
    document.getElementById("docText").value =
      localStorage.getItem("rutherfordDoc");
  }
};

// ---------------- MAIL ----------------
function openMail() {
  window.open("https://outlook.live.com", "_blank");
}

// ---------------- SEARCH ----------------
function openSearch() {
  window.open("https://www.google.com", "_blank");
}
