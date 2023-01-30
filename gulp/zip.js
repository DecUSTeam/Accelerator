'use strict';

const ZIP = () => gulp.src(`${paths.buildFolder}/**/*.*`)
    .pipe(plumber(
        notify.onError({
            title  : 'ZIP',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(zip(`${paths.rootFolder}.zip`))
    .pipe(gulp.dest('./'));

export default ZIP;
