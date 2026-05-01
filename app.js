let code = "";
let role = "student";

/* ---------------- DEBUG BACKEND CODE ---------------- */
const DEBUG_CODE = "100-355-256";

/* ---------------- STORAGE ---------------- */
let db = JSON.parse(localStorage.getItem("rutherfordDB") || "{}");

/* ---------------- EMAIL HASH ---------------- */
function hashEmail(email) {
  let h = 0;
  for (let i = 0; i < email.length; i++) {
    h = (h << 5) - h + email.charCodeAt(i);
  }
  return "USR-" + Math.abs(h);
}

/* ---------------- LOGIN ---------------- */
function sendCode() {
  const email = document.getElementById("email").value;

  code = Math.floor(100000 + Math.random() * 900000).toString();

  alert("Code: " + code);
}

function login() {
  const email = document.getElementById("email").value;
  const input = document.getElementById("code").value;

  if (input === DEBUG_CODE) {
    role = "admin";
    window.location.href = "app.html";
    return;
  }

  if (input !== code) {
    document.getElementById("msg").innerText = "Wrong code";
    return;
  }

  let id = hashEmail(email);
  db[id] = db[id] || { role: role, classes: [] };

  localStorage.setItem("rutherfordDB", JSON.stringify(db));

  window.location.href = "app.html";
}

/* ---------------- APP CONTROL ---------------- */
function openApp(id) {
  let el = document.getElementById(id);
  if (el) el.style.display = "block";
}
