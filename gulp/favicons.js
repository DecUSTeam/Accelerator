'use strict';

const Favicons = () => gulp.src(paths.source.favicon)
    .pipe(plumber(
        notify.onError({
            title  : 'Favicons',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(ifPlugin(isDev, svgMin({
        fill  : false,
        js2svg: {
            pretty: true,
            indent: 4
        }
    })))
    .pipe(ifPlugin(isDev,   gulp.dest(paths.buildFolder)))
    .pipe(ifPlugin(isBuild, favicons({
        icons: {
            appleIcon: [
                'apple-touch-icon.png',
                'apple-touch-icon-1024x1024.png',
            ],
            favicons: [
                'favicon.ico'
            ],
            android:      false,
            online:       false,
            appleStartup: false,
            firefox:      false,
            yandex:       false,
            windows:      false,
            coast:        false,
        },
        paths: './assets/images/favicons/'
    })))
    .pipe(ifPlugin(isBuild, gulp.dest(paths.build.favicons)))
    .pipe(ifPlugin(isBuild, filter([
        'apple-touch-icon.png', 'favicon.ico'
    ])))
    .pipe(ifPlugin(isBuild, gulp.dest(paths.buildFolder)))

export default Favicons;
