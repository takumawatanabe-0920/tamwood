const names = ['Ricardo', 'Tommy', 'Tom']

const allNamesStartWithT = names.every((name) => {
  return name[0].toLocaleLowerCase() === 't'
})

console.log({ allNamesStartWithT })

// assignment1
const array1 = ['red', 'blue', 'green']

const output = array1.reduce((acc, cul) => {
  return acc + cul.length
}, 0)

console.log({ output })
