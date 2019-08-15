console.log('app.js');

$(() => {

    $('.outside').on('click', (event) => {
        // console.log('OUTSIDE target is: ',  event.target);
        // console.log('OUTSIDE currentTarget is: ', event.currentTarget);
        // $('.outside').css('background-color', 'black');
        $(event.target).css('background-color', 'black');
    });

    $('.inside').on('click', (event) => {
        console.log('INSIDE target is: ',  event.target);
        console.log('INSIDE currentTarget is: ', event.currentTarget);
        // event.stopPropagation();
    });

    $('body').on('click', (event) => {
        console.log('BODY target is: ',  event.target);
        console.log('BODY currentTarget is: ', event.currentTarget);
    })

});
