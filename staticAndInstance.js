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