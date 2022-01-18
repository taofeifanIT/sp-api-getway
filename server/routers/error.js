/**
 * 错误页面子路由
 */

const router = require('koa-router')()

module.exports = router.get('*',  async ( ctx ) => {
  const title = 'error'
  console.log('error')
  await ctx.render('error', {
    title
  })
})