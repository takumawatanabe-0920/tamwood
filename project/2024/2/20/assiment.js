// 1

var myName = 'takuma';

console.log(myName);

var myNeighbor = 'taku';

console.log(myNeighbor);

// 2
var number1 = 15 * 18;
var number2 = 926;

if (number1 > number2) {
  console.log('number1 is bigger than number2');
} else {
  console.log('number1 is smaller than number2');
}

var divide = 6 % 4;
console.log(divide);

// 3
var number = 6 % 5;
console.log(number);

// 4

var i = 0;
i++;
console.log(i);

// 5
var x = 123;
x += 1235;
console.log(x);

var fistName = 'Alan';
var lastName = 'Turing';

var text = 'H had a "double quoted " string.';
console.log(text);

// 6
console.log('FIrstLine\n\t\\SecondLine\nThirdLine\n\t\\FourthLine');

// 7
var p0 = '<p>I can do this</p>';
var p1 = '<p>I know I can</p>';

console.log(p0 + p1);

// 8
var myNeighborName = 'zoe';
var myNeighborText = `${myNeighborName} sits next to me.`;

var myNeighborName2 = 'Levi';
var myNeighborText2 = `${myNeighborName2} sits in front of me.`;

console.log(myNeighborText, myNeighborText2);

// 9
var text = 'I had 2 eggs.';
console.log(text[6]);

// 10
var x = 'tennis';
console.log(x[x.length - 1]);

// 11
const func1 = (userName, username2) => {
  return `${userName} likes to talk to ${username2}`;
};

console.log(func1('Takuma', 'Misato'));
