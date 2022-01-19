/**
 * 主页子路由
 */

 const router = require('koa-router')()
 const index = require('../controllers/auth')
 
 module.exports = router
   .get('/', index.indexPage)
 