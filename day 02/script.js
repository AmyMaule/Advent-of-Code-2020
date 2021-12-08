let inputTxt = "input.txt";

fetch(inputTxt)
.then(res => res.text())
.then(data => {
  let input = data.split("\r\n").map(a => a.split(" "));
  console.log(part1(input)); // 477
  console.log(part2(input)); // 686
})

function part1(input) {
  for (let i = 0; i < input.length; i++) {
    // split "1-18" into ["1", "18"]
    input[i][0] = input[i][0].split("-");
    // parseInt to turn ["1", "18"] into [1, 18]
    input[i][0][0] = parseInt(input[i][0][0]);
    input[i][0][1] = parseInt(input[i][0][1]);
    // remove the colon after the middle letter
    input[i][1] = input[i][1][0];
  }
  let numValidPasswords = 0;

  input.map(password => {
    // password looks like [[1, 18], c, ccdczcvccvclcccvkccb]
    // split the password by character, filter it to only contain the target character, then rejoin it
    let singleCharPassword = password[2].split("").filter(char => char === password[1]).join("");
    // if its length is within the desired range in password[0], add 1 to numValidPasswords
    if (singleCharPassword.length >= password[0][0] && singleCharPassword.length <= password[0][1]) numValidPasswords++;
  })
  return numValidPasswords;
}

function part2(input) {
  let numValidPasswords = 0;
  input.map(password => {
    // firstPos and secondPos make the code more readable, minus 1 because the Toboggan Policies don't use zero indexing
    let firstPos = password[0][0] - 1;
    let secondPos = password[0][1] -1;
    if (password[2][firstPos] === password[1] && password[2][secondPos] !== password[1] || password[2][firstPos] !== password[1] && password[2][secondPos] === password[1]) numValidPasswords++;
  })
  return numValidPasswords;
}
