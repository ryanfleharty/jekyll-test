$(() => {
    const list = [];

    const render = () => {
        // $('ul').empty();
        // list.forEach((item) => {
        //     $('ul').append('<li>' + item + '</li>');
        // });
        $('ul').append('<li>' + list[list.length-1] + '</li>');
        $('li').on('click', (event) => {
            $(event.currentTarget).css('text-decoration','line-through');
            $(event.currentTarget).effect('shake');
        })
    }

    $('form').on('submit', (event)=>{
        const inputValue = $('#input-box').val();

        list.push(inputValue);

        event.preventDefault();
        $(event.currentTarget).trigger('reset');

        render();
    });

});
