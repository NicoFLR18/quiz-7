/**
 * This quiz is to test your knowledge of while-Loop.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead.
 */

/**
 * Question 1
 * Using a while loop, sum all numbers from 1 to 10 and store the result in a variable called sum.
 */
sum = 0;
num = 1;
while (num <= 10) {
    sum += num;
    num += 1;
}

console.log('[Pregunta #1]: ', sum);

/**
 * Question 2
 * Using a while loop, create a string of numbers from 5 to 15 separated by commas, e.g., "5,6,7,...,15".
 */

numbers = "";
n = 5;
while (n <= 15) {
    numbers += n;
    if (n < 15)
      numbers += ", ";
    n++;
}
console.log('[Pregunta #2]: ', numbers);
/**
 * Question 3
 * Print all even numbers between 10 and 30 using a while loop.
 */
let even = [];
num = 10;
while (num <= 30) {
  num++;
  if (num % 2 == 0) {
    even += num;
    if (num <= 29) {
      even += ", ";
    }
  }
}
console.log("[Pregunta #3]: ", even)
/**
 * Question 4
 * Determine the smallest power of 2 greater than 1000 using a while loop.
 */
let smallest = 1;

while (smallest <= 1000) {
  smallest *= 2;
}

console.log("[Pregunta #4]: ", smallest);

/**
 * Question 5
 * Reverse a string "HelloWorld" using a while loop.
 */
const str = "HelloWorld";
let strReverse = "";
let b = str.length - 1;

while (b > 0) {
  b--;
  strReverse += str[b];
}

console.log("[Pregunta #5]: ", strReverse);

/**
 * Question 6
 * Using a while loop, count how many times the letter 'a' appears in the string "banana".
 */
let fruit = "banana";
let i = 0;
let count = 0;

while (i < fruit.length) {
  if (fruit[i] === "a") {
    count++;
  }
  i++;
}

console.log("[Pregunta #6]: ", count);
/**
 * Question 7
 * Using a while loop, compute the factorial of 5.
 */
let fact1 = 1;
n = 0;
while (n < 5) {
  n++;
  fact1 = fact1 * n;
}

console.log("[Pregunta #7]: ", fact1);

/**
 * Question 8
 * Print all numbers from 100 to 80 in descending order using a while loop.
 */
let descending = "";
des = 101;
while (des > 80) {
  des--;
  descending += des;
  if (des > 80) {
    descending += ",";
  }
}
console.log("[Pregunta #8]: ", descending)
/**
 * Question 9
 * Using a while loop, find the greatest common divisor (GCD) of two numbers, 56 and 98.
 */
let common1 = 56;
let common2 = 98;

while (common1 !== common2) {
  if (common1 > common2) {
    common1 = common1 - common2;
  } else {
    common2 = common2 - common1;
  }
}
console.log("[Pregunta #9]: ", common1, common2);
/**
 * Question 10
 * Calculate the sum of all odd numbers between 1 and 50 using a while loop.
 */
let sm1 = 0;
let p = 1;

while (sm1 <= 50) {
  if (p % 2 !== 0) {
    sm1 += p;
  }
  p++;
}

console.log("[Pregunta #10]: ", sm1)