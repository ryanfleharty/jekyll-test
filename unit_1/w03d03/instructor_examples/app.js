// const addH2 = () => {
//     let $h2 = $('<h2>').text('Just getting started');
//     $('body').append($h2);
// }
//
// const changeH2 = () => {
//     $('h2').text("Getting warmed up");
// }
//
//
// $(() => {
//
//     addH2();
//     changeH2();
//
// })
// const randColorRGB = () => {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//
//     return "rgb("+red+","+green+", "+blue+")";
// }
//
// const generateSquares = (numberOfSquares) => {
//     for(let i = 1; i <= numberOfSquares; i++){
//         console.log(i);
//         const $square = $('<div>').addClass('square');
//         $square.css('background-color', randColorRGB());
//         $square.text(i);
//         $square.attr('id', 'square' + i);
//         $('body').append($square);
//     }
// }
//
// $(() => {
//     generateSquares(1000);
// })



//   DATA LESSON
// const data = [
//   { name: "Megatron", address: "Cybertron" },
//   { name: "Some guy", address: "Some street" },
//   { name: "Grace Hopper", address: "Arlington, Virginia" },
//   { name: "Ching Shih", address: "The High Seas" },
//   { name: "Slimer", address: "The Library" },
//   { name: "Umbra", address: "The Void" },
//   { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
//   { name: "Matt Huntington", address: "Remote" },
//   { name: "Ronald McDonald", address: "Casa del McDonalds" },
//   { name: "Jem", address: "Starlight Music" }
// ];
//
// const addData = (name,address) => {
//     $('body').empty();
//     data.push({name:name, address:address});
//     populateData();
// }
//
// const populateData = () => {
//     for(let i = 0; i < data.length; i++){
//         console.log(data[i]);
//         const $infoContainer = $('<div>').addClass('info-container');
//         const $nameDiv = $('<div>').addClass('name').text(data[i].name);
//         const $addressDiv = $('<div>').addClass('address').text(data[i].address);
//         $infoContainer.append($nameDiv);
//         $infoContainer.append($addressDiv);
//         $('body').append($infoContainer);
//     }
// }
//
// $(() => {
//     populateData();
//     addData('Karolin', 'NY');
// })

// Events
const addText = () => {
    $('body').append('It seems as if it has been clicked');
}

const changeClass = () => {
    $('body').toggleClass('black');
}

const action = () => {
    addText();
    changeClass();
}

$(() => {
    const $btn = $('#btn');
    $btn.on('click', action);
});
