const tokenInfoService = require('../services/auth')

module.exports = {

    async getAccessTokenInfo ( ctx ) {
        let request = ctx.request
        let req_querystring = request.querystring
        let userResult = await tokenInfoService.getAccessTokenInfo(req_querystring)
        ctx.body = userResult
    },
  
  }