/**
 * restful api 子路由
 */

 const router = require('koa-router')()
 const testController = require('../controllers/test')
 
 const routers = router
   .get('/', testController.testController)
  
   
 module.exports = routers
 