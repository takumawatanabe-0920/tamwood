// assignment1

// const myArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14],
// ]

// function abc(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j])
//       if (arr[i][j] === 5) {
//         arr[i][j] = 99
//       }
//     }
//   }
//   console.log({ result: arr })
// }

// abc(myArray)

// assignment2

// function abc(name) {
//   let result = ''
//   for (let i = 0; i < name.length; i++) {
//     if (name[i] === 'a') {
//       result += 'x'
//     } else {
//       result += name[i]
//     }
//   }
//   console.log({ name, result })
//   return result
// }

// abc('Backyard')

// assignment3
// let address = [
//   {
//     firstName: 'Thomas',
//     lastName: 'Ngo',
//     email: 'tngo@tamwoodonline.com',
//     likes: ['indie games', 'board games', 'TikTok'],
//   },
//   {
//     firstName: 'James',
//     lastName: 'Bond',
//     email: 'jbond@secret.com',
//     likes: ['high stealth missions', 'high risk', 'high reward'],
//   },
//   {
//     firstName: 'Takuma',
//     lastName: 'Watanabe',
//     email: 'takumaozk0920@gmail.com',
//     likes: ['Tennis', 'Soccer', 'Basketball'],
//   },
//   {
//     firstName: 'Levi',
//     lastName: 'Ackerman',
//     email: 'Levi@gmail.com',
//     likes: ['Tennis', 'Soccer', 'Basketball'],
//   },
// ]

// function lookup(name, key) {
//   for (let i = 0; i < address.length; i++) {
//     if (address[i].firstName === name) {
//       return address[i][key]
//     }
//   }
// }

// console.log(lookup('Thomas', 'email'))
// console.log(lookup('James', 'likes'))
// console.log(lookup('Takuma', 'firstName'))
// console.log(lookup('Levi', 'lastName'))

// assignment4

// function random() {
//   return Math.floor(Math.random() * 6) + 1
// }

// console.log(random())
// console.log(random())
// console.log(random())
// console.log(random())
// console.log(random())
// console.log(random())
// console.log(random())

// assignment5
const userInput = {
  value: 'abc',
}
const userInput2 = {
  value: '',
}
console.log(userInput.value ? 'In Use' : 'Not In Use')
console.log(userInput2.value ? 'In Use' : 'Not In Use')

// assignment6
function abc(number, animal) {
  return number === 1 ? `${number} ${animal}` : `${number} ${animal}s`
}
console.log(abc(1, 'dog'))
console.log(abc(2, 'cat'))
