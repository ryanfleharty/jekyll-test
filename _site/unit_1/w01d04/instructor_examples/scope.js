// const exampleFunction = () => {
//     const num = 100;
//     console.log(num*num);
// }
//
// console.log(num);
//
// const item = 'spcicy meatball';
//
// const exampleFunction = () => {
//     console.log(item + " within function");
// }
//
// exampleFunction();


// const setItem = () => {
//     const item = 'spicy meatball';
//     return item;
// }
//
// const getItem = () => {
//     return item;
// }
//
// console.log(getItem());

// const returnName = () => {
//     return 'Matt';
// }
//
// const returnGreeting = () => {
//     return "oh hai, " + returnName();
// }
//
// console.log(returnGreeting());

// {
//     const item = 'spicy meatball';
// }
// console.log(item);


// for(let i = 0; i < 100; i++){
//     console.log('Inside the block: ', i);
// }
//
// console.log('Outside the block: ', i);

// if (true){
//     const num = 100;
// }
// console.log(num);


// const words = 'that is a ...';
// {
//     const item = 'spcicy meatball';
//     const start = 'mama mia!';;
//     {
//         console.log(start);
//         console.log(words);
//         console.log(item);
//     }
// }

const countdown = (0) => {
    if(num != 0){
        console.log(num);
        countdown(num - 1);
    } else {
        return;
    }
}
countdown(10);
