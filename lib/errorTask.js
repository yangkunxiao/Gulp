//使用callback 如果任务（task）不返回任何内容，则必须使用 callback 来指示任务已完成
//如需通过 callback 把任务（task）中的错误告知 gulp，请将 Error 作为 callback 的唯一参数。
function callbackError(cb) {
    // `cb()` should be called by some async work
    cb(new Error('kaboom'));
}

exports.default = callbackError;