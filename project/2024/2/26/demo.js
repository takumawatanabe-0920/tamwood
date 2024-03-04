// assignment1

// const person = {
//   firstName: 'John',
//   middleName: 'Michael',
//   lastName: 'Doe',
// }

// function DisplayFullName(params) {
//   let { firstName, middleName, lastName } = params
//   if (!!middleName) {
//     middleName = ` ${middleName} `
//   }
//   return `${firstName}${middleName || ' '}${lastName}`
// }

// console.log(DisplayFullName(person)) // John Doe

// assignment2

// function abc2(limit) {
//   let i = 0
//   while (i < limit) {
//     console.log(i)
//     i++
//   }
// }

// abc2(5)

// const list = ['fire', 'water', 'earth', 'metal', 'lava']

// function abc3(limit, list) {
//   let i = 0
//   while (i < limit) {
//     console.log(list[i])
//     i++
//   }
// }

// abc3(3, list)

// function abc() {
//   let limit = 35
//   for (let i = 25; i <= limit; i++) {
//     console.log(i)
//   }
// }

// abc()

// assignment3
// function abc() {
//   let limit = 35
//   for (let i = 25; i <= limit; i++) {
//     if (i % 2 === 1) {
//       console.log(i)
//     }
//   }
// }

// abc()

// const list = ['', '', '', '', '']
// function abc(number) {
//   list[number] = 'active'
//   return list
// }

// console.log(abc(3))

// assignment4
// const list = [2, 5]
// function abc(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   return sum
// }

// console.log(abc(list))

// assignment5
const list = [
  [1, 2], // 2
  [3, 4], // 12
  [5, 6, 7], // 210
]

function abc(list) {
  const result = []
  for (let i = 0; i < list.length; i++) {
    let sub = 1
    for (let j = 0; j < list[i].length; j++) {
      console.log({ number: list[i][j], element: list[i] })
      sub *= list[i][j]
    }
    console.log({ sub })
    result.push(sub)
  }

  return result
}

console.log(abc(list))
