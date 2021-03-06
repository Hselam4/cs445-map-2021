/*
Exercise 03 
Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can. 
When you are done, transpile the TS code to JS code and inspect the JS code.
*/

//solution using typescript class
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

