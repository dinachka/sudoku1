const fs = require('fs');
const { REPL_MODE_SLOPPY } = require('repl');
const sudoku = require('./sudoku');

const content = fs.readFileSync(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);
function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split('\n')[puzzleNumber];
  // console.log(puzzle);
  return puzzle;
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);

  let solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    // console.log("The board was solved!");
    // console.log(sudoku.prettyBoard(solvedPuzzle));
  }
  else {
    // console.log("The board wasn't solved :(");
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////

// Function create matrix (9X9 numbers), when null is empty cell

let arrLines = sudokuParse(content)
function lines2(arrLines) {
  let newArr = [];
  let newArr2 = [];
  let arr = arrLines.split("")
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
    if (newArr.length === 9) {
      newArr2.push(newArr)
      newArr = []
    }
  }
  let res = newArr2.map((el) => el.map((el) => +el).map((el) => {
    if (isNaN(el)) {
      return el = 0
    }
    return el
  }))
  return res
}
console.table(lines2(arrLines))

//функция, возвращает массив колонки 

function getColomn(array, colomn) {
  let resultArray = []

  for (let i = 0; i < array.length; i++) {
    resultArray.push(array[i][colomn])
  }

  return resultArray;
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
  return newArr;
}

let cube = lines2(arrLines);
function fillSudoku(cube) {
  const arr_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (cube[i][j] === 0) {
        let arr_cube = arrFromCube(cube, i);
        let arr_col = getColomn(cube, j);
        let arr_str = cube[i];
        for (let k = 0; k < arr_numbers.length; k++) {
          if (!arr_cube.includes(arr_numbers[k]) && !arr_col.includes(arr_numbers[k]) && !arr_str.includes(arr_numbers[k])) {
            cube[i][j] = arr_numbers[k];
            break;
          }
        }

      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      if (cube[i][j] === 0) {
        let arr_cube = arrFromCube(cube, 1);
        let arr_col = getColomn(cube, j);
        let arr_str = cube[i];
        for (let k = 0; k < arr_numbers.length; k++) {
          if (!arr_cube.includes(arr_numbers[k]) && !arr_col.includes(arr_numbers[k]) && !arr_str.includes(arr_numbers[k])) {
            cube[i][j] = arr_numbers[k];
            break;
          }
        }

      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
      if (cube[i][j] === 0) {
        let arr_cube = arrFromCube(cube, 2);
        let arr_col = getColomn(cube, j);
        let arr_str = cube[i];
        for (let k = 0; k < arr_numbers.length; k++) {
          if (!arr_cube.includes(arr_numbers[k]) && !arr_col.includes(arr_numbers[k]) && !arr_str.includes(arr_numbers[k])) {
            cube[i][j] = arr_numbers[k];
            break;
          }
        }

      }
    }
  }

  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      if (cube[i][j] === 0) {
        let arr_cube = arrFromCube(cube, 3);
        let arr_col = getColomn(cube, j);
        let arr_str = cube[i];
        for (let k = 0; k < arr_numbers.length; k++) {
          if (!arr_cube.includes(arr_numbers[k]) && !arr_col.includes(arr_numbers[k]) && !arr_str.includes(arr_numbers[k])) {
            cube[i][j] = arr_numbers[k];
            break;
          }
        }

      }
    }
  }

  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      if (cube[i][j] === 0) {
        let arr_cube = arrFromCube(cube, 4);
        let arr_col = getColomn(cube, j);
        let arr_str = cube[i];
        for (let k = 0; k < arr_numbers.length; k++) {
          if (!arr_cube.includes(arr_numbers[k]) && !arr_col.includes(arr_numbers[k]) && !arr_str.includes(arr_numbers[k])) {
            cube[i][j] = arr_numbers[k];
            break;
          }
        }

      }
    }
  }

  for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
      if (cube[i][j] === 0) {
        let arr_cube = arrFromCube(cube, 5);
        let arr_col = getColomn(cube, j);
        let arr_str = cube[i];
        for (let k = 0; k < arr_numbers.length; k++) {
          if (!arr_cube.includes(arr_numbers[k]) && !arr_col.includes(arr_numbers[k]) && !arr_str.includes(arr_numbers[k])) {
            cube[i][j] = arr_numbers[k];
            break;
          }
        }

      }
    }
  }

  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      if (cube[i][j] === 0) {
        let arr_cube = arrFromCube(cube, 6);
        let arr_col = getColomn(cube, j);
        let arr_str = cube[i];
        for (let k = 0; k < arr_numbers.length; k++) {
          if (!arr_cube.includes(arr_numbers[k]) && !arr_col.includes(arr_numbers[k]) && !arr_str.includes(arr_numbers[k])) {
            cube[i][j] = arr_numbers[k];
            break;
          }
        }

      }
    }
  }

  for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
      if (cube[i][j] === 0) {
        let arr_cube = arrFromCube(cube, 7);
        let arr_col = getColomn(cube, j);
        let arr_str = cube[i];
        for (let k = 0; k < arr_numbers.length; k++) {
          if (!arr_cube.includes(arr_numbers[k]) && !arr_col.includes(arr_numbers[k]) && !arr_str.includes(arr_numbers[k])) {
            cube[i][j] = arr_numbers[k];
            break;
          }
        }

      }
    }
  }

  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      if (cube[i][j] === 0) {
        let arr_cube = arrFromCube(cube, 8);
        let arr_col = getColomn(cube, j);
        let arr_str = cube[i];
        for (let k = 0; k < arr_numbers.length; k++) {
          if (!arr_cube.includes(arr_numbers[k]) && !arr_col.includes(arr_numbers[k]) && !arr_str.includes(arr_numbers[k])) {
            cube[i][j] = arr_numbers[k];
            break;
          }
        }

      }
    }
  }

  return cube;

}
console.table(fillSudoku(cube));

/////////////////////////////////////////////////////////////////
// Reads file and sends data from it to the readAndSolve function.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);

