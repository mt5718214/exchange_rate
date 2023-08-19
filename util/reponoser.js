/**
 * Attach status code and body on the context object provided by Koa
 *
 * @param {object}  ctx
 * @param {number}  status  the status code of response
 * @param {object}  body    the body of response
 *
 * @returns {void}
 */
const finalize = (ctx, status = 200, body = '') => {
  if (!Number.isInteger(status)) {
    console.error('Responser Error: Invalid response object') 
    ctx.status = 500 
    return 
  }

  if (status === 400 && body === '') {
    ctx.status = status 
    ctx.body = {} 

    return 
  }

  ctx.status = status 
  ctx.body = body 
} 

module.exports = {
  finalize
} 