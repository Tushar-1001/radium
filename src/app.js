// -------Module 1---------------

const obj1 = require('./logger')
console.log('--------------------------------------------')

obj1.logName('Tushar Saini')
obj1.welcomeExpo()
console.log(obj1.urlExpo)
console.log('--------------------------------------------')

// -------Module 2---------------

const obj2 = require('./util/helper')

obj2.printDateExpo()
obj2.printMonthExpo()
obj2.getBatchInfoExpo()
console.log('------------------------------------------')


// -------Module 3---------------

const obj3 = require('./validator/formatter')

obj3.trimExpo("  Tushar Saini   ")
obj3.lowerCaseExpo("TUSHAR")
obj3.upperCaseExpo("tushar")

console.log('-------------------------------------------')


const obj = require('underscore')

console.log(obj.first([1,2,3,5]))
console.log(obj.last([1,2,3,5]))
console.log(obj.rest(['mon','tue','wed','thurs','fri'],))

console.log('\n-----------------Chunk below--------------------------')

const _ = require('lodash');

console.log(_.chunk(['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec'], 3))

console.log('\n-------------Tail below-------------------------')


console.log(_.tail([ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]))

console.log('\n----------Union below----------------------------\n')


console.log(_.union([1,2,2],[2,2,3],[3,4],[4,5],[5,6,5,5,6]))

console.log('\n--------fromPairs below-------------------------------')


console.log(_.fromPairs([['Horror', "The shinning"], ['Drama', "Titanic"],["Thriller","Shutter Island"],["Fantasy","Pans Labyrinth"]]))

