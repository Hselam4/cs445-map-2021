/**
 * Exercise 1
 * Re-write the following code using TypeScript. Try to be as explicit as possible and add
 * Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.
 */
 class University{
    name: string;
    dept: string;
    constructor(name: string, dept: string){
        this.name = name;
        this.dept = dept;
    }
    graduation(year: number): void{
        console.log(`Graduating ${this.dept}${year} students`);
    }
};
let miu = new University("MIU", "MSD");
miu.graduation(2021);

//method 2
class Univeristy2{
   
    constructor(public name: string, private dept: string, ){
     
    }
        graduation(year: number){
            console.log(`Graduation ${this.dept} ${year} students`);
        }  
    
};
let miu2 = new Univeristy2("MIU", "MSD");
miu.graduation(2021);

// ## Exercise 02
// Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.
// javascript

let bankAccount : {     
    money: number;
    deposit (value: number): void;
    };
     
    bankAccount = {     
    money: 2000,
    deposit (value: number){     
    this.money += value;
    }     
}     

    let myself : {     
    name: string;
    bankAccount:typeof bankAccount;
    //hobbies: [string, string]
    hobbies: string[];
    };
     
    myself = {     
    name : "Selam",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
     
    }     
     
    myself.bankAccount.deposit(3000);
    console.log(myself.bankAccount.money);
    console.log(myself);

    /*
Exercise 03 
Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can. 
When you are done, transpile the TS code to JS code and inspect the JS code.
*/

//using typescript class
class Car {
    name: string;
    acceleration: number;

    constructor(name: string){
        this.name = name;
        this.acceleration = 0;
    }
   
    honk(): void {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("BMW");
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

