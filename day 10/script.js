const inputTxt = "input.txt";

fetch(inputTxt)
.then(res => res.text())
.then(data => {
  let input = data.split("\r\n").map(adapter => Number(adapter));
  console.log(part1(input));  // 2232
  console.log(part2(input));  // 173625106649344
})

function part1(input) {
  let adapters = input.sort((a, b) => a-b);
  let oneJolt = 0;
  // threeJolt starts at 1 as the device's built-in adapter is always 3 higher than the highest adapter
  let threeJolt = 1;
  adapters.forEach((adapter, i) => {
    if (i !== 0) {
      if (adapter - adapters[i-1] === 1) oneJolt++;
      if (adapter - adapters[i-1] === 3) threeJolt++;
    // for i === 0, check if it is 1 or 3 jolts away from 0 (the charging outlet has an effective rating of 0 jolts)
    } else {
      if (adapter === 1) oneJolt++;
      if (adapter === 3) threeJolt++;
    }
  });
  return oneJolt * threeJolt;
}

function part2(input) {
   // .concat(0) to add the 0 adapter and sort by ascending
  let adapters = input.concat(0).sort((a, b) => a-b);

  // combinations starts with the value of 0 being 1 for the starting joltage, as there is only 1 combination possible from zero
  let combinations = {0: 1};

  // start at 1 to skip the first connection (already accounted for in combinations)
  for (let i = 1; i < adapters.length; i++){
    // The number of combinations for each joltage the same as the total of the number of combinations for the 3 previous joltages (like the fibonacci sequence) though as some numbers are skipped (there may be 1, 2, or 3 difference between each joltage), use || 0 so nothing returns undefined
    const minus1 = combinations[adapters[i]-1] || 0;
    const minus2 = combinations[adapters[i]-2] || 0;
    const minus3 = combinations[adapters[i]-3] || 0;

    // the total of combinations is saved as the value for the current adapter's key
    combinations[adapters[i]] = minus1 + minus2 + minus3;
  }

  // combinations[adapters[adapters.length-1]] is the value of the final key in the combinations object - the number of possible ways to use the adapters
  return combinations[adapters[adapters.length-1]];
}