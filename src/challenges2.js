// Desafio 11
function generatePhoneNumber(phoneArray) {
  if (phoneArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (numbersValidation(phoneArray) === 0 || maxOccurance(phoneArray) >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const ddd = '' + phoneArray[0] + phoneArray[1]
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

let teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3]
generatePhoneNumber(teste)

///Apoio desafio 11
function numbersValidation(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 0
    };    
  }
  return 1
}

function maxOccurance(array) {
  let occuranceArray = [];

  for (let index = 0; index < array.length; index += 1) {
    let occurrences = 1;
    for (let index2 = index + 1; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        occurrences += 1
      }
    }
    occuranceArray.push(occurrences);
  } 
  return Math.max(...occuranceArray)
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
