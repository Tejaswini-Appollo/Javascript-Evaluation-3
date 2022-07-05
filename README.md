# Javascript Evaluation 3

## 1. this inside an arrow function
``` Javascript
In the regular function, a function always defines its this value. 
Arrow functions treat this keyword differently. They don’t define their own context since it doesn’t have its own this context. They inherit that from the parent scope whenever you call this.

Example:

const parent1 = {
    name: "Sinamika",
    introduce: () => {
        return `${this.name} is my mom`;
    }
}

console.log(parent1.introduce());

const parent2 = {
    name: "Sinamika",
    introduce: function() {
        return `${this.name} is my mom`;
    }
}

console.log(parent2.introduce());
```
## Output
``` Javascript
undefined is my mom
Sinamika is my mom
```

## 2. String Permutation
``` Javascript
const stringPermutations = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
      []
    );
};

console.log(stringPermutations('abc'));
```
## Output
``` Javascript
[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
```

## 3. 
## 4. Examine the code
``` Javascript
for(var i = 0; i < 10; i++) {
    let k = i;
    setTimeout(function() {
        console.log(k);
        k = k + 1;
    }, 10);
}
```
## Output
``` Javascript
0
1
2
3
4
5
6
7
8
9
```

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

## 6. this inside a class method
``` Javascript
When using this inside a method of a class, it points to the current object.

Example:

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
```
## OUtput
``` Javascript
8
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

## 8. Event loop
``` Javascript
setTimeout() is an example for executing event loop 
There are two arguments for event loop
1. A meesage to be added to the queue
2. The time delay

If there are no messages in the queue and the stack is empty, 
the message is processed after the time delay. But if there are 
messages in the queue, the setTimeout() will have to wait for other
messages to get processed.

Example

const seconds = new Date().getSeconds();

setTimeout(function() {
  console.log(`Ran after ${new Date().getSeconds() - seconds} seconds`);
}, 500)

while (true) {
  if (new Date().getSeconds() - seconds >= 2) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}
```
## Output
``` Javascript
Good, looped for 2 seconds
Ran after 2 seconds
```

## 9. Custom event listener
``` Javascript
We can create a custom event using Event and CustomEvent constructor

To create using the Event constructor:

1. We create an event using the Event constructor.
2. We listen to this event using the addEventListener() method.
3. We trigger or dispatch the event using element.dispatchEvent(eventName) method.
4. A custom Event named start has now been created.

Example:

let x = 5;
const event1 = new Event("hello");
  
document.addEventListener('hello', ()=>{
    console.log("Start event triggered")
});
  
if(x == 5){
    document.dispatchEvent(event1);
}

To create using the CustomEvent constructor:

1. We create a custom event using the CustomEvent constructor.
2. This takes two arguments, the first is the name of the event 
and the second is an object that contains the data. 
3. The property name inside the object name should be named 
detail otherwise it won’t work.
4. We create a listener for this event.
5. We trigger or dispatch the event.
6. A custom event that contains data has been created.

Example:

let y = 5;
const event = new CustomEvent("start", {
    detail: {
      platform : "GeeksforGeeks"
    }
});
  
document.addEventListener('start', (e) => {
    console.log(`Start event triggered on platform ${e.detail.platform}`);
})
  
if (y == 5) {
    document.dispatchEvent(event);
}
```
## Output
``` Javascript
Start event triggered
Start event triggered on platform GeeksforGeeks
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