
var gulp = require('gulp');

// build app
require('./build/app/buildApp.gulp.js')(gulp);

// build public : 
require('./build/public/buildPublic.gulp.js')(gulp);

gulp.task('default', ['app', 'public']);