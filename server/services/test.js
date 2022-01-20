const Result = require('../models/result')
// const userCode = require('../codes/refreshToken')

module.exports = {
/**
   * xxxxxxxxx
   * @param  {object} param xxxxxxxxx
   * @return {object} 操作结果
   */
  async testApi() {
    return new Result(200,"success", "test APi")
  },
}
