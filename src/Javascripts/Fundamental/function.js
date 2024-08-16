// //* Functions

// // console.log("Hello");

// function sayHi() {
//   console.log("Hello");
// }

// // sayHi();
// // sayHi();
// // sayHi();
// // sayHi();
// // sayHi();
// // sayHi();
// // sayHi();

// //* Parameters in function

// // function logMessage(message) {
// //   //let message;
// //   console.log(message);
// // }

// // logMessage("Remzi");
// // logMessage("Kenan");

// function getAgeInformation(age) {
//   if (age > 0 && age < 250) {
//     if (age > 0 && age <= 6) {
//       console.log("You are baby!");
//     } else if (age > 6 && age < 15) {
//       console.log("You are child");
//     } else if (age > 15 && age < 30) {
//       console.log("You are young");
//     } else {
//       console.log("You are adult");
//     }
//   } else {
//     console.log("Pls write correct age");
//   }
// }

// // getAgeInformation(12);
// // getAgeInformation(19);

// const ages = [12, 16, 19, 3, 12];

// for (const element of ages) {
//   getAgeInformation(element);
// }

// //? DRY = Don't repeat yourself

// // let randomData = "test";
// // function getRandomData() {
// //   return "Hello";
// // }

// // function getRemaind(number, dividedNumber) {
// //   return number % dividedNumber;
// // }
// // function getRemaind2(number, dividedNumber) {
// //   console.log(number % dividedNumber);
// // }

// // console.log(getRemaind(11, 4));

// // let number = 18;

// // if (getRemaind(number, 2) != 0) {
// //   console.log("Eded tekdir");
// // } else {
// //   console.log("cütdür");
// // }

// // console.log(getRandomData());

// // 1-den 40 - qeder ededlerin cemini tapin ve eded 500-den böyükdürsə böyük
// // 3-den 13 - qeder ededlerin cemini tapin ve eded 100-den böyükdürsə 10  böl

// function getSumOfNumberOrder(firstNumber = 1, endNumber = 10) {
//   let sum = 0;
//   for (let index = firstNumber; index < endNumber; index++) {
//     sum += index;
//   }
//   return sum;
// }

// let sum = getSumOfNumberOrder(1, 40);
// console.log(sum / 10);
// if (sum > 500) {
//   console.log("Eded böyükdür");
// } else {
//   console.log("Eded böyük deyil");
// }

// let sum2 = getSumOfNumberOrder(3, 13);
// console.log(sum2 / 10);

// console.log(getSumOfNumberOrder());

// //* Void and Returned functions
// //! Function çağırdıqdan sonra həmin function üzərində proqmatik əməliyyatlar edə biləcəyimi functionlar returned function adlanır
// //* Function expression and Declaration

// getData();
// getData();
// getData();
// getData();

// // getData2();
// // getData2();
// //? FUNCTION DECLARATION
// function getData() {
//   console.log("Data is here");
// }

// //? FUNCTION EXPRESSION
// const getData2 = function () {
//   console.log("Data is here - 2");
// };

// getData();
// getData2();

// //* Arrow function

// const sayMessage = function () {
//   console.log("Hello, world!");
// };

// const sayMessage2 = () => {
//   console.log("Hi");
// };

// // const sumOfTwoNumbers = function (a, b) {
// //   return a + b;
// // };

// const sumOfTwoNumbers = (a, b) => a + b;
// console.log(sumOfTwoNumbers(12, 13));

// TODO -- Practice
//? Kalkulyator yarad

// const sum = (a, b) => a + b;
// const subs = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const divide = (a, b) => a / b;

// const calcOperation = function (a, b, operator) {
//   switch (operator) {
//     case "+":
//       console.log(sum(a, b));
//       break;
//     case "-":
//       console.log(subs(a, b));
//       break;
//     case "/":
//       console.log(divide(a, b));
//       break;

//     case "*":
//       console.log(mult(a, b));
//       break;

//     default:
//       console.log("Bele bir emeliyyat yoxdur");
//       break;
//   }
// };

// let numberOne = +prompt("Number 1: ");
// let numberTwo = +prompt("Number 2: ");
// let opr = prompt("Operation (+,-,/,*) : ");

// calcOperation(numberOne, numberTwo, opr);

//? Saygac yarat

let count = 0;
const counter = function () {
  count += 1;
};
counter();
counter();
counter();
counter();
counter();
counter();

console.log(count);

//? Array-in içinə  verilmiş ədədlərin iki qatını verən yeni bir array qayataran  function yaz

const twiceArrayElement = (arr) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    newArr.push(arr[index] * 2);
  }

  return newArr;
};

// let numbers = [2, 20, 4, 90, 100, 2, 1];

/*
deleteElement(numbers,100)
*/
let numbers = [2, 20, 4, 90, 100, 2, 1];
console.log(numbers);

console.log(twiceArrayElement(numbers));

//? Full Name göstərən function yaz

let getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
//? Array içərisindən elementi silən function yaz
const deleteElement = (arr, item) => {
  let index = arr.indexOf(item);
  arr.splice(index, 1);
};

deleteElement(numbers, 90);
deleteElement(numbers, 100);
console.log(numbers);

let languages = ["Javascript", "C#", "C++"];

deleteElement(languages, "C#");
console.log(languages);
//? Random ədəd verən function yaz

const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(Math.random());
