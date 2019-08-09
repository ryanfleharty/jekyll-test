// =======================================
//               HERO CLASS
// =======================================
class Hero {
  constructor(name) {
    this.name = name
    this.health = 100
    this.weapons = [
      {
        name: 'sprinkle spray',
        hp: 5
      },
      {
        name: 'sugar shock',
        hp: 10
      }
    ]
    this.catchphrases = [
      'i\'m fresher than day old pizza',
      'you can\'t count my calories'
    ]
  }
  randomNumGenerator(arr) {
    return Math.floor(Math.random() * arr.length)
  }
  talkSass() {
    return this.catchphrases[this.randomNumGenerator(this.catchphrases)]
  }
  announceHealth() {
    return `${this.name} has ${this.health} health`
  }
  fight(enemy) {
    let weapon = this.weapons[this.randomNumGenerator(this.weapons)]
    enemy.health -= weapon.hp
    return `${enemy.name} got hit by ${weapon.name}! ${enemy.name} now has ${enemy.health} health`
  }
}

// =======================================
//               ENEMY CLASS
// =======================================
class Enemy {
  constructor(name) {
    this.name = name
    this.health = 100
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    }
    this.catchphrases = [
      'i\'m youtube famous',
      'i\'m more dangerous than an uncovered sewer'
    ]
  }
  randomNumGenerator(arr) {
    return Math.floor(Math.random() * arr.length)
  }
  talkSmack() {
    return this.catchphrases[this.randomNumGenerator(this.catchphrases)]
  }
  announceHealth() {
    return `${this.name} has ${this.health} health`
  }
  fight(enemy) {
    let weaponNames = Object.keys(this.weapons)
    let randomWeapon = weaponNames[this.randomNumGenerator(weaponNames)]
    enemy.health -= this.weapons[randomWeapon]
    return `${enemy.name} got  hit! ${enemy.name} now has ${enemy.health} health`
  }
}

// =======================================
//               THE STORY
// =======================================
const dougie = new Hero('Dougie the Donut')
const pizzaRat = new Enemy('Pizza Rat')

// walking down the street
console.log(dougie.talkSass())
console.log(pizzaRat.talkSmack())
console.log(dougie.fight(pizzaRat))
console.log(pizzaRat.fight(dougie))
console.log(dougie.announceHealth())
console.log(pizzaRat.announceHealth())
