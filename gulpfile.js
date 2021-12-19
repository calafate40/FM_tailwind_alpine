const gulp = require('gulp')
const replace = require('gulp-replace')
const inlinesource = require('gulp-inline-source')

gulp.task('fm', () => {
  return gulp
    .src('./public/index.html') //変換元
    .pipe(replace('<script src="../src/data.js"></script>', '<script>const data = "___DATA___"</script>')) //data.jsをFileMakerからのdataと置換できるようにする。
    .pipe(replace('dev', 'prod'))
    .pipe(inlinesource()) // inlineプロパティを付与したhtmlタグの中身をインライン文字列で置換
    .pipe(gulp.dest('./filemaker')) //変換後のディレクトリ
})
