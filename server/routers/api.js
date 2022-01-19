/**
 * restful api 子路由
 */

const router = require('koa-router')()
const authInfoController = require('../controllers/auth')

const routers = router
  .get('/auth/getAccessToken', authInfoController.getAccessTokenInfo)
 
  
module.exports = routers
