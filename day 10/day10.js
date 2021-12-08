// --- Day 10: Adapter Array ---

// Patched into the aircraft's data port, you discover weather forecasts of a massive tropical storm. Before you can figure out whether it will impact your vacation plans, however, your device suddenly turns off!

// Its battery is dead.

// You'll need to plug it in. There's only one problem: the charging outlet near your seat produces the wrong number of jolts. Always prepared, you make a list of all of the joltage adapters in your bag.

// Each of your joltage adapters is rated for a specific output joltage (your puzzle input). Any given adapter can take an input 1, 2, or 3 jolts lower than its rating and still produce its rated output joltage.

// In addition, your device has a built-in joltage adapter rated for 3 jolts higher than the highest-rated adapter in your bag. (If your adapter list were 3, 9, and 6, your device's built-in adapter would be rated for 12 jolts.)

// Treat the charging outlet near your seat as having an effective joltage rating of 0.

// Since you have some time to kill, you might as well test all of your adapters. Wouldn't want to get to your resort and realize you can't even charge your device!

// If you use every adapter in your bag at once, what is the distribution of joltage differences between the charging outlet, the adapters, and your device?

// For example, suppose that in your bag, you have adapters with the following joltage ratings:

// 16
// 10
// 15
// 5
// 1
// 11
// 7
// 19
// 6
// 12
// 4

// With these adapters, your device's built-in joltage adapter would be rated for 19 + 3 = 22 jolts, 3 higher than the highest-rated adapter.

// Because adapters can only connect to a source 1-3 jolts lower than its rating, in order to use every adapter, you'd need to choose them like this:

//     The charging outlet has an effective rating of 0 jolts, so the only adapters that could connect to it directly would need to have a joltage rating of 1, 2, or 3 jolts. Of these, only one you have is an adapter rated 1 jolt (difference of 1).
//     From your 1-jolt rated adapter, the only choice is your 4-jolt rated adapter (difference of 3).
//     From the 4-jolt rated adapter, the adapters rated 5, 6, or 7 are valid choices. However, in order to not skip any adapters, you have to pick the adapter rated 5 jolts (difference of 1).
//     Similarly, the next choices would need to be the adapter rated 6 and then the adapter rated 7 (with difference of 1 and 1).
//     The only adapter that works with the 7-jolt rated adapter is the one rated 10 jolts (difference of 3).
//     From 10, the choices are 11 or 12; choose 11 (difference of 1) and then 12 (difference of 1).
//     After 12, only valid adapter has a rating of 15 (difference of 3), then 16 (difference of 1), then 19 (difference of 3).
//     Finally, your device's built-in adapter is always 3 higher than the highest adapter, so its rating is 22 jolts (always a difference of 3).

// In this example, when using every adapter, there are 7 differences of 1 jolt and 5 differences of 3 jolts.

// Find a chain that uses all of your adapters to connect the charging outlet to your device's built-in adapter and count the joltage differences between the charging outlet, the adapters, and your device. What is the number of 1-jolt differences multiplied by the number of 3-jolt differences?

const input = `128
6
152
16
118
94
114
3
146
44
113
83
46
40
37
72
149
155
132
9
75
1
82
80
111
124
66
122
129
32
30
136
112
65
90
117
11
45
161
55
135
17
159
38
51
131
12
123
81
64
50
43
19
63
13
153
110
27
23
104
145
18
125
86
10
76
26
142
59
47
160
79
139
54
121
97
162
36
107
56
25
99
24
31
69
137
33
138
130
158
91
2
74
101
73
20
98
154
89
62
100
39`;

function part1() {
  let adapters = input.split("\n").map(adapter => Number(adapter)).sort((a, b) => a-b);
  let oneJolt = 0;
  // threeJolt starts at 1 as the device's built-in adapter is always 3 higher than the highest adapter
  let threeJolt = 1;
  adapters.forEach((adapter, i) => {
    if (i !== 0) {
      if (adapters[i] - adapters[i-1] === 1) oneJolt++;
      if (adapters[i] - adapters[i-1] === 3) threeJolt++;
    // for i === 0, check if it is 1 or 3 jolts away from 0 (the charging outlet has an effective rating of 0 jolts)
    } else {
      if (adapters[i] === 1) oneJolt++;
      if (adapters[i] === 3) threeJolt++;
    }
  })
  console.log(oneJolt, threeJolt);
  return oneJolt * threeJolt;
}
console.log(part1()); // 2232

function part2() {
   // .concat(0) to add the 0 adapter and sort by ascending
  let adapters = input.split("\n").map(adapter => Number(adapter)).concat(0).sort((a, b) => a-b);

  // combinations starts with the value of 0 being 1 for the starting joltage, as there is only 1 combination possible from zero
  let combinations = {0: 1};

  // start at 1 to skip the first connection (already accounted for in combinations)
  for(let i = 1; i < adapters.length; i++){
    // The number of combinations for each joltage the same as the total of the number of combinations for the 3 previous joltages (like the fibonacci sequence), though as some numbers are skipped (there may be 1, 2, or 3 difference between each joltage), use || 0 so nothing returns undefined
    const minus1 = combinations[adapters[i]-1] || 0;
    const minus2 = combinations[adapters[i]-2] || 0;
    const minus3 = combinations[adapters[i]-3] || 0;

    // the total of combinations is saved as the value for the current adapter's key
    combinations[adapters[i]] = minus1 + minus2 + minus3;
  }
  console.log(combinations);
  // combinations[adapters[adapters.length-1]] is the value of the final key in the combinations object - the number of possible ways to use the adapters
  return combinations[adapters[adapters.length-1]]
}
console.log(part2()); // 173625106649344