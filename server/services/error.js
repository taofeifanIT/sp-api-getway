
module.exports = {
    /**
       * 获取token业务操作
       * @param  {object} storeId  店铺Id
       * @param  {object} refreshToken 登录表单信息
       * @return {object} 操作结果
       */
      async getAccessTokenInfo(storeId, refreshToken) {
        // let formData = ctx.request.body
        let result = {
          success: false,
          message: 'succesful',
          data: storeId+refreshToken
        }
        return result
      },
    }