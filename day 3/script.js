const inputTxt = "input.txt";

fetch(inputTxt)
.then(res => res.text())
.then(data => {
  let input = data.split("\r\n");
  console.log(part1(input));  // 284
  console.log(part2(input));  // 3510149120
})


// checks whether the current target is a #, then adds one to the row number, and 3 to the countPosition on each iteration
function part1(input) {
  let numTrees = 0;
  let rowLength = input[0].length;
  let countPosition = 0;
  let row = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[row][countPosition] === "#") numTrees++;
    row++;
    if (countPosition + 3 < rowLength) {
      countPosition += 3;
      // if countPosition is greater than the length of the row, minus the length of the row and add 3 (so 28 becomes 0, 29 becomes 1, etc)
    } else countPosition = countPosition - rowLength + 3;
  }
  return numTrees;
}

function part2(input) {
  let totalTrees = 1;
  let rowLength = input[0].length;
  // The slopes represent Right 1, down 1, Right 3, down 1, etc
  let slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

  slopes.forEach(slope => {
    // reset numTrees for each slope as totalTrees is multiplied by numTrees at the end of each countTrees iteration
    numTrees = 0;
    let countPosition = 0;
    let row = 0;

    for (let i = 0; i <= input.length; i++) {
      // if row is greater than the number of rows, the toboggan has gone off the bottom
      if (row > input.length) {
        totalTrees *= numTrees;
        return;
      }
      if (i !== 0) {
        if (input[row][countPosition] === "#") {
          numTrees++;
        }
        row += slope[1];
        if (countPosition + slope[0] < rowLength) {
          countPosition += slope[0];
        } else {
          // if countPosition is greater than the length of the row, minus the length of the row and add a
          countPosition = countPosition - rowLength + slope[0];
        }
      }
      if (i === input.length) totalTrees *= numTrees;
    }
  });
  return totalTrees;
}