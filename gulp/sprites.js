'use strict';

const Sprites = () => gulp.src(paths.source.svgs)
    .pipe(plumber(
        notify.onError({
            title  : 'Sprites',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(ifPlugin(isBuild, svgMin({
        fill  : false,
        js2svg: {
            pretty: true,
            indent:    4,
        }
    })))
    .pipe(sprite({
        shape: {
            dest: 'svgs',
        },
        mode: {
            stack: {
                sprite: '../sprite.svg',
            }
        }
    }))
    .pipe(gulp.dest(paths.build.images));

export default Sprites;
