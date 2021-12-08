let inputTxt = "input.txt";

fetch(inputTxt)
.then(res => res.text())
.then(data => {
  // split by new line, then make each expense a number
  let input = data.split("\r\n").map(Number);
  console.log(part1(input));  // 987339
  console.log(part2(input)); // 259521570
})

function part1(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (i !== j && input[i] + input[j] === 2020) {
        return input[i] * input[j];
      }
    }
  }
}

function part2(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        // check that i, j, and k are all different numbers that sum to 2020
        if (i !== j && i !== k && input[i] + input[j] + input[k] === 2020) {
          return input[i] * input[j] * input[k];
        }
      }
    }
  }
}
