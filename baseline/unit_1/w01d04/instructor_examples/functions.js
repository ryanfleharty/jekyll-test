// const checkInputLength = (input) => {
//     if (input.length > 10) {
//         console.log('> 10');
//     } else {
//         console.log('not > 10');
//     }
// }
//
// checkInputLength('asdf')

// const sayName = (name) => {
//     console.log('Hello!  My name is ' + name);
// }
//
// sayName('Frodo');
// sayName('Pippin');
// sayName('Sam');

// const calculateArea = (num1, num2) => {
//     console.log(num1 * num2);
// }
//
// calculateArea(4,5);

// const ten = () => {
//     return 10
// }
//
// console.log(8 + ten());
//
//
// const ten = () => {
//     console.log(10);
// }
//
// console.log(8 + ten());


// const calculateArea = (num1, num2) => {
//     return num1 * num2;
// }
// // calculateArea(2,10);
// // console.log(calculateArea(2,10));
//
// console.log( calculateArea( calculateArea(2,3) , calculateArea(9,4) ) );

const example = (input) => {
    if( input == "none"){
        return 0;
    }
    return 1;
}

console.log( example("none") );
console.log( example("two") );


const foo = () => {
    let a = 1;
    return a;
    a++;
    a *= 4;
}
