// Desafio 11
// Apoio desafio 11
function numbersValidation(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 0;
    }
  }
  return 1;
}

function maxOccurance(array) {
  let occuranceArray = [];

  for (let index = 0; index < array.length; index += 1) {
    let occurrences = 1;
    for (let index2 = index + 1; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        occurrences += 1;
      }
    }
    occuranceArray.push(occurrences);
  }
  return Math.max(...occuranceArray);
}

// Desafio 11 mesmo!!
function generatePhoneNumber(phoneArray) {
  if (phoneArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (numbersValidation(phoneArray) === 0 || maxOccurance(phoneArray) >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  const ddd = `${phoneArray[0]}${phoneArray[1]}`;
  let numberFirstPart = '';
  for (let index = 2; index <= 6; index += 1) {
    numberFirstPart = numberFirstPart.concat(phoneArray[index]);
  }
  let numberSecondPart = '';
  for (let index = 7; index <= 10; index += 1) {
    numberSecondPart = numberSecondPart.concat(phoneArray[index]);
  }

  const formatedNumber = `(${ddd}) ${numberFirstPart}-${numberSecondPart}`;
  return formatedNumber;
}

// ///////////////////////////////////////////// ---- //////////////////////////////
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sides = [lineA, lineB, lineC];
  let perimeter = lineA + lineB + lineC;
  for (let index = 0; index < sides.length; index += 1) {
    if (sides[index] > perimeter - sides[index]) {
      return false;
    }
    let compareValues = [];
    for (let index2 = 0; index2 < sides.length; index2 += 1) {
      if (index !== index2) {
        compareValues.push(sides[index2]);
      }
    }
    let diff = Math.abs(compareValues[0] - compareValues[1]);
    if (sides[index] < diff) {
      return false;
    }
  }
  return true;
}

// Desafio 13
function hydrate(alcoholStatus) {
  let func = /\d+/g;
  let nums = alcoholStatus.match(func);
  let sum = 0;

  for (let index = 0; index < nums.length; index += 1) {
    sum += parseInt(nums[index]);
  }

  if (sum === 1) {
    return '1 copo de água';
  }
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
