function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

function scalePage() {
  // Get the current window width
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Set a base font size
  var baseFontSize = 16;

  // Calculate a scaling factor based on the window width
  var scaleFactor = windowWidth / 1200; // You can adjust 1200 to your desired base width

  // Adjust the font size
  var newFontSize = baseFontSize * scaleFactor;
  document.body.style.fontSize = newFontSize + 'px';

  // You can add additional scaling logic for other elements if needed
}

// Call the function on page load and resize
window.addEventListener('load', scalePage);
window.addEventListener('resize', scalePage);

