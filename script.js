
//Define variables.
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseEl = document.getElementById('includeUppercase')
const includeNumbersEl = document.getElementById('includeNumbers')
const includeSymbolsEl = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

//setting up character codes and generate code array. 
const uppercaseCodes = arrayFromLowToHigh(65, 90)
const lowercaseCodes = arrayFromLowToHigh(97, 122)
const numberCodes = arrayFromLowToHigh(48, 57)
const symbolsCodes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

//set up event listener:
form.addEventListener('submit', e => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseEl.checked;
  const includeNumbers = includeNumbersEl.checked;
  const includeSymbols = includeSymbolsEl.checked;
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
  passwordDisplay.textContent = password;
})

//define functions: 
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = lowercaseCodes
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCodes)
  if (includeNumbers) charCodes = charCodes.concat(numberCodes)
  if (includeSymbols) charCodes = charCodes.concat(symbolsCodes)

  const passwordText = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordText.push(String.fromCharCode(characterCode))
  }
  return passwordText.join('')
}
