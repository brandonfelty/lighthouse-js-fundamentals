function loopyLighthouse(range, multiples, words) {
  let word = 0;
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      word = words[0] + words[1];
      console.log(word);  //console.log(x);
    } else if (i % multiples[0] === 0) {
      word = words[0];
      console.log(word);
    } else if (i % multiples[1] === 0) {
      word = words[1];
      console.log(word);
    } else {
      console.log(i);
    }
  } 
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);