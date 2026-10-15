// Get the balloon element from the DOM
var balloon = document.getElementById('balloon');

// Track current size and color sequence index
var currentSize = 200;
var colors = ['red', 'green', 'blue'];
var colorIndex = 0; // Starts at 0 (red)

// Function to update the balloon's size and background color in DOM
function updateBalloon() {
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}

// Event 1: Click on the balloon
balloon.addEventListener('click', function() {
    // Increase size by 10px
    currentSize += 10;
    
    // Cycle color forward: Red -> Green -> Blue -> Red
    colorIndex = (colorIndex + 1) % colors.length;

    // Check if the balloon size exceeds 420px (explodes!)
    if (currentSize > 420) {
        currentSize = 200; // Reset to original size
        colorIndex = 0;    // Reset to red
    }

    updateBalloon();
});

// Event 2: Mouse leaves the balloon area
balloon.addEventListener('mouseleave', function() {
    // Shrink size by 5px, but do not let it go below 200px
    if (currentSize > 200) {
        currentSize -= 5;
        
        // Cycle color in reverse: Blue -> Green -> Red -> Blue
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    }

    updateBalloon();
});