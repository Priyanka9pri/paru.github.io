// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js is loaded!");

  // Example: Smooth scroll to feedback section
  const feedbackLinks = document.querySelectorAll("a[href='#feedback']");
  feedbackLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".feedback").scrollIntoView({ behavior: "smooth" });
    });
  });
});
