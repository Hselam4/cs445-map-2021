var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Exercise 1
 * Re-write the following code using TypeScript. Try to be as explicit as possible and add
 * Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.
 */
var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating " + this.dept + year + " students");
    };
    return University;
}());
;
var miu = new University("MIU", "MSD");
miu.graduation(2021);
//method 2
var Univeristy2 = /** @class */ (function () {
    function Univeristy2(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    Univeristy2.prototype.graduation = function (year) {
        console.log("Graduation " + this.dept + " " + year + " students");
    };
    return Univeristy2;
}());
;
var miu2 = new Univeristy2("MIU", "MSD");
miu.graduation(2021);
// ## Exercise 02
// Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.
// javascript
var bankAccount;
bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself;
myself = {
    name: "Selam",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself.bankAccount.money);
console.log(myself);
/*
Exercise 03
Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can.
When you are done, transpile the TS code to JS code and inspect the JS code.
*/
//using typescript class
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
/**
 * Exercise 04
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and add Types
 to everything you can.When you are done, transpile the TS code to JS code and inspect the JS code.
 */
//using typescript class 
var BaseObject = /** @class */ (function () {
    function BaseObject() {
    }
    return BaseObject;
}());
;
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
//2
var BaseObject2 = /** @class */ (function () {
    function BaseObject2(width, length) {
        if (width === void 0) { width = 0; }
        if (length === void 0) { length = 0; }
        this.width = width;
        this.length = length;
    }
    return BaseObject2;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject2));
var rectangle1 = new Rectangle(5, 2);
console.log(rectangle.calcSize());
