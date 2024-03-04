// let door = 'York';

// console.log(door[0]);

// console.log(door[door.length - 1]);

// // assignment1
// let numbers = [1, 2, 3];
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[0]);
// numbers[1] = 9000;
// console.log(numbers[1]);

// // assignment2
// let myArray = [
//   ['Jhon', 23],
//   ['cat', 2],
// ];
// myArray.push(['owl', 3]);
// console.log({ myArray });

// // assignment3
// let bottle = ['water', 'plastic', 'cap'];

// bottle.pop();
// bottle.push('drink');

// console.log({ bottle });

// // assignment4
// function abc() {
//   console.log('------------');
//   console.log('Hello there!');
//   console.log('------------');
// }

// abc();

// // assignment5
// function abc2(name) {
//   console.log('------------');
//   console.log(`Hello there, ${name}!`);
//   console.log('------------');
// }

// abc2('John');

// // assignment6

// let a = 'Chocolate';

// function abc3() {
//   console.log('------------');
//   console.log(`Hello there, ${a}!`);
//   console.log('------------');
// }

// abc3(a);

// assignment7
// let = total = 0;
// function counter(count) {
//   total += count;
// }

// counter(2);
// console.log(total);

// let testArr = [1, 2, 3, 4, 5];

// function nextInLine(arr, item) {
//   arr.push(item);
// }

// console.log({ testArr });
// nextInLine(testArr, 6);
// console.log({ testArr });

// function abc(flag) {
//   if (flag) {
//     return 'This code did run.';
//   }

//   return 'The parameter is actually false so the true code did not run.';
// }

// console.log(abc(true));
// console.log(abc(false));

// function compare2(a, b) {
//   return a == b;
// }

// console.log(compare2(1, 2));
// console.log(compare2(1, 1));

const history = [];

function addHistory(name) {
  history.push(name);
  console.log(`Logged ${name}`);
  if (name != 'admin' && name != 'Thomas') {
    console.log(`WARNING - INTRUDER. ${name}`);
  }
}

function removeHistory() {
  history.pop();
}

addHistory('Thomas');
addHistory('admin');
addHistory('Thomas');
addHistory('Rocky');

removeHistory();

console.log({ history });
