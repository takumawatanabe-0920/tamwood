const names = ['Ricardo', 'Tommy', 'Tom']

const allNamesStartWithT = names.every((name) => {
  return name[0].toLocaleLowerCase() === 't'
})

console.log({ allNamesStartWithT })
