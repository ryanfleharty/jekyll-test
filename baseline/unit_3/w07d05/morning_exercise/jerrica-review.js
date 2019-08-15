// validCard method
const validCard = (cardNum) => {
  // split the cardNum into an array of its individual numbers
  let numArr = cardNum.toString().split('')
  // loop through the array, starting from the second to last number, and double every other number in the array
  for (let i = numArr.length - 2; i >= 0; i -= 2) {
    numArr[i] = numArr[i] * 2
  }
  // flatten the array to create the new number string
  let joinedNum = numArr.join('')
  // split the new number into an array of its individual numbers
  let newNumArr = joinedNum.split('')
  // define an empty sum variable
  let sum = 0
  // loop through the array and sum all the numbers
  for (let num of newNumArr) {
    sum += parseInt(num)
  }
  // check if the sum is evenly divisible by 10
  if (sum % 10 === 0) {
    // if it is, return true
    return true
  }
  // if it's not, return false
  return false
}

// test
console.log(validCard(1234567890123456))
console.log(validCard(4408041234567893))
console.log(validCard(38520000023237))
console.log(validCard(4222222222222))
