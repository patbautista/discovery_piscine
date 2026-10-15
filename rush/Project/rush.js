/**
 * Client-side View Switcher logic
 * Manages display toggling between single-page application sections.
 */
function showView(viewId) {
  document.querySelectorAll('.view-section').forEach(section => {
    section.classList.remove('active');
  });
  const activeSection = document.getElementById(viewId);
  if (activeSection) {
    activeSection.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}