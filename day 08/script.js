const inputTxt = "input.txt";
fetch(inputTxt)
.then(res => res.text())
.then(data => {
  let input = data.split("\r\n").map(instruction => instruction.split(" "));
  console.log(part1(input)); // 1684
  console.log(part2(input)); // 2188
})

function part1(input) {
  let instructions = input.map(instruction => [instruction[0], Number(instruction[1])]);
  let accumulator = 0;
  for (let i = 0; i < instructions.length; i++) {
    let currentInstruction = instructions[i][0];
    // if instructions[i][0] is not equal to "nop", "jmp" or "acc", then it's an uppercase version of one of these, which means it has visited it before, so break out of the for loop and return the accumulator
    if (currentInstruction === "nop") {
      instructions[i][0] = currentInstruction.toUpperCase();
      continue;
    } else if (currentInstruction === "jmp") {
      instructions[i][0] = currentInstruction.toUpperCase();
      i += instructions[i][1] -1;
    } else if (currentInstruction === "acc") {
      instructions[i][0] = currentInstruction.toUpperCase();
      accumulator += instructions[i][1];
    } else {
      break;
    }
  }
  return accumulator;
}

function part2(input) {
  let instructions = input.map((instruct, i) => ({i: i, instruction: instruct[0], acc: Number(instruct[1]), visited: false}));
  let nopsAndJmps = [];
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i].instruction === "nop" || instructions[i].instruction === "jmp") {
      nopsAndJmps.push(i);
    }
  }
  let accumulator;

  // for each nop or jmp, swap an instruction and run the commands
  nopsAndJmps.map(nopJmp => {
    let currentAcc = 0;
    // return all visited from previous iterations to false
    instructions.map(instruction => instruction.visited = false);

    // swap one instruction at a time
    if (instructions[nopJmp].instruction !== "acc") {
      instructions[nopJmp].instruction = instructions[nopJmp].instruction === "nop" ? "jmp" : "nop";
    }

    // run through each command as in part 1
    for (let i = 0; i <= instructions.length; i++) {
      // if i is equal to instructions.length, it means the program ran all the way to the end plus one, so update the global accumulator with the currentAcc value and break out of the loop
      if (i === instructions.length) {
        accumulator = currentAcc;
        break;
      }
      // if an instruction has been previously visited, break out of the loop, then mark the current instruction as visited
      if (instructions[i].visited === true) break;
      instructions[i].visited = true;

      // if the current instruction is jmp, then i += the jmp value, minus one because each iteration increases i by 1 anyway
      if (instructions[i].instruction === "jmp") {
        i += instructions[i].acc - 1;
      } else if (instructions[i].instruction === "acc") {
        currentAcc += instructions[i].acc;
      }
    }
    // swap back the nop to jmp or jmp to nop so it is the correct way round for the next swap
    if (instructions[nopJmp].instruction !== "acc") {
      instructions[nopJmp].instruction = instructions[nopJmp].instruction === "nop" ? "jmp" : "nop";
    }
  });
  return accumulator;
}