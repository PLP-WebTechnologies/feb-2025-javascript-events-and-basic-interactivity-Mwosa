// Button Click
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

// Hover
document.getElementById("hoverBtn").addEventListener("mouseenter", () => {
  document.getElementById("hoverBtn").style.backgroundColor = "lightblue";
});
document.getElementById("hoverBtn").addEventListener("mouseleave", () => {
  document.getElementById("hoverBtn").style.backgroundColor = "";
});

// Double Click
document.getElementById("dblClickBtn").addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "#ffeaa7";
});

// Keypress
document.addEventListener("keydown", (e) => {
  document.getElementById("keyDisplay").textContent = e.key;
});

// Image Gallery
function changeImage(img) {
  const main = document.getElementById("mainImage");
  main.src = img.src;
}

// Tabs
function showTab(id) {
  document.querySelectorAll(".tabContent").forEach((el) => {
    el.classList.remove("activeTab");
  });
  document.getElementById(id).classList.add("activeTab");
}

// Form Validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passValid = password.length >= 8;

  if (!name || !emailValid || !passValid) {
    feedback.textContent = "Please fix errors before submitting.";
  } else {
    feedback.style.color = "green";
    feedback.textContent = "Form submitted successfully!";
  }
});

// Real-time feedback
document.getElementById("password").addEventListener("input", () => {
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");
  feedback.style.color = password.length >= 8 ? "green" : "red";
  feedback.textContent = password.length >= 8 ? "Strong password." : "Password too short.";
});
