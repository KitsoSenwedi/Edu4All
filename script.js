function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
  
    // Show selected section
    document.getElementById(sectionId).style.display = 'block';
  }
  
  // Show the home section by default
  document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
  });
  