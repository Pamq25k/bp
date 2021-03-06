var gulp = require("gulp"),
  browsersync = require("browser-sync").create(),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssImport = require("postcss-import"),
  mixins = require("postcss-mixins"),
  nested = require("postcss-nested"),
  cssvars = require("postcss-simple-vars"),
  hexrgba = require("postcss-hexrgba"),
  webpack = require("webpack"),
  precss = require("precss");

function scripts(callback) {
  webpack(require("./webpack.config"), function (err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
  });
  callback();
}

function styles() {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, autoprefixer, cssvars, hexrgba, nested]))
    .on("error", function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
}

function injectCSS() {
  return gulp.src("./app/temp/styles/styles.css").pipe(browsersync.stream());
}

function reload(callback) {
  browsersync.reload();
  callback();
}

function watch() {
  browsersync.init({
    server: "./app",
  });

  gulp.watch(["app/*.html"], reload);

  gulp.watch(["app/assets/styles/**/*.css"], gulp.series(styles, injectCSS));

  gulp.watch(["app/assets/scripts/**/*.js"], gulp.series(scripts, reload));
}

exports.watch = watch;
exports.styles = styles;
