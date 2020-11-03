import emojipedia from "./emojipedia";
//var numbers = [3, 56, 2, 48, 5];
//Map -Create a new array by doing something with each item in an array.
// function double(x) {
// return x *2;
// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(functionz (num){
//   return num > 10;
// });
// console.log(newNumbers);
// var newNumbers = [];
// numbers.forEach(function(num) {
//   if(num > 10) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumbers = 0;
// numbers.forEach(function (num){
// newNumbers += num;
// });
// Using reduce function:
// var newNumbers = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator =" + accumulator);
//   console.log("currentNumber = " + currentNumber);

//   return accumulator + currentNumber;
// });


//Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
// return num > 10;
// });
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(newNumber);

///// Challenge...
//Reduce - Accumulate a value by doing something to each item in an array.
// var strings[];
//  emojipedia.forEach(function (num){
// string tstr =emojipedia.meaning;
//  strings += tstr.substring(20);
//  });
// Using reduce function:
// var strings = emojipedia.reduce(function (strings, emojipedia.meaning) {
//    console.log("accumulator =" + accumulator);
//    console.log("currentNumber = " + currentNumber, emojipedia.meaning);
// //var strings = emojipedia.reduce(function(meaning))
// //Map -Create a new array by doing something with each item in an array.
// function double(x) {
// return x *2;
// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers);

const newEmojipedia = emojipedia.map(function(emojiEntry){
return emojiEntry.meaning.substring(0,100);
})
console.log(newEmojipedia);