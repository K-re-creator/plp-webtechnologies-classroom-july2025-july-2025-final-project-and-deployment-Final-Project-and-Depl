// Robust site JS: menu toggle, year update, and contact form validation
document.addEventListener('DOMContentLoaded', function () {
  // 1) Update year(s) if present
  var years = document.querySelectorAll('#year, #year-2, #year-3, #year-4');
  if (years && years.length) {
    years.forEach(function (el) {
      if (el) el.textContent = new Date().getFullYear();
    });
  }


  // 3) Contact form validation (defensive)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var message = document.getElementById('message');
      var formMsg = document.getElementById('formMsg');

      // If the message element is missing, create it so code doesn't break
      if (!formMsg) {
        formMsg = document.createElement('p');
        formMsg.id = 'formMsg';
        form.appendChild(formMsg);
      }

      if (!name || !email || !message) {
        formMsg.textContent = 'Form elements are missing.';
        formMsg.style.color = 'crimson';
        return;
      }

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        formMsg.textContent = 'Please fill in all fields.';
        formMsg.style.color = 'crimson';
        return;
      }

      // basic email pattern check
      var emailPattern = /^\S+@\S+\.\S+$/;
      if (!emailPattern.test(email.value)) {
        formMsg.textContent = 'Please enter a valid email address.';
        formMsg.style.color = 'crimson';
        return;
      }

      formMsg.textContent = 'Message sent — thank you!';
      formMsg.style.color = 'green';
      form.reset();

      // NOTE: here you'd normally POST to a backend or serverless endpoint
    });
  }
});
