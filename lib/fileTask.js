// const { src,dest } = require('gulp');
// const babel = require('gulp-babel');

// exports.fileTask = function(){
//     return src('*.js')
//             .pipe(babel())
//             .pipe(dest('output/'))
// }

const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

exports.fileTask = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(src('vendor/*.js'))
    .pipe(dest('output/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('output/'));
}