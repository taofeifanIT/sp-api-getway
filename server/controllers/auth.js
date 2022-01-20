const tokenInfoService = require('../services/auth')

module.exports = {

    async getAccessTokenInfo ( ctx ) {
        let request = ctx.request
        let req_querystring = request.querystring
        let result = await tokenInfoService.getAccessTokenInfo(req_querystring)
        ctx.body = result
    },

    async indexPage ( ctx ) {
        const title = 'admin page'
        await ctx.render('admin', {
          title,
        })
    },

  }