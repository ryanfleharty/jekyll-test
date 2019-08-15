// PRIME NUMBERS

// checkPrime function
const checkPrime = (num) => {
  // loop from 2 to the square root of the given number
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // if the number is evenly divisible by the current loop, it's not prime
      return false
    }
  }
  return true
}

// console.log(checkPrime(5))

// printPrimes
const printPrimes = (limit) => {
  let primeArr = []
  // loop from 0 to the given limit
  for(let i = 0; i <= limit; i++) {
    // use our checkPrime function to check if the current number is prime
    if(checkPrime(i)) {
      // if it is prime, log the number
      primeArr.push(i)
    }
  }
  return primeArr
}

// console.log(printPrimes(97))

// ROCK PAPER SCISSORS

// randomMove
const randomMove = () => {
  // define array of moves
  const movesArray = ['rock', 'paper', 'scissors']
  // generate a random number
  let randomNum = Math.floor(Math.random() * movesArray.length)
  // return a random move from the array
  return movesArray[randomNum]
}

// defining moves
let computersMove = randomMove()
let usersMove = randomMove()

// rock paper scissors
const rockPaperScissors = (computersMove, usersMove) => {
  // show computer's move
  console.log('computer chose ', computersMove)
  // show user's move
  console.log('user chose ', usersMove)
  // check who won
  if (computersMove === usersMove) {
    console.log('played the same move, it\'s a tie!')
  } else if(computersMove === 'rock') {
    if(usersMove === 'paper') {
      console.log('paper beats rock, user wins')
    } else if (usersMove === 'scissors') {
      console.log('rock beats scissors, computer wins')
    }
  } else if (computersMove === 'paper') {
    if(usersMove === 'rock') {
      console.log('paper beats rock, computer wins')
    } else if (usersMove === 'scissors') {
      console.log('scissors beats rock, user wins')
    }
  } else if (computersMove === 'scissors') {
    if(usersMove === 'rock') {
      console.log('rock beats scissors, user wins')
    } else if (usersMove === 'paper') {
      console.log('scissors beats paper, computer wins')
    }
  }
}

rockPaperScissors(computersMove, usersMove)
