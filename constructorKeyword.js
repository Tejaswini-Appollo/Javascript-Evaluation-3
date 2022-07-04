class Animal {
    constructor() {
        this.name = "Dog";
    }

    behaviour() {
        return this.name + " barks";
    }
}

let animal = new Animal;
console.log(animal.behaviour());