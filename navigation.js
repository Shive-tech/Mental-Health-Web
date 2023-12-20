var indexValue = 1;
showImg(indexValue);


function slide_slide(e) {
  showImg(indexValue += e);
}


function showImg(e) {
  var i;
  const imgContainers = document.querySelectorAll('.images .slide');
  if (e > imgContainers.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = imgContainers.length;
  }
  for (i = 0; i < imgContainers.length; i++) {
    imgContainers[i].style.display = "none";
  }
  imgContainers[indexValue - 1].style.display = "flex"; // Display the container
}


function goToPage(page) {
  // Navigate to the specified page based on the button clicked
  switch (page) {
    case 'page1':
      window.location.href = 'page1.html'; // Replace with your actual page URL
      break;
    case 'page2':
      window.location.href = 'page2.html'; // Replace with your actual page URL
      break;
    case 'page3':
      window.location.href = 'page3.html'; // Replace with your actual page URL
      break;
    // Add more cases as needed
  }
}


//old code//
// var index = 1;
// var maxIndex = 3;

// // Hide all buttons initially
// for (var i = 1; i <= maxIndex; i++) {
//     document.getElementById('bodytabs' + i).style.display = 'none';
// }

// // Show the first button
// document.getElementById('bodytabs' + index).style.display = 'block';

// document.getElementById('leftArrow').addEventListener('click', function() {
//     if(index > 1) {
//         // Hide the current button
//         document.getElementById('bodytabs' + index).style.display = 'none';

//         index--;

//         // Show the previous button
//         document.getElementById('bodytabs' + index).style.display = 'block';
//     }
// });

// document.getElementById('rightArrow').addEventListener('click', function() {
//     if(index < maxIndex) {
//         // Hide the current button
//         document.getElementById('bodytabs' + index).style.display = 'none';

//         index++;

//         // Show the next button
//         document.getElementById('bodytabs' + index).style.display = 'block';
//     }
// });