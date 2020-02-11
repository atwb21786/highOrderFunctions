'use strict';

function repeat(callback, n) {
  for( let i = 0; i < n; i++ ) {
    return callback(n);
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn) {
  // TASK: Define your function here
  const newArray = [];
  for( let i = 0; i < arr.length; i++ ) {
    if(fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

const newNames = myNames.filter( item => item.charAt(0) === 'R');
console.log(newNames);


function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function (location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };

}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
rocksWarning("Lambert and Sunnydale");
rocksWarning("Franklin and Cedarlawn");

const turtle = [ [0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2] ];

const turtleMoves = turtle.filter( item => { return item[0] + item[1] } );
console.log(turtleMoves);