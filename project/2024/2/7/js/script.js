const x = 5
const y = 10

if (x == 5 && y >= 20) {
  document.getElementById('demo').innerHTML = 'Both conditions are true'
} else {
  document.getElementById('demo').innerHTML = 'One of the conditions is false'
}

const time = 10
if (time < 10) {
  greeting = 'Good morning'
} else if (time < 20) {
  greeting = 'Good day'
} else {
  greeting = 'Good evening'
}

console.log(greeting)

const age = 12
const voteable = age < 18 ? 'Too young' : 'Old enough'
console.log(voteable)

const name = null
const text = 'missing'
const result = name ?? text

document.getElementById('demo').innerHTML = `The name is ${result}`

let day
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday'
    break
  case 1:
    day = 'Monday'
    break
  case 2:
    day = 'Tuesday'
    break
  case 3:
    day = 'Wednesday'
    break
  case 4:
    day = 'Thursday'
    break
  case 5:
    day = 'Friday'
    break
  case 6:
    day = 'Saturday'
    break
  default:
    day = 'Unknown'
}

document.getElementById('demo').innerHTML = `Today is ${day}`
