document.addEventListener("DOMContentLoaded", () => {

  // Elements
  const aside = document.querySelector('aside');
  const container = document.querySelector('.container');
  const experienceSection = document.getElementById('experience');

  const aboutBtn = document.getElementById('aboutBtn');
  const originalContent = document.getElementById('originalContent');
  const aboutContent = document.getElementById('aboutContent');

  let isAboutOpen = false;

  /* About ↔ Back toggle */
  aboutBtn.addEventListener('click', () => {

    if (!isAboutOpen) {
      // Open About
      originalContent.style.display = 'none';
      aboutContent.style.display = 'block';
      aboutBtn.textContent = 'Back';
      isAboutOpen = true;

      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      // Back to main content
      aboutContent.style.display = 'none';
      originalContent.style.display = 'block';
      aboutBtn.textContent = 'About';
      isAboutOpen = false;

      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    updateSidebarPosition();
  });

});
