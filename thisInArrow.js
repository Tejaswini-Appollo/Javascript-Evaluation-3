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