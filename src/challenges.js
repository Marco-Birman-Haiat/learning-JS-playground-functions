// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 === true && parameter2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area
}

// Desafio 3
function splitSentence(stringToSplit) {
  const splitArray = stringToSplit.split(" ");
  return splitArray
}


// Desafio 4
function concatName(stringArray) {
  const format = `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
  return format
}


// Desafio 5
function footballPoints(wins, ties) {
  const totalPoints = wins * 3 + ties;
  return totalPoints 
}

// Desafio 6
function highestCount(numbers) {
  let highest = 0
  let count = 0
  
  for (let index = 0; index < numbers.length; index += 1) {
    if (index === 0) {
      highest = numbers[index];
      count = 1;
    } else if (highest < numbers[index]) {
      highest = numbers[index];
      count = 1;
    } else if (highest === numbers[index]) {
      count += 1;
    }
  }
  
  return count

}

let a = [1, 2, 3, 4, 7, 4, 7, 7]
console.log(highestCount(a));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
