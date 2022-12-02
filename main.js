// Create an array of movies with at least three movies.
let movies = ['Scarface', 'The Godfather', 'Shrek']

let sports = ['futbol', 'golf', 'tennis']

// Using the array from above, store the first movie in a variable
let firstMovie = [0]

let firstSport = [1]

// Get the length of the original array and store it in a new variable
let arrLength = movies.length
console.log(arrLength)

let sportsLength = sports.length
console.log(sportsLength)

// Get the last element in that array and store it in a new variable. 
// What if your array was really large and you didn't know the last index? Would your solution still work?
// let lastElement = [2]
let lastElement = movies[movies.length -1]
let lastSportsElem = sports[sports.length -1]

let bestColors = ['green', 'blue', 'yellow', 'black']
let firstColor = [0]

for (let i = 0; i < bestColors.length;i++) {
    console.log( bestColors[i] )
}
bestColors.forEach((x,i)=> console.log(x,i))

// 2nd Time

// let movies = ['Red', 'Batman Returns', 'The Tuxedo']

// let firstMovie = [0]

// let arrLength = movies.length
// console.log(arrLength)

// let lastElement = movies[ movies.length - 1 ]

// let bestColors = ['green', 'blue', 'yellow', 'black']
// for(let i = 0; i < bestColors.length;i++) {
//     console.log(bestColors[i])
// }
// // Similar syntax
// bestColors.forEach((x,i,) => console.log(x,i,))

// let movieTitles = ['Harry Potter', 'The Shining ', 'Cars']
// for(let i = 0; i < movies.length;i++) {
//     document.querySelector('h2').innerText += movieTitles[i]
// }

// movieTitles.forEach((x,a) => console.log(x,a))

// let nums = [10,20,30]

// nums[0] = nums[0] +3
// nums[1] = nums[1] +3
// nums[2] = nums[2] +3

// nums.forEach((item, i) => {
//     nums[i] = item + 3
// })

// let sum = 0 

// for(let i = 0; i < nums.length; i++) {
//     sum = sum + nums [i]
// }
// console.log( sum / nums)

// let sum = 0

// for(let i = 0; i < nums.length;i++) {
//     sum = sum + nums [i]
// }
// console.log( sum / sum)

// let bulbasaurCandies = 16 - 5
// let caterpieCandiews = 7 - 1
// let weedleCandies = 7 - 1

// let totalCandies = bulbasaurCandies + caterpieCandiews + weedleCandies
// console.log(totalCandies)

// function farToCel(temperature) {
//     let convertedToCel = (temperature - 32) * 5/9
//     return convertedToCel
// }

// function canCharmanderBattle(currentTemp) {
//     let converted = farToCel(currentTemp)
//     if(converted > 0) {
//         console.log('charmander can battle')
//     }else{
//         console.log('Charmander cannot battle')
//     }
// }

// canCharmanderBattle(33)

// function undergroundPokemonLeague(partySize) {
//     for(let i = 1; i <= partySize;i++)
//     console.log('Picachu I chose you')
// }
// // undergroundPokemonLeague(6)
// undergroundPokemonLeague(['bulbasaur', 'caterpie', 'weedle'])