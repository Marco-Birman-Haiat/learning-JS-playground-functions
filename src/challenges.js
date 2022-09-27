// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 === true && parameter2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(stringToSplit) {
  const splitArray = stringToSplit.split(' ');
  return splitArray;
}


// Desafio 4
function concatName(stringArray) {
  const format = `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
  return format;
}

// Desafio 5
function footballPoints(wins, ties) {
  const totalPoints = wins * 3 + ties;
  return totalPoints ;
}

// Desafio 6
function highestCount(numbers) {
  let highest = 0;
  let count = 0;
  
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
  
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const dist1 = Math.abs(mouse - cat1);
  const dist2 = Math.abs(mouse - cat2);
  const closer = Math.min(dist1, dist2);

  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }

  if (closer === dist1) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzArray = [];

  for (let index = 0; index < numbers.length; index += 1) {
    let numberAnswer = '';

    if (numbers[index] % 3 === 0) {
      numberAnswer = 'fizz'
    }

    if (numbers[index] % 5 === 0) {
      if (numberAnswer === 'fizz') {
        numberAnswer = numberAnswer.concat('Buzz'); 
      } else {
        numberAnswer = numberAnswer.concat('buzz');
      }
    }
    
    if (numberAnswer === '') {
      numberAnswer = 'bug!';
    }

    fizzBuzzArray.push(numberAnswer);
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let incripted = ''
  for (let index = 0; index < string.length; index += 1) {
    let newCharacter = avaliaECodifica(string[index]);
    incripted = incripted.concat(newCharacter);
  }
  return incripted
}

function decode(string) {
  let decripted = ''
  for (let index = 0; index < string.length; index += 1) {
    let newCharacter = avaliaEDecodifica(string[index]);
    decripted = decripted.concat(newCharacter);
  }
  return decripted
}

/////Apoio Desafio 9
function avaliaECodifica(a) {
switch (a) {
  case 'a':
    return 1

  case 'e':
    return 2
  
  case 'i':
    return 3

  case 'o':
    return 4
  
  case 'u':
    return 5

  default:
    return a
  }
}

function avaliaEDecodifica(a) {
  switch (a) {
    case '1':
      return 'a'
  
    case '2':
      return 'e'
    
    case '3':
      return 'i'
  
    case '4':
      return 'o'
    
    case '5':
      return 'u'
  
    default:
      return a
    }
  }



// Desafio 10
function techList(tech, responsable) {
  
  if (tech.length === 0) {
    return 'Vazio!'
  }
  
  let list = []

  for (key in tech) {
    let techObject = {
      tech: tech[key],
      name: responsable,
    }

    list.push(techObject);
  }
  return list
}

let a = ['React', 'Jest', 'HTML', 'CSS']
let b = 'Marco'

console.log(techList(a, b));


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
