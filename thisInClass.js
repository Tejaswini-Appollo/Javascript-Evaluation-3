class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age(currentYear) {
        return currentYear - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let car = new Car("Ford", 2014);
console.log(car.age(year));