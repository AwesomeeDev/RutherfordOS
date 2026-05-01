let generatedCode = "";

// Step 1: send code
function sendCode() {
  const email = document.getElementById("email").value;

  if (!email.endsWith("@rutherford.school.nz")) {
    document.getElementById("loginError").innerText =
      "Please use your school email.";
    return;
  }

  // generate 6-digit code
  generatedCode = Math.floor(100000 + Math.random() * 900000).toString();

  console.log("DEBUG CODE:", generatedCode); // for testing

  document.getElementById("codeSection").style.display = "block";
  document.getElementById("loginError").innerText = "";

  // SIMULATED EMAIL (since no backend)
  alert("Code sent: " + generatedCode);
}

// Step 2: verify code
function verifyCode() {
  const input = document.getElementById("codeInput").value;

  if (input === generatedCode) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("os").style.display = "block";
  } else {
    document.getElementById("loginError").innerText =
      "Incorrect code.";
  }
}
