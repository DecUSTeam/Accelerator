'use strict';

const Layouts = () => gulp.src(paths.source.layouts)
    .pipe(plumber(
        notify.onError({
            title  : 'Layouts',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(pug())
    .pipe(replace(/@images\//g,       './assets/images/'))
    .pipe(replace(/@styles\//g,       './assets/styles/'))
    .pipe(replace(/@scripts\//g,     './assets/scripts/'))
    .pipe(replace(/@libraries\//g, './assets/libraries/'))
    .pipe(versionNumber({
        value: '%TSM%',
        append: {
            'key': '_v',
            'cover': 0,
            'to': ['css', 'js']
        },
        output: {
            file: './file_versions.json'
        }
    }))
    .pipe(beautify({
        eol: '\n',
        end_with_newline: true
    }))
    .pipe(gulp.dest(paths.build.html))
    .pipe(browserSync.stream());

export default Layouts;
