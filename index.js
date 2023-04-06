"use strict";

// CELSIUS -> FAHREN
const converter = (celsius) => celsius * 1.8 + 32;
console.log(converter(-30));

// REVERSE A STRING
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello"));

// FACTORIALIZE
const factorialize = (num) => {
  let numFact = num;
  if (num === 0) return 1;
  for (let i = 1; i < num; i++) {
    numFact *= i;
  }
  return numFact;
};

console.log(factorialize(5));

// FIND THE LONGEST WORD
const findLongestWordLength = (str) => {
  let arrOfStr = str.split(" ");
  let longest = arrOfStr[0].length;
  arrOfStr.map((el) => el.length >= longest && (longest = el.length));
  return longest;
};

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// LARGEST OF FOUR
let matrix = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

const largestOfFour = (arr) => arr.map((arrNum) => Math.max(...arrNum));
console.log(largestOfFour(matrix));

// CONFIRM ENDING
// *
const confirmEnding = (str, target) => str.slice(-target.length) === target;

console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Abstraction", "action"));

// REPEAT A STRING
const repeatStringNumTimes = (str, num) => {
  let newStr = "";
  let count = num;
  if (num < 0) return newStr;
  while (count) (newStr = newStr.concat(str)) && count--;
  return newStr;
};

console.log(repeatStringNumTimes("abc", 3));

// TRUNCATE STRING
const truncateString = (str, num) =>
  str.length > num ? `${str.substring(0, num)}...` : str;

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));

// FINDERS KEEPERS
const findElement = (arr, func) => {
  let myArr = arr.map((el) => (func(el) === true ? el : undefined));
  return myArr.filter((el) => el !== undefined)[0];
};

console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);

// BOO WHO
const booWho = (bool) => typeof bool === "boolean";
console.log(booWho(null));
console.log(booWho("test"));
console.log(booWho(true));

// TITLE CASE A SENTENCE
const titleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((el) => el.replace(el[0], el[0].toUpperCase()))
    .join(" ");

console.log(titleCase("I'm a little tea pot"));

// FRANKENSPLICE: SLICE AND SPLICE (sec arr must remain same)
const frankenSplice = (arr1, arr2, n) => {
  let myArr = [...arr2];
  arr1.forEach((el, index) => {
    return myArr.splice(n + index, 0, el);
  });
  return myArr;
};
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// FALSY BOUNCE
const bouncer = (arr) => arr.filter((el) => el && el);
console.log(bouncer([false, null, 0, NaN, undefined, "", "ate", 7]));

// WHERE DO I BELONG
const getIndexToIns = (arr, num) =>
  arr
    .sort()
    .map((el) => num > el && num)
    .filter((el) => typeof el === "number").length;

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([], 1));

// MUTATIONS
const mutation = (arr) =>
  arr[1]
    .split("")
    .map((el) =>
      arr[0].toLowerCase().includes(el.toLowerCase()) ? true : false
    )
    .includes(false)
    ? false
    : true;

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));

//  CHUNKY MONKEY
const chunkArrayInGroups = (arr, size) => {
  let newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

module.exports = {
  converter,
  factorialize,
  chunkArrayInGroups,
  mutation,
  getIndexToIns,
  bouncer,
  frankenSplice,
  titleCase,
  booWho,
  findElement,
  truncateString,
  repeatStringNumTimes,
  confirmEnding,
  largestOfFour,
  findLongestWordLength,
  factorialize,
  reverseString,
  largestOfFour,
};
