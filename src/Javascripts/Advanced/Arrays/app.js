const movies = {
  name: "Silence of The sheep",
  genre: ["Dram", "Dedective", "Grammy"],
  languages: ["Azerbaijan", "Russian", "English", "Turk"],
  subTitles: ["Azerbaijan", "Turk", "Arabic"],

  seasons: {
    firstSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
    secondSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
    lastSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
  },
  playWithLanguage(langIndex, subIndex) {
    // console.log(
    //   `Playing with ${this.languages[langIndex]} language and ${this.subTitles[subIndex]}`
    // );

    // console.log([this.languages[langIndex], this.subTitles[subIndex]]);
    return [this.languages[langIndex], this.subTitles[subIndex]]; //["Azerbaijan","Arabic"]
  },
  additionalInformation(
    { imdbPoint, realesDate } // { imdbPoint, realesDate } = movies2Info
  ) {
    console.log(`Release Date : ${realesDate} and imdb : ${imdbPoint}`);
  },
  addNewLanguage(langNames) {
    this.languages = [...langNames, ...this.languages];
  },
  addNewSeason(x) {
    this.seasons = { ...this.seasons, thirdSeason: x };
  },
};

const bookLibrary = {
  books: [
    "1984",
    "Crime and Punishment",
    "Red dragon",
    "u geni",
    "Romeo and Juliet",
    "Ferhad Shirin",
    "Her ve sulh",
  ],
  prices: [12, 15, 12, 25, 28, 21],
  genre: ["Dedective", "Romantic", "Classical"],
};

// let computers = ["Asus", "Hp", "Lenova"];

// //❌
// // let asus = computers[0];
// // let hp = computers[1];
// // console.log(asus);
// // console.log(hp);

// [x, y] = computers;

// console.log(x);
// console.log(y);

// // [dram, dedective] = movies.genre;

// [dram, , g] = movies.genre;

// console.log(dram, g);

// // let languages = movies.playWithLanguage(0, 1)[0];
// // let subTitles = movies.playWithLanguage(0, 1)[1];

// [languages, subTitles] = movies.playWithLanguage(0, 1); //["Azerbaijan","Türk"]

// console.log(languages, subTitles);
// console.clear();
// //* Object Destructing
// let person = {
//   firstName: "Bruce",
//   lastName: "Wayne",
//   age: 30,
// };

// // let fName = person.firstName;
// // let age = person.age;

// const { age, lastName, firstName } = person;

// // const { name, seasons } = movies;
// // const {
// //   name,
// //   seasons: {
// //     lastSeason: { episodeTwo },
// //   },
// // } = movies;

// const { name, seasons } = movies;

// console.log(name);
// // console.log(episodeTwo);
// console.log(seasons);

// console.log(age, firstName, lastName);

// const movies1Info = {
//   imdbPoint: 7.5,
//   realesDate: 2018,
// };
// const movies3Info = {
//   imdbPoint: 8.5,
//   realesDate: 2016,
// };
// const movies2Info = {
//   imdbPoint: 5.5,
//   realesDate: 2022,
// };

// movies.additionalInformation(movies3Info);

// // { imdbPoint, realesDate } = movies3Info
// // additionalInformation({ imdbPoint, realesDate } ) {
// //     console.log(`Release Date : ${realesDate} and imdb : ${imdbPoint}`);
// //   },
// //message = salam
// // const get = (message) => {
// //   console.log(message);
// // };

// // get("Salam");

// const positiveNumbers = [1, 2, 3];
// const negativeNumbers = [-1, -2, -3];

// const allNumbers = [...positiveNumbers, ...negativeNumbers];

// console.log(allNumbers);

// const newLangs = [
//   "Spain",
//   "German",
//   "French",
//   "Azerbaijan",
//   "Russian",
//   "Arabic",
//   "German",
// ];

// movies.addNewLanguage(newLangs);

// console.log(movies.languages);
// let person2 = { firstName: "Ali", age: 27 };

// person2 = {
//   ...person2,
//   lastName: "Gaddafi",
// };
// console.log(person2);

// const thirdSeason = {
//   episodeOne: "Episode - 1 ",
//   episodeTwo: "Episode - 2 ",
//   episodeThree: "Episode - 3",
// };
// movies.addNewSeason(thirdSeason);

// console.log(movies.seasons);

const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isBestselller: false,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isBestselller: false,
  },
  { title: "1984", author: "George Orwell", isBestselller: true },
  { title: "Animal Farms", author: "George Orwell", isBestselller: true },
];

const employes = [
  {
    id: 1,
    Department: "IT",
    firstName: "Bruce",
    lastName: "Wayne",
    salaryOfYear: 60000,
  },
  {
    id: 2,
    Department: "IT",
    firstName: "John",
    lastName: "Wick",
    salaryOfYear: 18000,
  },
  {
    id: 3,
    Department: "HR",
    firstName: "Walter",
    lastName: "White",
    salaryOfYear: 10000,
  },
  {
    id: 2,
    Department: "IT",
    firstName: "Jamie",
    lastName: "Lanniste",
    salaryOfYear: 70000,
  },
];

//? map -- Arrayin elementlerini deyisib geriye yeni bir array qaytarir
const numbers = [1, 2, 3, 4, 5];
//

// for (const element of numbers) {
//   multpTenNumber.push(element);
// }
const temperaturesInFahrenheit = [32, 68, 104, 212];

let multpTenNumber = numbers.map(function (x) {
  return x * -1;
});

// (f - 32) * (5 / 9);

const temperaturesInCelsius = temperaturesInFahrenheit.map(function (x) {
  return (x - 32) * (5 / 9);
});

console.log(multpTenNumber);
console.log(temperaturesInCelsius);

const salaries = employes.map(function (e) {
  return e.salaryOfYear;
});

const monthlySalary = employes.map(function (e) {
  return Math.round(e.salaryOfYear / 12);
});
console.log(monthlySalary);

const writers = books.map((b) => b.author);

console.log(writers);

const numbers2 = [-2021, 40, 0, -111, 20, 333];

const negativeNumbers = numbers2.filter(function (x) {
  return x < 0;
});

console.log(negativeNumbers);

const bestSellerBooks = books.filter(function (b) {
  return !b.isBestselller;
});

console.log(bestSellerBooks);

const developers = employes.filter((e) => e.Department == "IT");

console.log(developers);

const developerFullNames = employes
  .filter((e) => e.Department == "IT")
  .map((e) => e.firstName + " " + e.lastName);

console.log(developerFullNames);
