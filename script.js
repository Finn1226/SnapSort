// Analytics tracking - sends data to Google Sheets
// SETUP REQUIRED: Replace SCRIPT_URL with your Google Apps Script Web App URL

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyBFKiGd9AQ30d1XhgjV6miT0a_mD-vDZoDWG19y-8JyQwJH0F2RC07_8KqgloWHrp0/exec"; // Replace this after setup

// Save response to Google Sheets
async function trackResponse(action) {
  const response = {
    action: action,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    screenSize: `${window.screen.width}x${window.screen.height}`,
  };

  // Log to console for immediate feedback
  console.log("Response tracked:", response);

  // Send to Google Sheets
  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Important: Google Apps Script requires this
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    });
    console.log("✓ Data sent to Google Sheets successfully");
  } catch (error) {
    console.error("Error sending data:", error);
    // Still show success message to user even if tracking fails
  }

  return response;
}

// Show message to user
function showMessage(message, type = "success") {
  const messageEl = document.getElementById("response-message");
  messageEl.textContent = message;
  messageEl.className = `response-message ${type}`;

  // Scroll to message
  messageEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Handle signup button click
document
  .getElementById("signup-btn")
  .addEventListener("click", async function () {
    await trackResponse("signup");
    showMessage(
      "🎉 Thank you for your interest! We'll notify you when SnapSort launches.",
      "success"
    );

    // Disable buttons after response
    disableButtons();
  });

// Handle decline button click
document
  .getElementById("decline-btn")
  .addEventListener("click", async function () {
    await trackResponse("decline");
    showMessage(
      "Thanks for checking out SnapSort! We appreciate your time.",
      "info"
    );

    // Disable buttons after response
    disableButtons();
  });

// Disable buttons after user responds
function disableButtons() {
  document.getElementById("signup-btn").disabled = true;
  document.getElementById("decline-btn").disabled = true;
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
  });
}

// Log instructions on page load
console.log(
  "%c👋 SnapSort Experiment",
  "font-size: 16px; font-weight: bold; color: #667eea;"
);
console.log("Responses are being tracked to Google Sheets");
