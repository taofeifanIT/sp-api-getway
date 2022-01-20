const Result = require('../models/result')
// const userCode = require('../codes/refreshToken')

module.exports = {
/**
   * 获取token业务操作
   * @param  {object} storeId  店铺Id
   * @param  {object} refreshToken 登录表单信息
   * @return {object} 操作结果
   */
  async getAccessTokenInfo(storeId, refreshToken) {
    return new Result(200,"success", "31237y32fhdf08w3u489")
  },
}
