// Function to generate a random hex color string (e.g., "#3a82f6")
function getRandomColor() {
    // List of characters used in hexadecimal colors
    var letters = '0123456789ABCDEF';
    var color = '#';
    
    // Pick 6 random characters from the letters string
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * 16);
        color += letters[randomIndex];
    }
    
    return color;
}

// Get the button element from the HTML document using its ID
var button = document.getElementById('colorBtn');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Generate a new random color
    var newColor = getRandomColor();
    
    // Apply the generated color to the background of the body page
    document.body.style.backgroundColor = newColor;
});