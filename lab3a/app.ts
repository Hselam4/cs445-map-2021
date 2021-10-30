//task 3
function calculateAverage(array: number[]) {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }
    return `The Average of  ${array} is ${(sum / array.length).toFixed(2)}`;
}
console.log(calculateAverage([17, 9, 4, 82, 15, 36]));
console.log(calculateAverage([9, 4, 1, 7, 2, 3, 5, 8, 10, 6]));

//task 3
const arr1: number[] = [17, 9, 4, 82, 15, 36];
const arr2: number[] = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];

function calcAvg(arr){
    let sum = 0, average = 0;
    for(let num of arr){
        sum += num;
    }
    average =sum/arr.length;
    return`The average of [${arr}] is ${average.toFixed(2)}`;

}
console.log(calcAvg(arr1));
console.log(calcAvg(arr2));

