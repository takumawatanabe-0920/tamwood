function count(string) {
  const result = {}

  for (s of string) {
    if (result[s]) {
      result[s] += 1
    } else {
      result[s] = 1
    }
  }
  console.log({ result })
  return result
}

count('')
count('a')
count('ab')
count('aba')
count('ABC')

function findOdd(A) {
  const frequencyMap = A.reduce((acc, val) => {
    acc[val] = acc[val] ? acc[val] + 1 : 1
    return acc
  }, {})

  // Find and return the key (number) that has an odd frequency
  for (let key in frequencyMap) {
    if (frequencyMap[key] % 2 !== 0) {
      return parseInt(key, 10) // Ensure the key is returned as an integer
    }
  }
}

console.log({
  findOdd: findOdd([
    1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9, 9, 9, 9,
    9, 9,
  ]),
})

function createPhoneNumber(numbers) {
  const numberString = numbers.join('')
  return `(${numberString.slice(0, 3)}) ${numberString.slice(
    3,
    6
  )}-${numberString.slice(6)}`
}

console.log({
  createPhoneNumber: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
})
