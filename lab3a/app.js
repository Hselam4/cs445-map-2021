//task 3
function calculateAverage(array) {
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        sum += element;
    }
    return "The Average of  " + array + " is " + (sum / array.length).toFixed(2);
}
console.log(calculateAverage([17, 9, 4, 82, 15, 36]));
console.log(calculateAverage([9, 4, 1, 7, 2, 3, 5, 8, 10, 6]));
//task 3
var arr1 = [17, 9, 4, 82, 15, 36];
var arr2 = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];
function calcAvg(arr) {
    var sum = 0, average = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        sum += num;
    }
    average = sum / arr.length;
    return "The average of [" + arr + "] is " + average.toFixed(2);
}
console.log(calcAvg(arr1));
console.log(calcAvg(arr2));
