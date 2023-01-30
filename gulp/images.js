'use strict';

const Images = () => accel.gulp.src(accel.paths.source.images)
    .pipe(accel.plumber(
        accel.notify.onError({
            title  : 'Images',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(accel.gulp.dest(accel.paths.build.images))
    .pipe(accel.if(accel.isBuild, accel.gulp.src(accel.paths.source.images)))
    .pipe(accel.newer(accel.paths.build.images))
    .pipe(accel.if(accel.isBuild, accel.imagemin([
        accel.imageminGiflossy({
            optimizationLevel: 3,
            optimize         : 3,
            lossy            : 2,
        }),
        accel.imageminPngquant({
            speed  :          5,
            quality: [0.6, 0.8],
        }),
        accel.imageminZopfli({
            more: true
        }),
        accel.imageminMozjpeg({
            progressive: true,
            quality    :   90,
        })
    ])))
    .pipe(accel.if(accel.isBuild, accel.gulp.dest(accel.paths.build.images)))
    .pipe(accel.browserSync.stream());

export default Images;
