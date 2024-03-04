// assignment1

// function assignment1(follower) {
//   if (follower > 1000000) {
//     return 'You are probably famous'
//   } else if (follower > 10000) {
//     return 'You are getting there.'
//   }

//   return 'You are getting started.'
// }

// console.log(assignment1(1000000))
// console.log(assignment1(1000001))
// console.log(assignment1(10000))

// assignment2

// function assignment2(number) {
//   if (number < 5) {
//     return 'Tiny'
//   } else if (number < 10) {
//     return 'Small'
//   } else if (number < 15) {
//     return 'Medium'
//   } else if (number < 20) {
//     return 'Large'
//   } else {
//     return 'Huge'
//   }
// }

// console.log(assignment2(20))
// console.log(assignment2(19))
// console.log(assignment2(10))
// console.log(assignment2(5))
// console.log(assignment2(4))

// assignment3

// function golfScore(par, strokes) {
//   if (strokes === 1) {
//     return 'Hole-in-one!'
//   } else if (strokes <= par - 2) {
//     return 'Eagle'
//   } else if (strokes === par - 1) {
//     return 'Birdie'
//   } else if (strokes === par) {
//     return 'Par'
//   } else if (strokes === par + 1) {
//     return 'Bogey'
//   } else if (strokes === par + 2) {
//     return 'Double Bogey'
//   } else {
//     return 'Go Home!'
//   }
// }

// console.log(golfScore(1, 1))
// console.log(golfScore(4, 2))
// console.log(golfScore(3, 2))
// console.log(golfScore(3, 3))
// console.log(golfScore(3, 4))
// console.log(golfScore(3, 5))
// console.log(golfScore(3, 6))

// assignment4

// function adTest(a, b) {
//   if (a == 0 || b == 0) {
//   }

//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
// }

// assignment5
// let wiseRiver = {
//   Country: 'United States',
//   State: 'Montana',
//   county: 'Beaverhead',
// }

// console.log(wiseRiver.Country)
// console.log(wiseRiver.State)
// console.log(wiseRiver.county)
// console.table(wiseRiver)

// assignment6
// let wiseRiver = {
//   Country: 'United States',
//   State: 'Montana',
//   county: 'Beaverhead',
// }

// wiseRiver.Population = {
//   Total: 1000,
//   Density: 0.5,
// }

// console.log(wiseRiver.Population.Total, wiseRiver.Population.Density)

// assignment7
// const map = {
//   5: 'Tiny',
//   10: 'Small',
//   15: 'Medium',
//   20: 'Large',
//   21: 'Huge',
// }

// function assignment7(number) {
//   if (number < 5) {
//     return map[5]
//   } else if (number < 10) {
//     return map[10]
//   } else if (number < 15) {
//     return map[15]
//   } else if (number < 20) {
//     return map[20]
//   } else {
//     return map[21]
//   }
// }

// const map2 = {
//   Tiny: 5,
//   Small: 10,
//   Medium: 15,
//   Large: 20,
//   Huge: 21,
// }

// function assignment7(number) {
//   if (number < map2['Tiny']) {
//     return 'Tiny'
//   } else if (number < map2['Small']) {
//     return 'Small'
//   } else if (number < map2['Medium']) {
//     return 'Medium'
//   } else if (number < map2['Large']) {
//     return 'Large'
//   } else {
//     return 'Huge'
//   }
// }

// console.log(assignment7(20))
// console.log(assignment7(19))
// console.log(assignment7(14))
// console.log(assignment7(9))
// console.log(assignment7(4))

// assignment8

// const map = [
//   {
//     name: 'Song1',
//     artist: 'Artist1',
//   },
//   {
//     name: 'Song2',
//     artist: 'Artist2',
//   },
//   {
//     name: 'Song3',
//     artist: 'Artist3',
//   },
// ]

// console.table(map[2])

