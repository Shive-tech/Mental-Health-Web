/* Code for the navigator bar */
#leftArrow, #rightArrow {
    font-size: 2vw;
    background-color: rgba(128, 128, 128, 0.5); /* semi-transparent grey background */
    color: #333; /* dark grey arrow */
    border: none;
    padding: 1vw;
}
code for javascript:
var index = 1;
var maxIndex = 3;

// Hide all buttons initially
for (var i = 1; i <= maxIndex; i++) {
    document.getElementById('bodytabs' + i).style.display = 'none';
}

// Show the first button
document.getElementById('bodytabs' + index).style.display = 'block';

document.getElementById('leftArrow').addEventListener('click', function() {
    if(index > 1) {
        // Hide the current button
        document.getElementById('bodytabs' + index).style.display = 'none';

        index--;

        // Show the previous button
        document.getElementById('bodytabs' + index).style.display = 'block';
    }
});

document.getElementById('rightArrow').addEventListener('click', function() {
    if(index < maxIndex) {
        // Hide the current button
        document.getElementById('bodytabs' + index).style.display = 'none';

        index++;

        // Show the next button
        document.getElementById('bodytabs' + index).style.display = 'block';
    }
});