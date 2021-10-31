/*
Exercise 03
Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can.
When you are done, transpile the TS code to JS code and inspect the JS code.
*/
//solution using typescript class
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log(" " + this.name + " is saying: Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
car.accelerate(60);
console.log(car.acceleration); // 60
