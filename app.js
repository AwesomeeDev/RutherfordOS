let db = JSON.parse(localStorage.getItem("rutherfordDB") || "{}");

let code = "";
let role = "student";

const IT_CODE = "100-335-256";

/* ---------- EMAIL HASH ---------- */
function hashEmail(email) {
  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    hash = (hash << 5) - hash + email.charCodeAt(i);
  }
  return "USR-" + Math.abs(hash);
}

/* ---------- LOGIN CODE ---------- */
function sendCode() {
  const email = document.getElementById("email").value;

  if (!email) return;

  code = Math.floor(100000 + Math.random() * 900000).toString();

  alert("Your RutherfordOS code: " + code);
}

/* ---------- LOGIN ---------- */
function login() {
  const email = document.getElementById("email").value;
  const input = document.getElementById("code").value;

  if (input === IT_CODE) role = "admin";
  else if (email.includes("teacher")) role = "teacher";

  if (input !== code && input !== IT_CODE) {
    alert("Wrong code");
    return;
  }

  const id = hashEmail(email);

  sessionStorage.setItem("user", id);
  sessionStorage.setItem("role", role);

  window.location.href = "dashboard.html";
}

/* ---------- CLASS SYSTEM ---------- */
function saveDB() {
  localStorage.setItem("rutherfordDB", JSON.stringify(db));
}
