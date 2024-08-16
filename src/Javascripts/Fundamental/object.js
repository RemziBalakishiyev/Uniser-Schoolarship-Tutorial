//* Introducing to Object

const studentAyla = {
  firstName: "Ayla",
  lastName: "Aliyeva",
  age: 19,
  university: "UNEC",
  adreess: {
    country: "Azerbaijan",
    city: "Baku",
    strett: "Nizami st 6th paralel",
  },
  programmingLanguages: ["Javascript", "C#", "Python"],
};

console.log(studentAyla.adreess.country);

let newLang = "Assembly";

console.log(studentAyla.programmingLanguages.push(newLang));

for (const element of studentAyla.programmingLanguages) {
  console.log(element);
}
console.log(studentAyla.programmingLanguages);
// console.log(studentAyla.firstName);
// console.log(studentAyla["lastName"]);

//* Object in Array

const books = [
  {
    title: "1984",
    price: 30,
    countOfPage: 320,
    author: {
      firstName: "George",
      lastName: "Orwel",
    },
  },
  {
    title: "Martin Eden",
    price: 24,
    countOfPage: 300,
    author: {
      firstName: "Jack",
      lastName: "London",
    },
  },
  {
    title: "Kont of Monte Cristo",
    price: 20,
    countOfPage: 1200,
    author: {
      firstName: "Alexandr",
      lastName: "Duma",
    },
  },
];

console.log(books[1].author.firstName, books[1].author.lastName);

// let sum = 0;
// for (const element of books) {
//   sum += element.price;
// }

// console.log(sum);

//* Nested Object

//* Methods

// const getFullName = (fName, lName) => `${fName} ${lName}`;
const employee1878 = {
  firstName: "Bruce",
  lastName: "Wayne",
  salary: 60000,
  department: "IT",
  educationDetail: {
    degree: "B.Tech",
    university: "UNEC",
    graduatedYear: 2018,
  },
  showThis: function () {
    console.log(this);
    // this == employee1
  },
  getFullName: function () {
    return `Nahid: ${this.firstName} ${this.lastName}`;
  },
  calcNetSalary: function () {
    const tax = 0.2;
    return this.salary - this.salary * tax;
  },
  showMonthlySalary: function () {
    const netMonthlySalary = this.calcNetSalary() / 12;
    console.log(`My salary is ${netMonthlySalary}`);
  },
  setEmployeeDegree(exp) {
    if (exp > 0 && exp < 2) {
      this.workDegree = "Junior";
    } else if (exp >= 2 && exp < 5) {
      this.workDegree = "Middle";
    } else if (exp >= 5) {
      this.workDegree = "Senior";
    }
  },
};

employee1878.showThis();
console.log(employee1878.calcNetSalary());
employee1878.showMonthlySalary();

employee1878.firstName = "Thomas";

employee1878.dateOfBirth = "2005";

employee1878.setEmployeeDegree(5);
console.log(employee1878);
console.log(employee1878.getFullName());

//* Object.Methods
