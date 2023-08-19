const rateCfg = require("../config/rate")
const { convertFloatToStr } = require("../util/commonTool")

const currencies = rateCfg["currencies"]

/**
 * calcu the amount of the source
 * 
 * @param {string} source
 * @param {string} target
 * @param {number} amount
 * 
 * @returns {string}
 */
const exchangeRate = (source, target, amount) => {
  const targetRate = currencies[source][target]

  const targetAmount = targetRate * amount 

  const floatStr = convertFloatToStr(targetAmount)

  return floatStr
}

module.exports = {
  exchangeRate
} 