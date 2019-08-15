
const list = ["chair", "table", 'candle', 'map', "magnifying glass", "rupees"];
const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
//
// console.log(list);
// console.log(squares);
// console.log([]);

const num = 0;
const str = 'strings are cool';
const bool = true;
const arr = [];

// typeof

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof arr);
// console.log(Array.isArray(arr));

// console.log(list[0]);
// console.log(list[1]);




const ghostBusters1984 = ["Venkman", "Spengler", "Stantz",
                        "Zeddemore", "Melnitz", "Barrett", "Tully"];

// console.log(ghostBusters1984[0]);
// console.log(ghostBusters1984[2]);

// console.log(ghostBusters1984[ghostBusters1984.length - 1]);

const veggies = ["red pepper", "leek", "pumpkin", "cauliflower"];

veggies[1] = "spinach"

// console.log(veggies);


const numbers = [21, 18, 5, 3, 2, 1, 1];

// change third element to null, console log to confirm
numbers[2] = null
// console.log(numbers);

// change first element to be equal itself times ten using the compound operator
numbers[0] *= 10;

// console.log(numbers);

// console.log(list[ 2 * 2]);

// middle element
// console.log(list[list.length / 2]);

// last element
// console.log(list[list.length - 1]);

// access the middle element programatically
const shortArray = ['first', 'middle', 'last'];

// console.log(
//   shortArray[
//     Math.floor(
//       shortArray.length / 2
//     )
//   ]
// );
//
// const index = 1 + 1
// console.log(shortArray[index]);


const kitchenSink = ["Dirty spoon", "sponge", "plate with gunk", "soap", "water"];

// for (let i = 0;  i < kitchenSink.length; i++ ) {
//   console.log('This is in my sink: ' + kitchenSink[i] );
// }

// even number ones
// for (let i = 0;  i < kitchenSink.length; i += 2 ) {
//   console.log('This is in my sink: ' + kitchenSink[i] );
// }

// odd numbered items
// for (let i = 1;  i < kitchenSink.length; i += 2 ) {
//   console.log('This is in my sink: ' + kitchenSink[i] );
// }

const foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream"];

// for (let i = 0; i < foodSelections.length ; i++) {
//   if( (i % 2 === 0) || (i === 5)) {
//     console.log(foodSelections[i]);
//   }
// }


const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety",
                        "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

// even numbers
// for (let i = 0; i < looneyTunesChars.length; i++){
//   if( i % 2 === 0 ){
//     console.log(looneyTunesChars[i]);
//   }
// }

// same thing
// for (let i = 0; i < looneyTunesChars.length; i+= 2){
//     console.log(looneyTunesChars[i]);
// }

// even numbers and index of 3
// for (let i = 0; i < looneyTunesChars.length; i++){
//   if( i % 2 === 0 || i === 3){
//     console.log(looneyTunesChars[i]);
//   }
// }

// odd numbers
// for (let i = 0; i < looneyTunesChars.length; i++){
//   if( i % 2 !== 0){
//     console.log(looneyTunesChars[i]);
//   }
// }


const favMovies = [
  "Spaceballs",
  "Ace Ventura: Pet Detective",
  "Kung Fury",
  "Haloween (of course the original)",
  "It's a Wonderful Life",
  "Black Panther",
  "Best in Show",
  "The Hunger Games",
  "The Dark Knight",
  "pi",
  "The Shawshank Redemption",
  "Lord of the Rings",
  "Jaws",
  "Elf"
]

// console.log(favMovies.length);


const pairs = [["Snoopy", "Linus"], ["Peppermint Patty", "Woodstock"]];

// console.log(pairs.length);
// console.log(pairs[0][1]);


const confectionary = [["mounds", "almond joy"], ["lindt truffles", "easter egg"]];


confectionary[1][0] = "musketeer"

console.log(confectionary);
