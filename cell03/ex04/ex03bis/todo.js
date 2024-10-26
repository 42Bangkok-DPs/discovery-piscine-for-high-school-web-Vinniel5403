$(document).ready(function () {
    const collectdata = JSON.parse(localStorage.getItem('myArray')) || [];

    // Define addTodo function before use
    const addTodo = (todoText) => {
        const newTodo = $('<div>').text(todoText).on('click', function () {
            if (confirm("Do you want to remove this TO-DO?")) {
                $(this).remove();
                collectdata.splice(collectdata.indexOf(todoText), 1);
                localStorage.setItem('myArray', JSON.stringify(collectdata));
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
            localStorage.setItem('myArray', JSON.stringify(collectdata));
            $('#todo_input').val(''); // Clear input field after adding todo
        }
    });

    // Populate list on page load
    collectdata.forEach(addTodo);
});