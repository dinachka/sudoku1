// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

//function make array from little cube 3x3
// num is number of cube from 0 - 8
function arrFromCube(cube, num) {
  let newArr = [];
  if (num === 0) {
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        newArr.push(cube[i][j]);
      }
    }
  }
  if (num === 1) {
    for (let i = 0; i < 3; i += 1) {
      for (let j = 3; j < 6; j += 1) {
        newArr.push(cube[i][j]);
      }
    }
  }
  if (num === 2) {
    for (let i = 0; i < 3; i += 1) {
      for (let j = 6; j < 9; j += 1) {
        newArr.push(cube[i][j]);
      }
    }
  }
  if (num === 3) {
    for (let i = 3; i < 6; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        newArr.push(cube[i][j]);
      }
    }
  }
  if (num === 4) {
    for (let i = 3; i < 6; i += 1) {
      for (let j = 3; j < 6; j += 1) {
        newArr.push(cube[i][j]);
      }
    }
  }
  if (num === 5) {
    for (let i = 3; i < 6; i += 1) {
      for (let j = 6; j < 9; j += 1) {
        newArr.push(cube[i][j]);
      }
    }
  }
  if (num === 6) {
    for (let i = 6; i < 9; i += 1) {
      for (let j = 0; j < 1; j += 1) {
        newArr.push(cube[i][j]);
      }
    }
  }
  if (num === 7) {
    for (let i = 6; i < 9; i += 1) {
      for (let j = 3; j < 6; j += 1) {
        newArr.push(cube[i][j]);
      }
    }
  }
  if (num === 8) {
    for (let i = 6; i < 9; i += 1) {
      for (let j = 6; j < 9; j += 1) {
        newArr.push(cube[i][j]);
      }
    }
  }
  // console.log(newArr);
  return newArr;
}


//for check
// const cube = [
//   [1, 4, 5, 8, 9, 2, 6, 7, 3],
//   [8, 9, 3, 1, 7, 6, 4, 2, 5],
//   [2, 7, 6, 4, 3, 5, 8, 1, 9],
//   [5, 1, 9, 2, 4, 7, 3, 8, 6],
//   [7, 6, 2, 5, 8, 3, 1, 9, 4],
//   [3, 8, 4, 9, 6, 1, 7, 5, 2],
//   [9, 3, 7, 6, 1, 4, 2, 3, 8],
//   [4, 3, 8, 7, 2, 9, 5, 6, 1],
//   [6, 2, 1, 3, 5, 8, 9, 4, 7],
// ];

// console.log(arrFromCube(cube, 8));

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
