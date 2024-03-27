function pigIt(str) {
  return str
    .split(' ')
    .map((word) => {
      if (/^[A-Za-z]+$/.test(word)) {
        return word.substr(1) + word[0] + 'ay'
      } else {
        return word
      }
    })
    .join(' ')
}
