let x = -13;

// if (x > 0) {
//   console.log("Condition is work!");
// }

// let userName = prompt("Type your user name : ");

// if (userName == "uniser") {
//   console.log("User is Uniser!");
// }

// if (x > 0) {
//   console.log("Number is positive");
// }else{
//     console.log("Number is negative");
// }

// let numberOne = 12;
// let numberTwo = 13;
// let message;

// if (numberOne + numberTwo > 20) {
//   message = "Kafi qiymet";
// } else {
//   message = "Kesr";
// }

// console.log(message);

// let age = +prompt("Your age");
// let hasDriverLicense;
// if (age >= 18) {
//   hasDriverLicense = true;
// } else {
//   hasDriverLicense = false;
// }

// hasDriverLicense = age >= 18;

// console.log(hasDriverLicense);

let point = 108;
let result;

// if (point < 51) {
//   result = "F";
// }

// if (point >= 51 && point < 61) {
//   result = "E";
// }

// if (point >= 61 && point < 71) {
//   result = "D";
// }

// if (point >= 71 && point < 81) {
//   result = "C";
// }

// if (point >= 81 && point < 91) {
//   result = "B";
// }

// if (point < 51) {
//   result = "F";
// } else if (point >= 51 && point < 61) {
//   result = "E";
// } else if (point >= 61 && point < 71) {
//   result = "D";
// } else if (point >= 71 && point < 81) {
//   result = "C";
// } else if (point >= 81 && point < 91) {
//   result = "B";
// } else {
//   result = "Qiymet yoxdur";
// }

// console.log(`Result = ${result}`);

//! PRACTICE
//1. Tempratura görə buzun əriyib əriməməsini tapın
//KISS - Kepp it simple stupid
// let temprature = 20;
// let startMelt = "";

// if (temprature >= 0) {
//   startMelt = "Buz eridi";
// } else {
//   startMelt = "Buz erimeyib";
// }

// console.log(startMelt);

//2. Heftenin ikinci günü kitab oxuyağımla bağlı , 5 ci günü filme baxacağımla bağlı , bazar günü kod yazacağımla bağlı bildiriş göndersin

// let dayOfWeek = 3;
// let notificationMessage = "";

// if (dayOfWeek == 2) {
//   notificationMessage = "Kitab oxuyacam";
// } else if (dayOfWeek == 5) {
//   notificationMessage = "Filme baxacam";
// } else if (dayOfWeek == 7) {
//   notificationMessage = "Kod yazacam";
// } else {
//   notificationMessage = "Yatacam";
// }

// console.log(notificationMessage);
//3. Istifadəçidən gələn ədədin həm 5-ə həmdə 3 bölünməsini tapın.

// if (number % 3 == 0 && number % 5 == 0) {
//   console.log("Bu eded hem 3-e hemde 5-e bolunur");
// } else {
//   console.log("Bolunmur");
// }

// Isitifadeciden alinan ededin 3 ve ya 8 bolunmesini yoxlayin eger beledirse ekrana bu eded 3 ve ya 8 e bolunur yazsin

// let userRole = "admin";

// let userAge = 22;

// if (userRole == "admin") {
//   console.log("Admin role");

//   if (userAge >= 18) {
//     console.log("You can have drive license");
//   } else {
//     console.log("You can't have drive license");
//   }

// } else {
//   console.log("You cant enter this system");
// }

// if (userRole == "admin") {
//   console.log("Admin is active");
// } else if (userRole == "hr") {
//   console.log("Hr is active");
// } else if (userRole == "user") {
//   console.log("User is active");
// } else {
//   console.log("System blocked!");
// }
let userRole = "user";

switch (userRole) {
  case "admin":
    console.log("Admin is active");
    break;
  case "hr":
    console.log("Hr is active");
    break;
  case "user":
    console.log("User is Active");
    break;
  default:
    console.log("System blocked!");
    break;
}

//  heftenin 2 , 4, 6 günü kursa gedirem
//  heftenin 1, 3, 5 günü idmana gedirem
//  heftenin bazar  günü evde qaliram
let dayOfWeek = +prompt("Day of Week");
// debugger;
if (dayOfWeek > 0 && dayOfWeek <= 7) {
  switch (dayOfWeek) {
    case 2:
    case 4:
    case 6:
      console.log("Kursa gedirem");
      break;

    case 1:
    case 3:
    case 5:
      console.log("Idmana gedirem");
      break;
    default:
      console.log("evde qaliram");
      break;
  }
} else {
  console.log("Heftenin bele bir günü yoxdur");
}

// TERNARY OPERATOR

let message = "";
let userAge = 11;

// if (userAge > 18) {
//   message = "Sen mashin sure bilersen";
// } else {
//   message = "Sen mashin sure bilmezsen!";
// }

message =
  userAge > 18 ? "Sen mashin sure bilersen" : "Sen mashin sure bilmezsen!";

console.log(message);
