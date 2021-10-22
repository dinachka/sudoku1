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
  console.log(puzzle);
  return puzzle;
}

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);

  let solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log("The board was solved!");
    console.log(sudoku.prettyBoard(solvedPuzzle));
  }
  else {
    console.log("The board wasn't solved :(");
  }
}

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
