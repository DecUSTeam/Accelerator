'use strict';

let firstBuildReady = false;

const Scripts = callback => gulp.src(paths.source.scripts)
    .pipe(plumber(
        notify.onError({
            title  : 'Scripts',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(vinylNamed())
    .pipe(webpackStream({
        watch: isDev,
        output: {
            filename: '[name].min.js'
        },
        mode: isDev ? 'development' : 'production'
    }, null, (err, status) => {
        firstBuildReady = true;

        if (err) return;

        console.log(status.toString({ colors: true }));
    }))
    .pipe(gulp.dest(paths.build.scripts))
    .on('data', () => firstBuildReady ? callback() : 0)
    .pipe(browserSync.stream());

export default Scripts;
