const Router = require('koa-router') 

const service = require("../service/exchangeService") 
const { finalize } = require("../util/reponoser") 
const { formateAmount } = require("../util/commonTool")

const router = new Router() 

router.get("/exchange_rate", (ctx) => {
  try {
    const { source, target, amount } = ctx.query

    if(!source.trim()) {
      const error = new Error('source can not empty')
      error.name = 'invalid'
      throw error
    }

    if (!target.trim()) {
      const error = new Error('target can not empty')
      error.name = 'invalid'
      throw error
    }

    if (!amount.trim()) {
      const error = new Error('amount can not empty')
      error.name = 'invalid'
      throw error
    }

    const formatedAmount = formateAmount(amount);
    const data = service.exchangeRate(source.toUpperCase(), target.toUpperCase(), Number(formatedAmount)) 

    return finalize(ctx, 200, {
      msg: "success",
      amount: `$${data}`
    })
  } catch (error) {
    console.error(error);

    return finalize(ctx, 400, {
      msg: "failed",
      error
    })
  }
}) 

module.exports = router 