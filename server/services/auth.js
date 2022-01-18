const userInfoService = require('./../services/user-info')
const userCode = require('../codes/refreshToken')

module.exports = {
/**
   * 登录业务操作
   * @param  {object} formData 登录表单信息
   * @return {object}          登录业务操作结果
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
