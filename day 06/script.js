const inputTxt = "input.txt";

fetch(inputTxt)
.then(res => res.text())
.then(data => {
  let input = data.split("\r\n\r\n");
  console.log(part1(input));  // 6551
  console.log(part2(input));  // 3358
})

function part1(input) {
  // the total number of individual characters will be added to sumPart1
  let sum = 0;
  // remove the \n from any declarations spanning multiple lines
  let sortedDeclarations = input.map(declaration => declaration.split("\r\n").join(""));
  sortedDeclarations
    .map(declaration => declaration.split("").sort())
    .forEach(declaration => {
      let tempSum = 0;
      declaration.forEach((char, i) => {
        // if the current character is not the same as the previous one, add it to the local sum variable
        if (char !== declaration[i-1]) tempSum++;
      })
      // at the end of each iteration, before sum is reset, add it to sumPart1
      sum += tempSum;
    });
    return sum;
}

function part2(input) {
  let sum = 0;
  input.forEach(declaration => {
    let groups = declaration.split("\r\n");
    // Only need the first declaration as every other one must contain the same characters
    let firstGroup = groups[0];
    // [...firstGroup] gives the same output as .split("")
    [...firstGroup].forEach(char => {
      sum += groups.every(targetChar => targetChar.indexOf(char) !== -1)
    });
  })
  return sum;
}