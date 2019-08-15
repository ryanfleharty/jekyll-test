// for (let step = 0; step < 5; step++) {
//   console.log('Walking east one step', step);
// }

// Pseudocode
// Find the sum of all the even integers between 0 and 10
  let sum = 0;

for (let i = 0; i < 10; i++ ) {
  if ( i % 2 == 0) {
    sum += i;
  }
}

console.log(sum);

// can omit the else if you are not doing anything inside the else
// if (true) {
//   console.log('awesome');
// } else {
//   // do nothing
// }
