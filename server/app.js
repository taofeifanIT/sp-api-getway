const path = require('path')
const Koa = require('koa')
const convert = require('koa-convert')
const views = require('koa-views')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const Moment = require("moment");
const StoreInfo = require("./codes/storeinfo")
const config = require('./../config')
const routers = require('./routers/index')


const app = new Koa()

// 白名单
const WHITELIST = ['/test','/error','/error/error_store','/']


function localFilter(ctx) {
  let url = ctx.originalUrl
  console.info(Moment().format('YYYY-MM-DD HH:mm:ss') + '---------' +url)
  if (WHITELIST.indexOf(url) > -1) {
      // console.info('当前地址可直接访问')
  }else {
      let request = ctx.request
      let {storeId, refreshToken} = request.query
      if (!storeId || !refreshToken){
        ctx.redirect('/error')
      } else {
        let storeItem = StoreInfo.find(item => item.storeId == storeId)
        if(!storeItem){
          ctx.redirect('/error/error_store')
        }
      }
  }
}

// 配置控制台日志中间件
app.use(koaLogger())

// 配置ctx.body解析中间件
app.use(bodyParser())

//配置静态资源加载中间件
app.use(koaStatic(
  path.join(__dirname , './../static')
))

//配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

// 响应拦截
app.use(async (ctx, next) => {
    localFilter(ctx)
    await next()
})

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

// 监听启动端口
app.listen( config.port )
console.log(`the server is start at port ${config.port}`)
