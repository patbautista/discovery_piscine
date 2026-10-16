// Function to switch between pages/views
function showView(viewId) {
  // Get all sections that have the class 'view-section'
  var sections = document.querySelectorAll('.view-section');
  
  // Loop through all sections and hide them
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove('active');
  }

  // Find the clicked section by ID
  var targetSection = document.getElementById(viewId);
  
  // If the section exists, show it by adding the 'active' class
  if (targetSection) {
    targetSection.classList.add('active');
    
    // Scroll back to top of the page
    window.scrollTo(0, 0);
  }
}