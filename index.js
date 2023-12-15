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


  // function scaleWebsite() {
  //   // Set the base window size for scaling
  //   var baseWidth = 1200; // Adjust this based on your design
  
  //   // Calculate the scaling factor based on the current window width
  //   var scaleFactor = window.innerWidth / baseWidth;
  
  //   // Get all elements in the document
  //   var allElements = document.querySelectorAll('*');
  
  //   // Loop through each element and adjust font size, padding, and margin
  //   allElements.forEach(function(element) {
  //     // Scale font size
  //     var currentFontSize = window.getComputedStyle(element).fontSize;
  //     element.style.fontSize = scaleFactor * parseFloat(currentFontSize) + 'px';
  
  //     // Scale padding and margin
  //     ['padding', 'margin'].forEach(function(property) {
  //       var sides = ['Top', 'Right', 'Bottom', 'Left'];
  //       sides.forEach(function(side) {
  //         var current = window.getComputedStyle(element)[property + side];
  //         element.style[property + side] = scaleFactor * parseFloat(current) + 'px';
  //       });
  //     });
  //   });
  // }
  
  // // Call the function initially
  // scaleWebsite();
  
  // // Attach the function to the window resize event to scale dynamically
  // window.addEventListener('resize', scaleWebsite);
