/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const api = require('./api')
const work = require('./work')
const error = require('./error')
const home = require('./home')

router.use('/',  home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/work', work.routes(), work.allowedMethods())
router.use('/error', error.routes(), error.allowedMethods())

module.exports = router


