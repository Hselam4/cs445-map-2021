//task 4 enum
var taxPayroll;
(function (taxPayroll) {
    taxPayroll[taxPayroll["FICA"] = 10] = "FICA";
    taxPayroll[taxPayroll["STATE"] = 5] = "STATE";
    taxPayroll[taxPayroll["MEDICARE"] = 12] = "MEDICARE";
})(taxPayroll || (taxPayroll = {}));
console.log(taxPayroll.FICA, taxPayroll.STATE, taxPayroll.MEDICARE);
//222
var taxPayroll2;
(function (taxPayroll2) {
    taxPayroll2[taxPayroll2["FICA"] = 0] = "FICA";
    taxPayroll2[taxPayroll2["STATE"] = 1] = "STATE";
    taxPayroll2[taxPayroll2["MEDICARE"] = 2] = "MEDICARE";
})(taxPayroll2 || (taxPayroll2 = {}));
;
var tFICA = taxPayroll2.FICA;
var tSTATE = taxPayroll2.STATE;
var tMEDICARE = taxPayroll2.MEDICARE;
console.log("FICA tax: " + tFICA + ", STATE taxPayroll2: " + tSTATE + ", MEDICARE tax:" + tMEDICARE);
var taxRate;
(function (taxRate) {
    taxRate[taxRate["FICA"] = 10] = "FICA";
    taxRate[taxRate["STATE"] = 5] = "STATE";
    taxRate[taxRate["MEDICAR"] = 12] = "MEDICAR";
})(taxRate || (taxRate = {}));
;
var taxNum1 = taxRate.FICA;
var taxNum2 = taxRate.STATE;
var taxNum3 = taxRate.MEDICAR;
console.log("FICA tax: " + taxNum1 + ", STATE taxPayroll2: " + taxNum2 + ", MEDICARE tax:" + taxNum3);
