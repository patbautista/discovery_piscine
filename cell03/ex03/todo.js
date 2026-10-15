// Get references to HTML elements
var ftList = document.getElementById('ft_list');
var newBtn = document.getElementById('newBtn');

// Load saved TO DO items from browser cookies when the page opens
loadTodosFromCookie();

// Event listener for the 'New' button
newBtn.addEventListener('click', function() {
    // Open a prompt window to ask the user for task text
    var taskText = prompt('Enter a new TO DO item:');

    // Make sure user entered something (not null and not empty spaces)
    if (taskText !== null && taskText.trim() !== '') {
        createTodoItem(taskText.trim());
        saveTodosToCookie(); // Save updated list to cookies
    }
});

// Function to create a new TO DO div element and put it at the top of the list
function createTodoItem(text) {
    var todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item';
    todoDiv.textContent = text;

    // Add click event to remove the item with user confirmation
    todoDiv.addEventListener('click', function() {
        var choice = confirm('Do you want to remove this TO DO item?');
        if (choice) {
            // Remove element completely from the DOM
            ftList.removeChild(todoDiv);
            saveTodosToCookie(); // Update cookie storage after deleting
        }
    });

    // Place the new TO DO at the top of the list using prepend / insertBefore
    if (ftList.firstChild) {
        ftList.insertBefore(todoDiv, ftList.firstChild);
    } else {
        ftList.appendChild(todoDiv);
    }
}

// Function to save current list items into a cookie as a JSON string
function saveTodosToCookie() {
    var items = [];
    var todoDivs = ftList.children;

    // Collect text from each TO DO div
    for (var i = 0; i < todoDivs.length; i++) {
        items.push(todoDivs[i].textContent);
    }

    // Convert array to JSON string and encode for safety in cookies
    var jsonString = JSON.stringify(items);
    
    // Set cookie that expires in 7 days
    var d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    
    document.cookie = "ft_list=" + encodeURIComponent(jsonString) + ";" + expires + ";path=/";
}

// Function to read cookie and reconstruct the TO DO list on page load
function loadTodosFromCookie() {
    var name = "ft_list=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i].trim();
        if (c.indexOf(name) === 0) {
            var cookieValue = c.substring(name.length, c.length);
            if (cookieValue) {
                try {
                    // Decode string and parse JSON back into array
                    var items = JSON.parse(decodeURIComponent(cookieValue));
                    
                    // Recreate items in reverse order so original top items stay on top
                    for (var j = items.length - 1; j >= 0; j--) {
                        createTodoItem(items[j]);
                    }
                } catch (e) {
                    console.error("Error parsing saved cookie data", e);
                }
            }
            break;
        }
    }
}