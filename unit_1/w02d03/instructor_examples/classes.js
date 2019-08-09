// Morning Lecture
// class Person {
//   constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.name = name;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || false;
//   }
//   classyGreeting (otherClassyPerson) {
//     console.log("Greetings " + otherClassyPerson.name + "!");
//   }
//   greet (otherPerson) {
//     console.log('hi ' + otherPerson + '!');
//   }
//   setHair(hairColor){
//     this.hair = hairColor;
//   }
//   walk ( ) {
//     console.log('I hate when my Segway is in the shop.');
//   }
// }

// const me = new Person('Karolin', 41, 'green', 'copper dark ash blond', true, true);
// const you = new Person('Matt', 36, 'blue', 'blond');
// console.log('Karolin');
// console.log(me);
// console.log('Matt');
// console.log(you);

// Works, but not best practices
// me.hair = 'supernova red'
// console.log(me);

// you.setHair('red')
// console.log(you);

// me.greet('bob');
// me.walk();
// you.greet('bob');
// you.walk();

// me.classyGreeting(you);
// you.classyGreeting(me);
//
// const vendingMachine = {
//   snacks: [
//     {
//       name: 'kitkat',
//       price: 6
//     },
//     {
//       name: 'sun chips',
//       price: 7
//     },
//     {
//       name: 'apple',
//       price: 12
//     },
//   ],
//   vend (input) {
//     console.log('vending', this.snacks[input]);
//   }
// }

// console.log(vendingMachine);
// vendingMachine.vend(1);




// Afternoon lecture

class Person {
  constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.name = name;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || false;
  }
  classyGreeting (otherClassyPerson) {
    console.log("Greetings " + otherClassyPerson.name + "!");
  }
  greet (otherPerson) {
    // String concatenation
    console.log('hi ' + otherPerson + '!');
    // same as above, just using Template Literals
    // console.log(`hi ${otherPerson}!`);
  }
  setHair(hairColor){
    this.hair = hairColor;
  }
  walk ( ) {
    console.log('I hate when my Segway is in the shop.');
  }
}

class SuperHero extends Person {
  constructor(name, age, eyes, hair){
    super(name, age, eyes, hair)
    this.superPowers = ['flight', 'superhuman strength', 'x-ray vision', 'heat vision', 'cold breath', 'super-speed', 'enhanced hearing', 'nigh-invulnerability']
  }
  fly () {
    console.log('Up up and away');
  }
  greet (otherPerson) {
    console.log(`Greetings Earthli- I mean ${otherPerson} ` );
  }
  walk () {
    super.walk()
    this.fly()
  }
}



const superman = new SuperHero ('Clark Kent', 30, 'blue', 'black')
// console.log(superman);
// superman.fly()
// superman.walk()
// superman.greet('bob')
// const me = new Person ('Karolin', 20, 'blond', 'green')
// console.log(me);
// me.fly() // fail I am not a superhero


// Factories
class Car {
  constructor(maker, serialNumber) {
    this.serialNumber = serialNumber
    this.maker = maker
  }
  drive () {
    console.log('Vroom Vroom');
  }
}

const makeCar = new Car ('Tesla', 3456789)
// console.log(makeCar);

class Factory {
  constructor(company){
    this.company = company;
    this.cars = [];
  }
  generateCar () {
    const newCar = new Car (this.company, this.cars.length)
    this.cars.push(newCar)
  }
}

const mazda = new Factory('Mazda')
// console.log(mazda);
mazda.generateCar()
mazda.generateCar()
mazda.generateCar()
// console.log(mazda);


const porche = new Factory("Porche")
porche.generateCar()
porche.generateCar()
porche.generateCar()
porche.generateCar()
console.log(porche);
