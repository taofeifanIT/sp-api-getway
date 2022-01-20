const testInfoService = require('../services/test')

module.exports = {
    async testController ( ctx ) {
        let result = await testInfoService.testApi()
        ctx.body = result
    },
  }