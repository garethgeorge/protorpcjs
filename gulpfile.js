const gulp = require("gulp");
const protobuf = require("gulp-protobuf");

module.exports.protocjs = function protoc_js() {
  return gulp.src("./src/protos/*.proto")
    .pipe(protobuf.pbjs({
        target: "static-module",
        wrap: "commonjs",
        "force-number": true,
    }))
    .pipe(gulp.dest("./src/protos"));
}

module.exports.protocts = function protoc_ts() {
  return gulp.src("./src/protos/*.js")
    .pipe(protobuf.pbts({}))
    .pipe(gulp.dest("./src/protos"));
}

module.exports.copyprotos = function copyprotos() {
  return gulp.src("./src/protos/*").pipe(gulp.dest("./dist/src/protos"));
}

module.exports.default = gulp.series(
  module.exports.protocjs,
  module.exports.protocts,
  module.exports.copyprotos
)