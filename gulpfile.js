// const { build } = require('./lib/defaultTask.js');
// const { fileTask } = require('./lib/fileTask.js');
// exports.default = fileTask

const { src, dest } = require('gulp');
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// exports.default = function() {
//   return src('src/*.js')
//     .pipe(babel())
//     .pipe(src('vendor/*.js'))
//     .pipe(dest('output/dist/'))
//     .pipe(uglify())
//     .pipe(rename({ extname: '.min.js' }))
//     .pipe(dest('output/min/'));
// }
const { watch } = require('gulp');

// 所有事件都将被监控
// watch('src/*.js', { events: 'all' }, function(cb) {
//   // body omitted
//   console.log('change');
//   cb();
// });

// exports.default = function(){
//     /** 
//      * events 监控所有事件（'add'、'addDir'、'change'、'unlink'、'unlinkDir'、'ready'、'error'）
//      * 
//      * ignoreInitial 调用watch之后，并不会立即执行，而是等到第一次改变之后才会执行，ignoreInitial：false，即可在调用
//      * watch之后立即执行
//      * 
//      * queue:true  队列。置为false之后，将禁止队列。watch() 方法能够保证当前执行的任务（task）不会再次并发执行。
//      * 当文件监控程序关联的任务（task）正在运行时又有文件被修改了，
//      * 那么所关联任务的这次新的执行将被放到执行队列中等待，直到上一次关联任务执行完之后才能运行。
//      * 每一次文件修改只产生一次关联任务的执行并放入队列中。
//      * 
//      * delay:正整数 。 文件更改之后，只有经过 200 毫秒的延迟之后，文件监控程序所关联的任务（task）才会被执行。
//      * 这是为了避免在同使更改许多文件时（例如查找和替换操作）过早启动任务（taks）的执行
//      * 
//      * */
//     return watch('src/*.js', { events: 'all',ignoreInitial:false,delay:500 }, function() {
//         // body omitted
//         return src("src/*.js")
//                 .pipe(babel())
//                 .pipe(dest("output/dist"))
//                 .pipe(uglify())
//                 .pipe(rename({extname:'.min.js'}))
//                 .pipe(dest("output/min"))
//       });
// }
gulp.task('one', function (cb) {
    setTimeout(function () {
        console.log('one is done');
        cb()
    },5000)
})

gulp.task('two', function (cb) {
    console.log('two is done');
    cb()
})