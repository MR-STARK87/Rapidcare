// RapidCare - Shared JavaScript Functions

// Utility function to show notifications
function showNotification(message, type = "info") {
  alert(message);
}

// Utility function to format date
function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-IN", options);
}

// Utility function to format time
function formatTime(date) {
  const options = { hour: "2-digit", minute: "2-digit" };
  return new Date(date).toLocaleTimeString("en-IN", options);
}

// Form validation helper
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const inputs = form.querySelectorAll(
    "input[required], select[required], textarea[required]",
  );
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = "#ff4757";
    } else {
      input.style.borderColor = "#ddd";
    }
  });

  return isValid;
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Initialize page animations
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth fade-in animation to cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
});

// Console message for developers
console.log(
  "%c🏥 RapidCare - AI Powered Nursing Platform",
  "color: #2A7FFF; font-size: 20px; font-weight: bold;",
);
console.log(
  "%cThis is a demo healthcare application built with vanilla HTML, CSS, and JavaScript",
  "color: #666; font-size: 12px;",
);
console.log(
  "%cFor educational purposes only",
  "color: #3BCF8E; font-size: 12px;",
);
