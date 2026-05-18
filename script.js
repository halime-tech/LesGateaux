// Contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const thankYou = document.getElementById("thankYouMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simulate form submission
      thankYou.innerHTML = "<p class='success'>✅ Thank you for contacting us! We’ll reply soon.</p>";
      form.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        thankYou.innerHTML = "";
      }, 5000);
    });
  }
});