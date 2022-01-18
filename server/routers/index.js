/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const api = require('./api')
const work = require('./work')
const error = require('./error')

router.use('/',  work.routes(), work.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/work', work.routes(), work.allowedMethods())
router.use('/error', error.routes(), error.allowedMethods())

module.exports = router


