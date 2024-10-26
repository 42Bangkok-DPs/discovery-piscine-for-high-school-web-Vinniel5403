$(document).ready(function () {
    // Function to set a cookie with URL-encoded value
    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        // Encode the value using encodeURIComponent
        document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    };

    // Function to get a cookie by name with decoded value
    const getCookie = (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) {
                // Decode the value when retrieving the cookie
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
            }
        }
        return null;
    };

    // Retrieve existing todo data from cookie, decode it, and parse it as JSON
    const collectdata = JSON.parse(getCookie('myArray')) || [];

    // Define addTodo function before use
    const addTodo = (todoText) => {
        const newTodo = $('<div>').text(todoText).on('click', function () {
            if (confirm("Do you want to remove this TO-DO?")) {
                $(this).remove();
                collectdata.splice(collectdata.indexOf(todoText), 1);
                setCookie('myArray', JSON.$(document).ready(function () {
    // Function to set a cookie with URL-encoded value
    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        // Encode the value using encodeURIComponent
        document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    };

    // Function to get a cookie by name with decoded value
    const getCookie = (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) {
                // Decode the value when retrieving the cookie
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
            }
        }
        return null;
    };

    // Retrieve existing todo data from cookie, decode it, and parse it as JSON
    const collectdata = JSON.parse(getCookie('myArray')) || [];

    // Define addTodo function before use
    const addTodo = (todoText) => {
        const newTodo = $('<div>').text(todoText).on('click', function () {
            if (confirm("Do you want to remove this TO-DO?")) {
                $(this).remove();
                collectdata.splice(collectdata.indexOf(todoText), 1);
                setCookie('myArray', JSON.stringify(collectdata), 7); // Store updated array in cookie
            }
        });
        $('#ft_list').prepend(newTodo);
    };

    // Add new todo on button click
    $('#add_todo_btn').on('click', () => {
        const todoText = $('#todo_input').val().trim();
        if (todoText) {
            collectdata.push(todoText);
            addTodo(todoText); // Now this is defined and called correctly
            setCookie('myArray', JSON.stringify(collectdata), 7); // Store updated array in cookie
            $('#todo_input').val(''); // Clear input field after adding todo
        }
    });

    // Populate list on page load
    collectdata.forEach(addTodo);
});
(collectdata), 7); // Store updated array in cookie
            }
        });
        $('#ft_list').prepend(newTodo);
    };

    // Add new todo on button click
    $('#add_todo_btn').on('click', () => {
        const todoText = $('#todo_input').val().trim();
        if (todoText) {
            collectdata.push(todoText);
            addTodo(todoText); // Now this is defined and called correctly
            setCookie('myArray', JSON.stringify(collectdata), 7); // Store updated array in cookie
            $('#todo_input').val(''); // Clear input field after adding todo
        }
    });

    // Populate list on page load
    collectdata.forEach(addTodo);
});
