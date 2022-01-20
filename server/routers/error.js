const Result = require('../models/result')
/**
 * 错误页面子路由
 */

const router = require('koa-router')()

module.exports = router.get('/',  async ( ctx ) => {
  let request = ctx.request
  let req_query = request.query
  const { msg, code }= req_query
  let defaultMsg = msg ?? "Parameter error"
  let defaultCode = code ?? "400"
  let result = new Result(defaultCode, defaultMsg)
  ctx.body=result
}).get("/error_store",  async ( ctx ) => {
  let result = new Result("400", "StoreId does not exist")
  ctx.body=result
})