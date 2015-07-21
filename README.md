# gulp-miel
transpiles miel syntax

See [Miel](https://github.com/collardeau/miel) repo for more info.

## Install
```javascript
npm install gulp-miel --save-dev
```

## Usage

```javascript
// in gulpfile.js

gulp.task('build', function(){
  return gulp.src('src/*.js')
  .pipe(miel())
  // .pipe(babel())
  .pipe(gulp.dest('dest/'));
});

```