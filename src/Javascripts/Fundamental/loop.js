//? What is loops

//? While loops
// while (true) {
//   console.log("While is work!");
// }

// //* 1. While loops and count of loop
// index = -1;
// // index = 0
// debugger;
// while (index < 3 && index > -2) {
//   console.log("While loops is work");
//   index = index + 1;
// }
// let index = -33;

// let count = 0;

// while (index <= 75) {
//   console.log(`index : ${index}`);
//   index = index + 1;
//   count++; // count++ =  count = count + 1;
//   //? count += 10; // count = count + 2
// }

// console.log(count);

//* 2. While loops + Condition statements
// debugger;
// let index = -2;
// let count = 0;
// while (index <= 1) {
//   if (index % 2 == 0 && index != 0) {
//     count++;
//   }
//   index++;
// }

// console.log(count);

//? Do while loops

// let x = 5;

// while (x < 3) {
//   console.log("While is work");
// }

// do {
//   console.log("Do While is work");
// } while (x < 3);

// do {
//   var userRole = prompt("Type your role : ");
// } while (userRole != "admin");

// var userRole = prompt("Type your role : ");
// while (userRole != "admin") {
//   userRole = prompt("Type your role : ");
// }
//? For Loops

// let index = 0;

// while (index <= 5) {
//   console.log(index);
//   index++;
// }

// for (let index = 0; index <= 5; index++) {
//   console.log(index);
// }
//? Break Continue
//* 1 - den 10-a qeder ededlerin cemi
// let sum = 0;
// for (let index = 1; index <= 10; index++) {
//   console.log(index);
//   sum = sum + index;
// }

// console.log(sum);

//* 1- dən 100-ə qədər cüt  ədədlərin cemini tapın
let sum = 0;
for (let index = 1; index < 100; index++) {
  if (index % 2 == 0) {
    sum += index;
  }
}

console.log(sum);
//* Ədədin rəqəmlərinin sayı
//* Ədədin rəqəmlərinin cəmi
//* Confirm user system
