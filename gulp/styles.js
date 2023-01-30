'use strict';

const Styles = () => gulp.src(paths.source.styles)
    .pipe(plumber(
        notify.onError({
            title  : 'Styles',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(ifPlugin(isDev, sourceMaps.init()))
    .pipe(sass())
    .pipe(autoprefixer({
        grid   :  true,
        cascade: false,
    }))
    .pipe(replace(/@images\//g,       '../images/'))
    .pipe(replace(/@libraries\//g, '../libraries/'))
    .pipe(groupMedia())
    .pipe(ifPlugin(isBuild, clean()))
    .pipe(rename({
        suffix: '.min',
        end   : '.css',
    }))
    .pipe(ifPlugin(isDev, sourceMaps.write('./')))
    .pipe(gulp.dest(paths.build.styles))
    .pipe(browserSync.stream());

export default Styles;
