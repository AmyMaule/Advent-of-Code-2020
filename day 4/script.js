const inputTxt = "input.txt";

fetch(inputTxt)
.then(res => res.text())
.then(data => {
  // split the data into passports at double new lines, then use regex to split up each passport's properties by splitting at new lines and spaces
  let input = data
              .split("\r\n\r\n")
              .map(passport => passport.split(/[\n\s]/));
  console.log(part1(input)); // 226
  console.log(part2(input)); // 160
})

function part1(input) {
  let numValidPassports = 0;
  input.map(passport => {
    if (passport.length >= 7) {
      let passportFields = 0;
      passport.forEach(field => {
        if (field.startsWith("byr") || field.startsWith("iyr") || field.startsWith("eyr") || field.startsWith("hgt") || field.startsWith("hcl") || field.startsWith("ecl") || field.startsWith("pid")) passportFields++;
      })
      if (passportFields === 7) numValidPassports++;
    }
  })
  return numValidPassports;
}

function part2(input) {
  let numValidPassports = 0;
  input.map(passport => {
    let passportFields = 0;
    if (passport.length >= 7) {
      passport.map(field => {
        if (field.startsWith("byr") && field.slice(4) >= 1920 && field.slice(4) <= 2002) passportFields++;
        if (field.startsWith("iyr") && field.slice(4) >= 2010 && field.slice(4) <= 2020) passportFields++;
        if (field.startsWith("eyr") && field.slice(4) >= 2020 && field.slice(4) <= 2030) passportFields++;
        if (field.startsWith("hgt")) {
          let unit = field.slice(-2);
          if (unit === "cm" && field.slice(4, -2) >= 150 && field.slice(4, -2) <= 193) passportFields++;
          if (unit === "in" && field.slice(4, -2) >= 59 && field.slice(4, -2) <= 76) passportFields++;
        }
        // use regex to check whether field matches hcl:# plus exactly 6 lowercase letters or numbers
        if (field.match(/hcl:#([a-z0-9]){6}/)) passportFields++;
        // use regex to check whether field matches ecl:amb, ecl:blu, etc
        if (field.match(/ecl:(amb|blu|brn|gry|grn|hzl|oth)/)) passportFields++;
        if (field.match(/pid:([0-9]){9}/) && field.length === 13) passportFields++;
      })
    }
    if (passportFields >= 7) numValidPassports++;
  })
  return numValidPassports;
}