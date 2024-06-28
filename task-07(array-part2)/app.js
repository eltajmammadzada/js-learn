//task1
let number = [
  1,
  6,
  34,
  5,
  1,
  -4,
  54,
  76,
  23,
  65,
  3,
  50,
  45,
  100,
  2346,
  -52,
  6545,
  0,
  45,
  22
];
const maxNumber = Math.max(...number);
console.log(maxNumber);
//task2
let employees = [
  ["Jaylee Macy", "marketing"],
  ["John Smith", "management"],
  ["Blossom Hartley", "design"],
  ["Austin Carpenter", "marketing"],
  ["Joan Knowles", "development"],
  ["Sally Nunez", "management"],
  ["Laurel Ward", "development"],
  ["Lark Simon", "marketing"],
  ["Jane Stone", "management"],
  ["Courtney Olson", "development"]
];
let dp = [];
for (const employee of employees) {
  if (employee[1] === "development") {
    dp.push(employee[0]);
  }
}
console.log(dp);
//task3
let array = [
  1,
  6,
  34,
  5,
  1,
  -4,
  54,
  76,
  23,
  65,
  3,
  50,
  45,
  100,
  2346,
  -52,
  6545,
  0,
  45,
  22
];

console.log(array.sort((a, b) => a - b));
//task4
function name(num) {
  let menfi = [];
  for (let number of num) {
    if (number < 0) {
      menfi.push(number);
    }
  }
  if (menfi.length === 0) {
    return "Massivdə mənfi ədədlər tapılmadı.";
  } else {
    return menfi;
  }
}
const number1 = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 5, -2];
console.log(name(number1), name(numbers2));
//task5
const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
function printWithDashes(name) {
  let das = "\n---------\n";
  console.log(das, name, das);
}
function printWithHearts(name) {
  let Hearts = "<3<3<3<3";
  console.log(Hearts, name, Hearts);
}
function printWithIndex(name, index) {
  console.log(`${index}. ${name}`);
}
names.forEach(printWithDashes);
names.forEach(printWithHearts);
names.forEach(printWithIndex);
//task6
function kebabToUpper(params) {
  return params.toLocaleUpperCase();
}
console.log(kebabToUpper("first-user"));
//task7
let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
const newArray = numbers.map((number, index, array) => {
  if (number < 0) {
    return Math.abs(number);
  } else {
    return number * 2;
  }
});
console.log(newArray);
//task8
let namesArray = [
  "Alice",
  "Bob",
  "Catherine",
  "David",
  "Eva",
  "Andrew",
  "Frank",
  "Anna",
  "George",
  "Alex"
];
let aArray = [];
let sd = namesArray.forEach(name => {
  if (name.charAt(0) === "A") {
    aArray.push(name);
  } else {
    console.log("A ile baslayan basqa ad tapilmadi");
  }
});
console.log(aArray);
//task9


//task10.2
let salary = [
  [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
  [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
  [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
  [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
  [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
  [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
  [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
  [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
  [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
  [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
];
function getMonthlySalary(p) {
  let month = [];
  for (const key of salary) {
    month.push(key[p]);
  }
  return month;
}
console.log(getMonthlySalary(11));

