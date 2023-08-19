const { describe, it, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');

const { exchangeRate } = require('../service/exchangeService')

describe("exchageRate", () => {
  const [USD, JPY, TWD] = ["USD", "JPY", "TWD"]
  const amount = 1525

  it("convert USD tp JPY", () => {
    expect(exchangeRate(USD, JPY, amount)).equals("170,496.53")
  })

  it("convert USD tp TWD", () => {
    expect(exchangeRate(USD, TWD, amount)).equals("46,427.1")
  })

  it("convert JPY tp TWD", () => {
    expect(exchangeRate(JPY, TWD, amount)).equals("411.08")
  })

  it("convert JPY tp USD", () => {
    expect(exchangeRate(JPY, USD, amount)).equals("13.5")
  })

  it("convert TWD tp USD", () => {
    expect(exchangeRate(TWD, USD, amount)).equals("50.04")
  })

  it("convert TWD tp JYP", () => {
    expect(exchangeRate(TWD, JPY, amount)).equals("5,595.23")
  })
})