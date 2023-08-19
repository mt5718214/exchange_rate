/**
 * formate amount string without symbol
 * @param {string} amount
 *
 * @returns {string}
 */
const formateAmount = (amount) => {
  const regex = /[0-9.]/
  let formatedStr = ""

  for (let i = 0; i < amount.length; i++) {
    if (regex.test(amount[i])) {
      formatedStr += amount[i]
    }
  }

  return formatedStr
}

/**
 * convert float number to formated string
 * example:
 *  convertFloatToStr(1234) // 1,234
 *  convertFloatToStr(234)  // 234
 * 
 * @param {number} number
 * 
 * @returns {string}
 */
const convertFloatToStr = (number) => {
  roundNumber = roundToDecimal(number, 2)

  let [integerPart, decimalPart] = roundNumber.toString().split('.')
  let result = ''
  let counter = 0

  for (let i = integerPart.length - 1; i >= 0; i--) {
    counter++
    result = integerPart[i] + result
    if (counter % 3 === 0 && i !== 0) {
      result = ',' + result
    }
  }

  if (decimalPart !== undefined) {
    return result + '.' + decimalPart
  }
  return result
}

const roundToDecimal = (number, decimalPlaces) => {
  const factor = Math.pow(10, decimalPlaces)
  return Math.round(number * factor) / factor
}

module.exports = {
  formateAmount,
  convertFloatToStr
} 