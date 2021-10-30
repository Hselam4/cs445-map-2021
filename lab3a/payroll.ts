//task 4 enum
enum taxPayroll {
    FICA = 10,
    STATE = 5,
    MEDICARE = 12,
}

console.log(taxPayroll.FICA, taxPayroll.STATE, taxPayroll.MEDICARE);
//222
enum taxPayroll2 {
    FICA, 
    STATE, 
    MEDICARE 
};
let tFICA: taxPayroll2 = taxPayroll2.FICA;
let tSTATE: taxPayroll2 = taxPayroll2.STATE;
let tMEDICARE: taxPayroll2 = taxPayroll2.MEDICARE;


console.log("FICA tax: " + tFICA + ", STATE taxPayroll2: " + tSTATE + ", MEDICARE tax:" + tMEDICARE);

enum taxRate{
    FICA = 10,
    STATE =5, 
    MEDICAR = 12
};
let taxNum1: taxRate = taxRate.FICA;
let taxNum2: taxRate = taxRate.STATE;
let taxNum3: taxRate = taxRate.MEDICAR;
console.log("FICA tax: " + taxNum1 + ", STATE taxPayroll2: " + taxNum2 + ", MEDICARE tax:" + taxNum3);