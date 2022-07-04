class Car {
    constructor(brand) {
        this.brand = brand;
    }
    displayBrand() {
        return "My car's brand is " + this.brand;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    displayModel() {
        return this.displayBrand() + " My car's model is " + this.model;
    }
}

let carDetails = new Model("SUZUKI", "BREEZA");
console.log(carDetails.displayModel());