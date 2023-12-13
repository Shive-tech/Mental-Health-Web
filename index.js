function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

function scaleWebpage() {
  // Adjust the divisor and other values as needed
  var scaleFactor = window.innerWidth / 800;
  document.documentElement.style.fontSize = scaleFactor * 16 + 'px';
}

// Initial scaling on page load
scaleWebpage();

// Scaling on window resize
window.addEventListener('resize', scaleWebpage);


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
