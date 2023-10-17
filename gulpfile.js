const { gulp, watch, src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
function css() {
  return src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/css"));
}

function js() {
  return src("./src/js/**/*.js")
    .pipe(dest("./dist/js"));
}

exports.default = function () {
  watch("./src/**/*.scss", css);
  watch("./src/**/*.js", js);
};
