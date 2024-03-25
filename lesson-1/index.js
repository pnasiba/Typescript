// Primative type
var fname = "Anna";
fname = "Lucy";
// Union type
var age;
age = 20;
age = "20";
// Dynamic type
var year = 2024;
year = true;
// Literal type
var direct;
direct = "Up";
// Object
var person;
person = {
    name: "Ann",
    age: 22,
    isStudent: true,
};
console.log(person);
// Array
// Number
var arr = [1, 2, 3, 4];
console.log(arr);
// Number | String
var arrItem = [1, 2, 3, 4, 'a'];
console.log(arrItem);
// Tuples
var option;
option = [10, 'smth'];
// Functions with return
function sumNumber(a, b) {
    return a - b;
}
var result = sumNumber(10, 5);
console.log(result);
// Functions with void
function voidFunc() {
    console.log("This is void function");
}
voidFunc();
// Functions with Errors
function neverFunc() {
    throw new Error("These all Errors");
}
neverFunc();
