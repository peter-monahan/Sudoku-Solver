const {SudokuSolver} = require("./classes");
const {sudokuSolverInputs, expectedOutputs} = require("./test-cases");

let passed = 0;
let failed = 0;

sudokuSolverInputs.forEach((input, idx) => {
  const solver = new SudokuSolver(input);
  const solution = solver.solve();

  if(solution === expectedOutputs[idx]) {
    console.log("================ Passed");
    passed++;
  } else {
    console.log("================ Failed");
    console.error("Input: ", input);
    console.error("Output: ", solution);
    console.error("Expeected Output: ", expectedOutputs[idx]);
    failed++;
  }
});

console.log(`Passed: ${passed}, Failed: ${failed}`);
