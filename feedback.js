document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const feedback = form.querySelector("textarea").value;
      alert("Thank you for your feedback:\n" + feedback);
      form.reset();
    });
  });
});
