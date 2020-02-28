const { src, dest } = require('gulp');
const { EventEmitter } = require('events');
const { exec } = require('child_process');

//返回一个stream
function streamTask() {
    return src('*.js')
        .pipe(dest('output'));
}
//返回一个promise
function promiseTask() {
    return new Promise(function (resolve, reject) {
        resolve('the value is ignored')
    })
}
//返回event emitter
function eventEmitter() {
    const emitter = new EventEmitter();
    // Emit has to happen async otherwise gulp isn't listening yet
    setTimeout(() => emitter.emit('finish'), 250);
    return emitter;
}
//返回child process
function childProcessTask() {
    return exec('date');
}

exports.default = {
    streamTask,
    promiseTask,
    eventEmitter,
    childProcessTask
}