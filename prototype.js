// function Animal (name, energy){
// let animal ={}
// animal.name = "leo"
// animal.energy = 10

// animal.eat = function(amount) {
//     console.log('${this.name} is eating')
//     this.energy += amount
// }

// animal.sleep = function(length) {
//     console.log('${this.name} is eating')
//     this.energy += length
// }

// animal.play = function(length) {
//     console.log('${this.name} is eating')
//     this.energy -= length
    
// }

// return animal
// }

// let leo = new Animal('Leo', 7)
// let snoop = new Animal('snoop', 7)

const animalMethods = {
    eat(amount){
        console.log(`$(this.name)  is eating`)
        this.energy += amount

    },
    sleep(length){
        console.log(`$(this.name)  is sleeping`)
        this.energy += length

    },
    play(length){
        console.log(`$(this.name)  is playing`)
        this.energy -= length

    }

}

function Animal(name, energy){
    let animal ={}
    animal.name = name
    animal.energy = energy
    animal.eat = animalMethods.eat
    animal.sleep = animalMethods.sleep
    animal.play = animalMethods.play
    
    return animal
}
let leo = new Animal('leo', 7)
leo.eat(24);

console.log('leo', leo)