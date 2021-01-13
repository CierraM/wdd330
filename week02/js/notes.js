//Expressions:
5 * 5

//Statements:
1;
!false;
let value = 1;

//Looping a Triangle:
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

let triangle = "#";
for (let i = 0; i < 7; i++){
    console.log(triangle);
    triangle += "#"
}

//Fizzbuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

for (let i = 0; i < 100; i++){
    if ((i + 1) % 3 === 0) {
        console.log("Fizz")
    }
    else if(((i + 1) % 5 === 0) && ((i + 1) % 3 !== 0)) {
        console.log("Buzz")
    }
    else{
        console.log(i + 1)
    }
}

//Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
let size = 8;
let grid = ""

for (let i = 0; i < size; i++){
    let line = ""
    if (i % 2 == 0){
        for (let j = 0; j < size/2; j++){
            line += " #"
        }
    }
    else{
        for (let j = 0; j < size/2; j++){
            line += "# "
        }
    }
    line += "\n"
    grid += line;
}

console.log(grid)

//Write a function min that takes two arguments and returns their minimum.

function min(a, b) {
    if (a < b){
        return a;
    }
    else {
        return b;
    }
}

