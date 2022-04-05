let re;
// Litesal Characters
re = //;
  // Literal chatacters
  re = /hello/;
re = /hello/i;

// Metacing to symbols
re = /^h/i; //Must start with
re = /world$/i; //Must ends with
re = /^hello$/i; // Matches and end with
re = /^h.ello$/i; // Matches any one character
// times
re = /gre?a?y/i;
re = /gre?a?y\?/i;

// Brakets [] - Character sets
re = /gre[ae]/i; // Must be an  a or e

// String to match
const str = "Gray";

// string to match
// const str = "Hello";

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.rest(str)) {
    console.log(`${str} matcheds ${re.source}`);
  } else {
    console.log(`${str} does NOT march ${re.source}`);
  }
}

// reTest(re, str);
