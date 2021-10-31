// ## Exercise 02
// Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.
// javascript

//TODO -solution

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

//TODO -- method 2 solution - using interfafce
// interface IbankAccount {
//     money: number;
//     deposit(value: number): void;

// }
// interface Imyself extends IbankAccount {
//     name: string;
//     hobbies: string[]
// }

// let myself: Imyself = {
//     name: "Selam",
//     hobbies: ["violine", "cooking"],
//     money: 3000,
//     deposit(value): void {
//         this.money += value;
//     }

// }
// myself.deposit(3000);
// console.log(myself);