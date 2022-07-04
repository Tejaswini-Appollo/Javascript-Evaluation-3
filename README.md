# Javascript Evaluation 3

## 5. Class instance method and static method 
``` Javascript
Instance method:

If it is an instance method, then you would create an 
object and then call that method using that object.

Static method:

Static method is declared with the keyword static 
and can be called using the Class name itself.

Example

class Sample {
    method1() {
        return "This will return method 1";
    }
    static method2() {
        return "This will return method 2";
    }
}

let object = new Sample;
console.log(object.method1());
console.log(Sample.method2());
```

## Output
``` Javascript
This will return method 1
This will return method 2
```

## 7. Execution order
``` Javascript
const ex1 = () => console.log(ex1)
const ex2 = () => console.log(ex2)
const ex = () => {
    console.log(ex)
    setTimeout(ex1, 1000)
    ex2()
}
ex()
```
## Output
``` Javascript
[Function: ex]
[Function: ex2]
[Function: ex1]
```

## 10. super and constructor keywords in class
### Super keyword
``` Javascript
The super keyword is used to call the parent's constructor 
class and get access to the parent's properties and methods.

Example:

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
```
### Output
``` Javascript
My car's brand is SUZUKI My car's model is BREEZA
```
### Constructor keyword
``` Javascript
The constructor method is a special method of class 
for creating and initializing an object instance 
of that class.

Example

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
```
### Output
``` Javascript
Dog barks
```