/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const api = require('./api')
const work = require('./work')
const error = require('./error')
const home = require('./home')
const test = require('./test')


router.use('/',  home.routes(), home.allowedMethods())
router.use('/work', work.routes(), work.allowedMethods())
router.use('/error', error.routes(), error.allowedMethods())
router.use('/test', test.routes(), test.allowedMethods())
router.use('/auth', api.routes(), api.allowedMethods())

module.exports = router


