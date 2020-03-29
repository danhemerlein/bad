var gulp = require("gulp");
var sass = require('gulp-sass');
var browserSync = require("browser-sync").create();
var useref = require("gulp-useref");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var cssnano = require("gulp-cssnano");

gulp.task("sass", function() {
  return gulp
    .src("app/scss/**/*.scss") // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
});

// gulp series /parallel introduced in gulp 4
// gulp task only takes two parameters, the task name and the call back
gulp.task("watch", gulp.parallel("browserSync", "sass", function() {
  gulp.watch("app/scss/**/*.scss", gulp.series("sass"));
  // Reloads the browser whenever HTML or JS files change
  gulp.watch("app/*.html").on("change", browserSync.reload);
  gulp.watch("app/js/**/*.js", browserSync.reload);
}));

gulp.task("fonts", function() {
  return gulp.src("app/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

gulp.task("useref", function() {
  return (
    gulp
      .src("app/*.html")
      .pipe(useref())
      // Minifies only if it's a JavaScript file
      .pipe(gulpIf("*.js", uglify()))
      .pipe(gulp.dest("dist"))
      // Minifies only if it's a CSS file
      .pipe(gulpIf("*.css", cssnano()))
      .pipe(gulp.dest("dist"))
  );
});
