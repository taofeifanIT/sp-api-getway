class Result{
    constructor(code, msg,data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
    setCode(_code){
        this.code = _code
        return this
    }
    setMsg(_msg) {
        this.msg = _msg
        return this
    }
    setData(_data){
        this.data = _data
        return this
    }
}
module.exports = Result