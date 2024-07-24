// Task 1: Cubes of an array
function cubes(arr) {
  return arr.map(x => x ** 3);
}

console.log("Task 1: Cubes of an array");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output:", cubes([1, 2, 3, 4, 5])); // Output: [1, 8, 27, 64, 125]

// Task 2: Sum of an array
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

console.log("\nTask 2: Sum of an array");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output:", sum([1, 2, 3, 4, 5])); // Output: 15

// Task 3: Prime numbers in an array
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function primeNumbers(arr) {
  return arr.filter(x => isPrime(x));
}

console.log("\nTask 3: Prime numbers in an array");
console.log("Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
console.log("Output:", primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]

// Task 4: Average of squared odd numbers
function averageSquaredOdds(arr) {
  const squaredOdds = arr.filter(x => x % 2!== 0).map(x => x ** 2);
  return squaredOdds.reduce((a, b) => a + b, 0) / squaredOdds.length;
}

console.log("\nTask 4: Average of squared odd numbers");
console.log("Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
console.log("Output:", averageSquaredOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 35

// Task 5: Longest string in an array
function longestString(arr) {
  return arr.reduce((a, b) => a.length > b.length? a : b, '');
}

console.log("\nTask 5: Longest string in an array");
console.log("Input: ['hello', 'world', 'abc', 'defghijklmnopqrstuvwxyz']");
console.log("Output:", longestString(['hello', 'world', 'abc', 'defghijklmnopqrstuvwxyz'])); // Output: "defghijklmnopqrstuvwxyz"

// Task 6: Capitalize first letter of each word
function capitalizeWords(sentence) {
  return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log("\nTask 6: Capitalize first letter of each word");
console.log("Input: 'hello world this is a test'");
console.log("Output:", capitalizeWords('hello world this is a test')); // Output: "Hello World This Is A Test"

// Task 7: Students who passed the exam
function studentsWhoPassed(students) {
  return students.filter(student => student.score >= 60);
}

console.log("\nTask 7: Students who passed the exam");
console.log("Input: [{ name: 'Alice', score: 80 }, { name: 'Bob', score: 40 }, { name: 'Charlie', score: 70 }, { name: 'David', score: 90 }, { name: 'Eve', score: 50 }]");console.log("Output:", studentsWhoPassed([{ name: 'Alice', score: 80 }, { name: 'Bob', score: 40 }, { name: 'Charlie', score: 70 }, { name: 'David', score: 90 }, { name: 'Eve', score: 50 }])); // Output: [{ name: 'Alice', score: 80 }, { name: 'Charlie', score: 70 }, { name: 'David', score: 90 }]

// Task 8: Private Counter
function createInstanceCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

console.log("\nTask 8: Private Counter");
const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();
console.log("Output:", counter1(), counter1(), counter2(), counter2()); // Output: 1 2 1 2


// Task 10: Total Score
function totalScore(arr) {
  let total = 0;
  arr.forEach(obj => {
    total += obj.score;
  });
  return total;
}

console.log("\nTask 10: Total Score");
console.log("Input: [{ score:10 }, { score: 20 }, { score: 30 }, { score: 40 }, { score: 50 }]");
console.log("Output:", totalScore([{ score:10 }, { score: 20 }, { score: 30 }, { score: 40 }, { score: 50 }])); // Output: 150


// Task 9: Create a Promise-Based Calculator

console.log("task 9  output")

function calculator(a, b, operation) {
  return new Promise((resolve, reject) => {
    switch (operation) {
      case 'add':
        resolve(a + b);
        break;
      case 'subtract':
        resolve(a - b);
        break;
      case 'multiply':
        resolve(a * b);
        break;
      case 'divide':
        if (b === 0) {
          reject('Division by zero!');
        } else {
          resolve(a / b);
        }
        break;
      default:
        reject('Invalid operation!');
    }
  });
}

// Example usage:
calculator(2, 3, 'add')
  .then(result => console.log(result)) // Output: 5
  .catch(error => console.error(error));

calculator(4, 2, 'divide')
  .then(result => console.log(result)) // Output: 2
  .catch(error => console.error(error));

calculator(2, 0, 'divide')
  .then(result => console.log(result))
  .catch(error => console.error(error)); // Output: Division by zero!

calculator(2, 3, 'invalid')
  .then(result => console.log(result))
  .catch(error => console.error(error)); // Output: Invalid operation!