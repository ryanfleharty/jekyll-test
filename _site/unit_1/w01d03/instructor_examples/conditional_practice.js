let isMMColorGreen = true;

// if (isMMColorGreen){
//   console.log('Eiw! I am hurling this gross green M&M across the room.');
// } else {
//   console.log('Yum! M&Ms are so tasty!');
// }

const isPartyTonight = true;
const miniGolfCoupon = true;
const saleAtTheMall = true;

// if (isPartyTonight) {
//   console.log("I am going to party like it's 1999");
// } else if (miniGolfCoupon) {
//   console.log("Hole in one! Woo!");
// } else if (saleAtTheMall) {
//   console.log("When you buy more, you save more!");
// } else {
//   console.log("I love cooking cookies!");
// }

let hungry = true;
let thirsty = false;

// console.log(hungry);
// console.log(thirsty);
//
// console.log(!hungry);
// console.log(!thirsty);


let playerTurn = true;

// console.log("is it the player's turn?", playerTurn);
//
// playerTurn = !playerTurn;
//
// console.log("is it the player's turn?", playerTurn);
//
// playerTurn = !playerTurn;
//
// console.log("is it the player's turn?", playerTurn);
//
// playerTurn = !playerTurn;
//
// console.log("is it the player's turn?", playerTurn);

// console.log(Boolean('')); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(0)); // false

// All of these should be true
// console.log(Boolean("hi"));
// console.log(Boolean(1));
// console.log(Boolean(true));


// console.log(!!1); // true
// console.log(!!0); // false
// console.log(!!-1); // true
// console.log(!![]); // true
// console.log(!!{}); // true
// console.log(!!null); // false
// console.log(!!""); // false

// console.log(true == true);
//
// console.log(true == false);
//
// console.log(false == false);


// console.log(5 == '5');//true
// console.log(5 === '5'); // false

// console.log( 1 === 1);
// console.log('beans' == 'Beans'); // false
// console.log((5 + 5  * 3) === ((5 + 5) * 3 ));
// console.log(9 !== false); // true

// const a = 'beans'
// const b = 'Beans'
// const c = a * b;
// const d = a / b;
// console.log(d);
// console.log(NaN == NaN); // true
// console.log(undefined == undefined);

//
// let mmColor = 'blue'
//
// if (mmColor === 'green') {
//   console.log('Eiw! I am hurling this gross green M&M across the room.')
// } else {
//   console.log('Yum! M&Ms are so tasty!')
// }

// console.log("b" > "a");
// console.log( 12 >= "12");
//
// console.log('z' > 'abcdefg');

//
// console.log( -10 >= -100); // true
// console.log(Infinity >= -Infinity); // true
// console.log("McDonalds" > "Burger King");
// - tries to coerce the string, can't evaulates to NaN
// console.log(word >= -"word");

//
// console.log(true && true);
// console.log(false && false);
// console.log(true && false);


// console.log(true || false); // true
// console.log(false || false); // false


// let username = ''
//
// let user = username || 'Bob Bobby Bob'
//
// console.log(user);


// console.log(!false && true);
// console.log(1 || 6);

// const a = true;
// const b = false;
//
// console.log(a && a == b); // false
// console.log(!true || !false && !false); // true
// console.log(8 > 1 && true || false); // true


// if ( 5 % 2 === 0) {
//   console.log('number is even');
// }
//
// if ( 5 % 2 !==  0) {
//   console.log('number is odd');
// }
//
// if (49 % 7 === 0) {
//   console.log('number is divisible by 7');
// }

// if (5 %  2 == 0 ){
//   console.log('number is even');
// } else {
//   console.log('Number is odd');
// }

let firstVariable = "hello world";
firstVariable = 9 // firstVariable is reassigned to 9
let secondVariable = firstVariable // secondVariable is assigned to 9 because firstVariable is 9 - it is getting the value of the variable
secondVariable = "what?" // secondVariable is getting reassigned to "what"

// did firstVariable get reassigned as well?

console.log(firstVariable);
// 9
