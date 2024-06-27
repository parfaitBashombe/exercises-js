// print even numbers from 0-n
function printEvenNumbers(number) {
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      console.log({ even: i });
    }
  }
}
printEvenNumbers(15);

//print table a multiplication
function multiplicationTable(number) {
  for (let i = 0; i <= 10; i++) {
    console.log({ multi: `${number} * ${i} = ` + i * number });
  }
}
multiplicationTable(3);

// length converter function km in miles
function convertKmInMiles(length) {
  let result = length * 0.621371;
  console.log(`${length}km is ${result}  miles`);
}
convertKmInMiles(3);

//calculate the sum of numbers in a array
let arrays = [1, 12, 4, 6, 15, 8];
let sum = 0;

for (let i = 0; i < arrays.length; i++) {
  sum += arrays[i];
}
console.log({ sum: sum });

//reverse an array
function reverseArray(arrayToreverse) {
  return arrayToreverse.toReversed();
}
console.log({ reversed: reverseArray(arrays) });

// sort an array from the lowest to higest
console.log({
  sort: arrays.toSorted(function (a, b) {
    return a - b;
  }),
});

//function that filters out negative numbers
let array2 = [1, 12, 4, -6, -15, 8];
function filterNegativeNumbers(filter) {
  const positiveArray = [];
  for (let i = 0; i < filter.length; i++) {
    // let index = filter.indexOf(array);?
    if (filter[i] > 0) {
      //   filter.splice(index, 1);
      positiveArray.push(filter[i]);
    }
  }
  console.log({ filter: positiveArray });
  return positiveArray;
}
filterNegativeNumbers(array2);

//remove the spaces found in a string
let word = "hello dear you";
let school = "dear student";
function removeSpaces(stringToFilter) {
  stringToFilter = stringToFilter.split(" ").join("");
  return stringToFilter;
}
console.log(word);
console.log({ removed: removeSpaces(word) });
console.log(school);
console.log({ removed: removeSpaces(school) });

// return true if a number is divisible by 10
function divisibleByTen(numbers) {
  numbers = "" + numbers;
  numbers.split("");
  if (numbers[numbers.length - 1] == 0) {
    return true;
  } else {
    return false;
  }
}
console.log({ divisibleByten: divisibleByTen(20) });

//function that finds the maximum number in array
let arrayNumbers = [1, 34, 54, 67, 90, 192];

function maximumNUmber(max) {
  return Math.max(...max);
}
console.log({ max: maximumNUmber(arrayNumbers) });

//check if a string is a palindrome
let checkWord = "mr owl ate my metal worm";

function palindromeCheck(palindrome) {
  let originalString = palindrome.split("");

  //changing
  const stringRevesed = [];
  for (let i = 0; i < palindrome.length; i++) {
    // let index = filter.indexOf(array);?
    if (palindrome[i] != " ") {
      //   filter.splice(index, 1);
      stringRevesed.push(palindrome[i]);
    }
  }
  console.log(originalString);
  console.log(stringRevesed);
  return stringRevesed;
}
console.log({ palindrome: palindromeCheck(checkWord) });

//palindrome
function isPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    }
    j--;
  }
  return true;
}
let str1 = "racecar";
console.log(isPalindrome(str1));
