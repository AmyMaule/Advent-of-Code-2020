const inputTxt = "input.txt";

fetch(inputTxt)
.then(res => res.text())
.then(data => {
  let input = data.split("\r\n").map(pass => pass.split(""));
  console.log(bothParts(input)); // 919 // 642
})

function bothParts(input) {
  let seatIds = [];
  input.map(pass => {
    let start = 0;
    let end = 127;
    for (let i = 0; i < 8; i++) {
      // round up halfway between start and end, minus the result from end
      if (pass[i] === "F") {
        end -= Math.ceil((end-start)/2);
      } else if (pass[i] === "B") {
        start += Math.ceil((end-start)/2);
      }
    }
    let left = 0;
    let right = 7;
    for (let i = 7; i < 11; i++) {
      if (pass[i] === "L") {
        right -= Math.ceil((right-left)/2);
      } else if (pass[i] === "R") {
        left += Math.ceil((right-left)/2);
      }
    }
    let seatId = (start * 8) + left;
    seatIds.push(seatId);
  })

  let mySeatId;
  seatIds.sort((a, b) => a - b);
  seatIds.forEach((seat, i) => {
    // check either whichever seat doesn't have a previous consecutive neighbour or whichever doesn't have a next consecutive neighbour
    if (seatIds[i-1] !== seat - 1 && seat !== Math.min(...seatIds)) mySeatId = seat - 1;
    // if (seatIds[i+1] !== seat + 1 && seat !== highestSeatId) mySeatId = seat + 1;
  })
  return [Math.max(...seatIds), mySeatId];
}
