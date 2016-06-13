var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var babel        = require('gulp-babel');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');
var eslint       = require('gulp-eslint');
var filter       = require('gulp-filter');
var newer        = require('gulp-newer');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var reload       = browserSync.reload;
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var react        = require('gulp-react');

var onError = (err) => {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};

var plumberOptions = {
  errorHandler: onError,
};

var jsFiles = {
  vendor: [
    //no vendor files
  ],
  source: [
    'dev/js/*.js',
    'dev/js/*.jsx',
  ]
};

gulp.task('eslint', () => {
  return gulp.src(jsFiles.source)
    .pipe(eslint({
      baseConfig: {
        "ecmaFeatures": {
           "jsx": true
         }
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('copy-react', () => {
  return gulp.src('node_modules/react/dist/react.js')
    .pipe(newer('dev/js/vendor/react.js'))
    .pipe(gulp.dest('dev/js/vendor'));
});

gulp.task('copy-react-dom', () => {
  return gulp.src('node_modules/react-dom/dist/react-dom.js')
    .pipe(newer('dev/js/vendor/react-dom.js'))
    .pipe(gulp.dest('dev/js/vendor'));
});

gulp.task('copy-js-vendor', () => {
  return gulp
    .src([
      'dev/js/vendor/react.js',
      'dev/js/vendor/react-dom.js'
    ])
    .pipe(gulp.dest('public/js/vendor'));
});

gulp.task('copy-html', () => {
  return gulp
    .src([
      'dev/*.html',
    ])
    .pipe(gulp.dest('public/'));
});

// gulp.task('concat', ['copy-react', 'copy-react-dom', 'eslint'], () => {
//   return gulp.src(jsFiles.vendor.concat(jsFiles.source))
//     .pipe(sourcemaps.init())
//     .pipe(babel({
//       only: [
//         'dev/js/components',
//       ],
//       compact: false
//     }))
//     .pipe(concat('app.js'))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('public/js'));
// });

gulp.task('jsx', () => {
  return gulp.src('dev/js/components/*.jsx')
  .pipe(react())
  .pipe(gulp.dest('public/js'))
})

gulp.task('sass', () => {
  var autoprefixerOptions = {
    browsers: ['last 2 versions'],
  };

  var filterOptions = '**/*.css';

  var reloadOptions = {
    stream: true,
  };

  var sassOptions = {
    includePaths: [

    ]
  };

  return gulp.src('dev/scss/*.scss')
      .pipe(plumber(plumberOptions))
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/css'))
      .pipe(filter(filterOptions))
      .pipe(reload(reloadOptions));
  });

  // Watch JS/JSX and Sass files
gulp.task('watch', () => {
  gulp.watch('dev/js/**/*.{js,jsx}', ['jsx']);
  gulp.watch('dev/scss/*.scss', ['sass']);
});

// BrowserSync
gulp.task('browsersync', () => {
  browserSync({
    server: {
      baseDir: './'
    },
    open: false,
    online: false,
    notify: false,
  });
});

gulp.task('build', ['sass', 'copy-js-vendor', 'copy-html', 'jsx']);
gulp.task('default', ['build', 'browsersync', 'watch']);
