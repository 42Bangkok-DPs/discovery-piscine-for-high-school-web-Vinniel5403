// Helper functions for setting, getting, and deleting cookies
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {   
    document.cookie = name + "=; Max-Age=-99999999;";  
}

// Load existing data or initialize as empty
const collectdata = JSON.parse(getCookie('myArray') || "[]");

function addTodo(data) {
    const todoInput = document.getElementById('todo_input');
    const todoText = todoInput.value || data;

    if (typeof todoText === 'string' && todoText.trim()) {
        const ftList = document.getElementById('ft_list');
        const newTodo = document.createElement('div');
        newTodo.setAttribute("id", "remover");
        newTodo.textContent = todoText;
        ftList.insertBefore(newTodo, ftList.firstChild);

        // Add new todo to array and update cookie
        collectdata.push(todoText);
        setCookie('myArray', JSON.stringify(collectdata), 7);

        // Add event listener for removal
        newTodo.addEventListener("click", () => {
            if (confirm("Press a button!\nDo you want to remove this TO-DO?")) {
                newTodo.remove();
                // Update collectdata and cookie when an item is removed
                const index = collectdata.indexOf(todoText);
                if (index > -1) {
                    collectdata.splice(index, 1);
                    setCookie('myArray', JSON.stringify(collectdata), 7);
                }
            }
        });

        todoInput.value = '';  // Clear the input
    } else if (Array.isArray(data)) {
        // Populate list from existing data array
        const ftList = document.getElementById('ft_list');
        data.forEach(item => {
            const newTodo = document.createElement('div');
            newTodo.setAttribute("id", "remover");
            newTodo.textContent = item;
            ftList.insertBefore(newTodo, ftList.firstChild);

            // Add event listener for removal
            newTodo.addEventListener("click", () => {
                if (confirm("Press a button!\nDo you want to remove this TO-DO?")) {
                    newTodo.remove();
                    // Update collectdata and cookie when an item is removed
                    const index = collectdata.indexOf(item);
                    if (index > -1) {
                        collectdata.splice(index, 1);
                        setCookie('myArray', JSON.stringify(collectdata), 7);
                    }
                }
            });
        });
    }
}

// Check if there's saved data in cookies and populate the list on page load
if (collectdata.length > 0) {
    addTodo(collectdata);
}
