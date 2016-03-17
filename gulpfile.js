var rootDestPath = "dist/";
var jsSrcPath = "lib/";
var jsDestPath = rootDestPath + "lib/";
var cssSrcPath = "assets/";
var cssDestPath = rootDestPath + "assets/";

var gulp = require("gulp");
var del = require("del");
var filter = require("gulp-filter");
var vinylpaths = require("vinyl-paths");
var concat = require("gulp-concat");
var mergeStream = require("merge-stream");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var cssnano = require("gulp-cssnano");
var htmlreplace = require("gulp-html-replace");
var ngAnnotate = require("gulp-ng-annotate");
var mainBowerFiles = require("gulp-main-bower-files");
var browserSync = require("browser-sync").create();
var server = require("./server");

gulp.task('serve', ['build'], function () {
    browserSync.init({logSnippet: false});

    gulp.watch('index.html', ['build-index-html', browserSync.reload]);
    gulp.watch('lib/**/*.html', ['build-html-templates', browserSync.reload]);
    gulp.watch('assets/**/*.css', ['build-css', 'copy-bootstrap-assets', browserSync.reload]);
    gulp.watch('lib/**/*.js', ['build-js', browserSync.reload]);

    server.start({
        browserSync: browserSync
    });

});


gulp.task("default", ["build"]);
gulp.task("build", ["build-js", "build-bower-files", "build-html-templates", "build-css", "copy-bootstrap-assets", "build-index-html"]);
gulp.task("clean", function () {
    return del("dist/*");
});


gulp.task("build-js", ["clean-js"], function () {
    return gulp.src([
        jsSrcPath + "app.js",
        jsSrcPath + "**/*Module.js",
        jsSrcPath + "**/*.js",
    ])
        .pipe(sourcemaps.init())
        .pipe(gulp.dest(jsDestPath))
        .pipe(concat("app.js"))
	    // .pipe(babel())
        // .pipe(gulp.dest(jsDestPath))
        .pipe(ngAnnotate())
        // .pipe(uglify())
        .pipe(rename("app.min.js"))
        .pipe(sourcemaps.write(".", { includeContent: false, sourceRoot: "../lib" }))
        .pipe(gulp.dest(jsDestPath));
});

gulp.task("clean-js", function () {
    return del([jsDestPath + "app.js", jsDestPath + "app.min.js", jsDestPath + "app.min.js.map"]);
});


gulp.task("build-bower-files", ["clean-bower-files"], function () {
    var jsFilter = filter('**/*.js', { restore: true });

    return gulp.src("bower.json")
        .pipe(mainBowerFiles())
        .pipe(jsFilter)
        .pipe(sourcemaps.init())
        .pipe(concat("extlibs.js"))
        .pipe(gulp.dest(jsDestPath))
        // .pipe(uglify())
        .pipe(rename("extlibs.min.js"))
        .pipe(sourcemaps.write(".", { includeContent: false, sourceRoot: "../lib" }))
        .pipe(gulp.dest(jsDestPath));
});

gulp.task("clean-bower-files", function () {
    return del([jsDestPath + "extlibs.js"]);
});


gulp.task("build-html-templates", ["clean-html-templates"], function () {
    return gulp.src(jsSrcPath + "**/*.html")
        .pipe(gulp.dest(jsDestPath));
});

gulp.task("clean-html-templates", function () {
    return del([jsDestPath + "**/*.html"]);
});


gulp.task("copy-bootstrap-assets", ["clean-bootstrap-assets"], function () {
    var bootstrapSrc = "bower_components/bootstrap/dist/";

    var s1 = gulp.src(bootstrapSrc + "css/bootstrap*.css")
        .pipe(gulp.dest(cssDestPath + "css/"));

    var s2 = gulp.src(bootstrapSrc + "css/bootstrap*.css.map")
        .pipe(gulp.dest(cssDestPath + "css/"));

    var s3 = gulp.src(bootstrapSrc + "css/bootstrap*.min.css")
        .pipe(gulp.dest(cssDestPath + "css/"));

    var s4 = gulp.src(bootstrapSrc + "fonts/*")
        .pipe(gulp.dest(cssDestPath + "fonts/"));

    return mergeStream(s1, s2, s3, s4);
});

gulp.task("clean-bootstrap-assets", function () {
    return del([cssDestPath + "css/*", cssDestPath + "fonts/*"]);
});


gulp.task("build-css", ["clean-css"], function () {
    return gulp.src(cssSrcPath + "**/*.css")
        .pipe(concat("styles.css"))
        .pipe(gulp.dest(cssDestPath))
        .pipe(sourcemaps.init())
        .pipe(cssnano({ safe: true }))
        .pipe(rename("styles.min.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(cssDestPath));
});

gulp.task("clean-css", function () {
    return del([cssDestPath]);
});


gulp.task("build-index-html", ["clean-index-html"], function () {
    return gulp.src("*.html")
        .pipe(htmlreplace({
            js: [jsSrcPath + "extlibs.min.js", jsSrcPath + "app.min.js"],
            css: [cssSrcPath + "css/bootstrap.css", cssSrcPath + "css/bootstrap-theme.css", cssSrcPath + "styles.min.css"]
        }))
        .pipe(gulp.dest(rootDestPath));
});

gulp.task("clean-index-html", function () {
    return del([rootDestPath + "*.html"]);
});

