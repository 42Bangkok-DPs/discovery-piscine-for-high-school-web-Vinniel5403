$(document).ready(function () {

    const setCookie = (name, value, days) => {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
    };


    const getCookie = (name) => {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, '');
    };

    const collectdata = JSON.parse(getCookie('myArray') || '[]');


    const addTodo = (todoText) => {
        const newTodo = $('<div>').text(todoText).on('click', function () {
            if (confirm("Do you want to remove this TO-DO?")) {
                $(this).remove();
                collectdata.splice(collectdata.indexOf(todoText), 1);
                setCookie('myArray', JSON.stringify(collectdata), 7); 
            }
        });
        $('#ft_list').prepend(newTodo);
    };

    $('#add_todo_btn').on('click', () => {
        const todoText = $('#todo_input').val().trim();
        if (todoText) {
            collectdata.push(todoText);
            addTodo(todoText); 
            setCookie('myArray', JSON.stringify(collectdata), 7); 
            $('#todo_input').val(''); 
        }
    });
    collectdata.forEach(addTodo);
});
