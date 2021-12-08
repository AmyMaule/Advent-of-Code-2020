const inputTxt = "input.txt";
fetch(inputTxt)
.then(res => res.text())
.then(data => {
  let input = data.split("\r\n").map(line => line.replace(" contain", ",").split(", "));
  console.log(part1(input));  // 164
  console.log(part2(input));  // 7872
})

function part1(input) {
  let canHoldShinyGold = new Set();
  let bagsArr = input.map(line => line.map(bag => {
    if (!isNaN(bag.charAt(0))) {
      // turns "3 bright magenta bags" into "bright magenta"
      bag = bag.split(" ")
      bag = [bag[1], bag[2]].join(" ");
    } else {
      // for the parent bag, just remove "bags" from the end
      bag = bag.slice(0, -5);
    }
    return bag;
  }))

  bagsArr.forEach(bag => {
    // if one of the child bags is shiny gold, add its parent bag to the canHoldShinyGold set
    for (let i = 1; i < bag.length; i++) {
      if (bag[i] === "shiny gold") canHoldShinyGold.add(bag[0]);
    }
  })

  // use while true loop because we don't know how many times to loop
  while (true) {
    let setLength = canHoldShinyGold.size;
    bagsArr.forEach(bag => {
      for (let i = 1; i < bag.length; i++) {
        if (canHoldShinyGold.has(bag[i])) {
          canHoldShinyGold.add(bag[0])
        }
      }
    })
    // break out of while loop if the set length hasn't changed after another loop through
    if (canHoldShinyGold.size === setLength) break;
  }
  return canHoldShinyGold.size;
}

function part2(input) {
  let numBagsNeeded = 0;

  // end up with [ "pale cyan bags", "2 posh black bags", "4 wavy gold bags", "2 vibrant brown bags." ]
  let innerBagsNeeded = [];
  input.forEach(bags => {
    bags.forEach((bag, j) => {
      if (bag.match(/shiny gold/) && j === 0) {
        for (let k = 1; k < bags.length; k++) {
          innerBagsNeeded.push(bags[k]);
        }
      }
    })
  })

  while (innerBagsNeeded.length > 0) {
    // as long as the innerBagsNeeded[0] is not "no other bags.", add the first number to numBagsNeeded
    if (!innerBagsNeeded[0].match(/other/)) {
      numBagsNeeded += Number(innerBagsNeeded[0][0]);
      for (let i = 0; i < innerBagsNeeded[0][0]; i++) {
        // slice off the last 2 characters so it'll match whether it's bag or bags
        let currentBag = innerBagsNeeded[0].slice(2, -2);
        // check input for the parent bag of currentBag and push its children into innerBagsNeeded
        input.forEach(bags => {
          if (bags[0].match(currentBag)) {
            bags.forEach((bag, i) => {
              if (i !== 0) innerBagsNeeded.push(bag);
            })
          }
        })
      }
    }
    innerBagsNeeded.shift();
  }
return numBagsNeeded;
}