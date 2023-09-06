// Solver classes

class SudokuSolver {
  constructor(sudoku) {

    this.sudoMatrix = sudoku;
    this.rows = [];
    this.cols = [];
    this.blocks = [[],[],[]];
    this.squares = [[],[],[],[],[],[],[],[],[]];

    for (let i = 0; i < this.sudoMatrix.length; i++) {
      this.rows.push(new SudokuRow(this, i));
      this.cols.push(new SudokuCol(this, i));
    }

    for (let i = 0; i < this.blocks.length; i++) {
      const blockRow = this.blocks[i];
      for (let j = 0; j < 3; j++) {
        blockRow.push(new SudokuBlock(this, i, j));
      }
    }

    for (let i = 0; i < this.squares.length; i++) {
      const row = this.squares[i];
      for (let j = 0; j < this.sudoMatrix.length; j++) {
        row.push(new SudokuSquare(this, i, j));
      }
    }
  }

  solve() {

  }
}

class SudokuRow {
  constructor(solver, row) {

  }
}

class SudokuCol {
  constructor(solver, col) {

  }
}

class SudokuBlock {
  constructor(solver, row, col) {

  }
}

class SudokuSquare {
  constructor(solver, row, col) {

  }
}
