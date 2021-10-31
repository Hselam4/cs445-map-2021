/**
 * Exercise 04
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and add Types
 to everything you can.When you are done, transpile the TS code to JS code and inspect the JS code.
 */
//todo - using typescript class 
class BaseObject {
     width: number;
     length: number;
};
let baseObject = {
    width: 0,
    length: 0,
};

let rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
    

rectangle.calcSize = function() {
        return this.width * this.length;    
};

console.log(rectangle.calcSize());

//2
 class BaseObject2{
    
     constructor(public width: number = 0, public length: number = 0){

     }   
 }
 class Rectangle extends BaseObject2{

 
 calcSize(): number{
     return this.width * this.length;
 }
}
let rectangle1 = new Rectangle(5, 2);
console.log(rectangle.calcSize())