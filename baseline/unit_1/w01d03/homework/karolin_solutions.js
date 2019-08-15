
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTutles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// classic for loop
// for (let i = 0; i < ninjaTutles.length; i++) {
//   console.log(ninjaTutles[i].toUpperCase());
// }

// for (let turtle of ninjaTutles) {
//   console.log(turtle.toUpperCase());
// }

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

// whereIsWaldo.splice(1,1);
// console.log(whereIsWaldo);
whereIsWaldo[1][2] = "No One"
// alternative way to replace Neff, note, Eggbert is still in the array for this one
// whereIsWaldo[2].splice(2,1,"No One")
// console.log(whereIsWaldo);
// console.log(whereIsWaldo[3][1][1]);


////////////////////////////////
//  Excited Kitten
////////////////////////////////
const talkingPoints =  ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..." ]

//
// for (let i = 0; i < 20; i++ ){
//   console.log("Love me, pet me! HSSSSSS");
//   if (i % 2 === 0) {
//     // got this from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random and made some changes
//     let randomIndex = Math.floor(Math.random() * (talkingPoints.length));
//     console.log(talkingPoints[randomIndex]);
//   }
// }
////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// permanently solves it
nums.sort();
// console.log(nums);
// console.log(nums.length);

const miniNums = [1, 2, 3]

console.log(nums[Math.floor(nums.length / 2)]);
