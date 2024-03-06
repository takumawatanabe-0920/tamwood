// // assignment: 1
// const numbers = [100, 200, 300, 425, 544, 777]

// const result = numbers.filter((number) => {
//   return number === 425
// })

// console.log(result)

// // assignment: 2
// const tags = ['p', 'div', 'span', 'input']

// const result2 = tags.filter((tag) => {
//   return ['p', 'div', 'span'].includes(tag)
// })

// console.log(result2)

// assignment: 3
// const abc1 = (personName, farewell = 'Hello') => {
//   return `${farewell} ${personName}!`
// }

// console.log(abc1('John', 'Goodbye'))

const abc2 = (...args) => {
  return args.reduce((acc, arg) => {
    return acc + `${arg}\n`
  }, '')
}

console.log(abc2('a', 'b', 'c'))
