//? Function Declaration OR Function Statement
// -> They get hoisted!
function greeting() {
  return "Hi everybody!";
}

//? Function Expression (anonymous functions)
let greetingInPortuguese = function (name) {
  return `Olá a todos! O meu nome é ${name} `;
};

//? Arrow Function!
const greetingInSpanish = (name) => {
  return `Hola a todos! Me llamo ${name}`;
};

// console.log(greetingInSpanish("Daniel"));

const student = {
  name: "Juan",
  height: 1.75,
  cohort: "WD",
  greeting: () => `Hola! My name is ${student.name}!`,
};

// console.log(student.greeting());

//! Array Methods => map(), filter() & reduce()
// -> They are methods only applied to arrays!
// -> They loop through every item in the array, and
// execute a specific piece of logic
//? -> THEY ALWAYS RETURN A NEW VALUE

const students = [
  {
    name: "DANIEL",
    height: 1.9,
    cohort: "WD",
  },
  {
    name: "   Anna           ",
    height: 1.6,
    cohort: "WD",
  },
  {
    name: "ChErYl",
    height: 1.66,
    cohort: "WD",
  },
  {
    name: "Juan",
    height: 1.75,
    cohort: "WD",
  },
  {
    name: "Chris",
    height: 1.8,
    cohort: "WD",
  },
  {
    name: "Marie",
    height: 1.55,
    cohort: "WD",
  },
  {
    name: "Amy",
    height: 1.67,
    cohort: "WD",
  },
  {
    name: "Noemi",
    height: 1.65,
    cohort: "WD",
  },
  {
    name: "Pablo",
    height: 1.79,
    cohort: "WD",
  },
  {
    name: "Martha",
    height: 1.98,
    cohort: "UI",
  },
  {
    name: "Petro Parmigiano",
    height: 1.8,
    cohort: "DT",
  },
];

//! map() time!
//? Problem: We want to normalize the names

const normalizedStudentNames = students.map((element, index, array) => {
  return element.name.toLowerCase().trim();
});

// console.log(normalizedStudentNames);

//! filter() time!
//? Problem: Our students array has spies! I want to filter just the WD ones!

const webDevStudents = students.filter((element, index, arr) => {
  return element.cohort === "WD";
});

// console.log(webDevStudents);

//! reduce() time!
//? Problem: I want the WD cohorts height average!

const totalWDCohortHeight = students.reduce((accumulator, el, i, arr) => {
  if (el.cohort === "WD") {
    return accumulator + el.height;
  } else {
    return accumulator;
  }
}, 0);

const WDCohortHeightAverage = totalWDCohortHeight / webDevStudents.length;

// Another way to write the above in just one variable:

const totalWDCohortHeightAverage =
  students.reduce((accumulator, el, i, arr) => {
    if (el.cohort === "WD") {
      return accumulator + el.height;
    } else {
      return accumulator;
    }
  }, 0) / webDevStudents.length;

//? Function that rounds any number to 2 decimals
function roundto2Decimals(num) {
  return Math.round(num * 100) / 100;
}

// logs the rounded WD cohort height average to the console
// console.log(roundto2Decimals(totalWDCohortHeightAverage));

//? sort() & reverse() time!
//! -> they mutate the array where they are being applied to!

// console.log(normalizedStudentNames);

//! sort() time!
//? Sort the students by alphabetical order!

const sortedAlphabetically = normalizedStudentNames.slice().sort((a, b) => {
  return a.localeCompare(b);
});

// console.log(sortedAlphabetically);

//! reverse() time!
//? Reverse the order Alphabetically

const sortedAlphReversed = sortedAlphabetically.slice().reverse();

// console.log(sortedAlphReversed);

//? forEach() time!
// -> It's also an array method
// -> It loops through each item in the array
// and executes a piece of logic you type!
// -> ALWAYS returns undefined - useful when the returned value
// is irrelevant to us

//? Problem: We want the students names capitalized!

const capitalizedNames = [];

normalizedStudentNames.forEach((student) => {
  const capitalizedName = student[0].toUpperCase() + student.slice(1);

  capitalizedNames.push(capitalizedName);
});

console.log(capitalizedNames);
