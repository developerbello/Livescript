// Samplebax.js for text scripts

const logicTester = checkers ? true : false;

function checkers(...values) {
  for(let n = 0; n < values.length; n=n+1){
    let elem = checkers.arguments[n];
    if(elem < 50) {
      continue;
    } else {
      console.log(elem);
    }
  }
}

let result = checkers(23, 54, 43, 100, 89, 16);
