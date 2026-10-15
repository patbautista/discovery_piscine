// Helper function to check if an input string is a valid non-negative integer (>= 0)
function isPositiveInteger(value) {
    // Check if string contains only digits (0-9)
    var integerPattern = /^\d+$/;
    return integerPattern.test(value);
}

// Function that executes the calculation logic
function calculate() {
    var leftStr = document.getElementById('leftNum').value.trim();
    var rightStr = document.getElementById('rightNum').value.trim();
    var operator = document.getElementById('operator').value;

    // Validate that both input fields contain only valid positive integers (>= 0)
    if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
        alert('Error :(');
        return;
    }

    // Convert string inputs to integer numbers
    var num1 = parseInt(leftStr, 10);
    var num2 = parseInt(rightStr, 10);

    // Check for division or modulo by zero
    if ((operator === '/' || operator === '%') && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    // Perform requested math operation
    var result = 0;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else if (operator === '%') {
        result = num1 % num2;
    }

    // Display result in alert and log to browser console
    alert(result);
    console.log(result);
}

// Add event listener to the "Try me!" button
document.getElementById('submitBtn').addEventListener('click', calculate);

// Timed pop-up notification every 30 seconds (30000 milliseconds)
setInterval(function() {
    alert('Please, use me...');
}, 30000);