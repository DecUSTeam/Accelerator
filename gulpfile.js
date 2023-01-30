'use strict';

import {
    site_name, isDev, pages, paths
}               from './config.js'       ;
import plugins  from './plugins.js'      ;

import gulp     from 'gulp'              ;
import Creater  from './gulp/creater.js' ;
import Layouts  from './gulp/layouts.js' ;
import Scripts  from './gulp/scripts.js' ;
import Styles   from './gulp/styles.js'  ;
import Reset    from './gulp/reset.js'   ;
import Server   from './gulp/server.js'  ;
import Sprites  from './gulp/sprites.js' ;
import Images   from './gulp/images.js'  ;
import Fonts    from './gulp/fonts.js'   ;
import Favicons from './gulp/favicons.js';
import ZIP      from './gulp/zip.js'     ;


global.accel = {
    ...plugins, paths, gulp,
    site_name, isDev, pages
};
Creater()
// const
//     Watcher = () => {
//         gulp.watch(paths.watch.layouts, Layouts);
//         gulp.watch(paths.watch.styles,   Styles);
//         gulp.watch(paths.watch.scripts, Scripts);
//         gulp.watch(paths.watch.images,   Images);
//         gulp.watch(paths.watch.svgs,    Sprites);
//     },

//     mainTask    = gulp.parallel(Layouts, Styles, Scripts, Images, Sprites) ,
//     FontsTask   = gulp.series(Fonts.FontsElements, Fonts.FontsStyle)    ,
//     Development = gulp.series(Reset, Favicons, FontsTask, mainTask,  gulp.parallel(Watcher, Server)),
//     Production  = gulp.series(Reset, Favicons, FontsTask, mainTask, ZIP);

// export { Development, Production };
