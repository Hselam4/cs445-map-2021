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
//TODO - method 2
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
