'use strict';

import * as nodePath from 'path';
(await import('dotenv')).config();

const
    rootFolder = nodePath.basename(nodePath.resolve()),
    sourceFolder = './source',
    buildFolder = './dist';

export const
    site_name = process.env.site_name,
    pages = process.env.pages.split(','),
    isDev = process.env.isDev == 'true' ? true : false,



    paths = {
        build: {
            layouts  : `${buildFolder}/`                       ,
            styles   : `${buildFolder}/assets/styles/`         ,
            scripts  : `${buildFolder}/assets/scripts/`        ,
            images   : `${buildFolder}/assets/images/`         ,
            fonts    : `${buildFolder}/assets/fonts/`          ,
            libraries: `${buildFolder}/assets/libraries/`      ,
            favicons : `${buildFolder}/assets/images/favicons/`,
        },
        source: {
            layouts  : `${sourceFolder}/layouts/partials/*.pug`                    ,
            styles   : `${sourceFolder}/styles/partials/*.scss`                    ,
            scripts  : `${sourceFolder}/scripts/partials/*.js`                     ,
            images   : `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
            fonts    : `${sourceFolder}/assets/fonts/**/*.{ttf,woff,woff2}`        ,
            libraries: `${sourceFolder}/assets/libraries/**/*.*`                   ,
            favicon  : `${sourceFolder}/assets/images/favicon.{svg,ico}`           ,
            svgs     : `${sourceFolder}/assets/images/svgs/*.svg`                  ,
        },
        watch: {
            layouts: `${sourceFolder}/layouts/**/*.pug`                                  ,
            styles : `${sourceFolder}/styles/**/*.scss`                                  ,
            scripts: `${sourceFolder}/scripts/**/*.js`                                   ,
            images : `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
            svgs   : `${sourceFolder}/assets/images/svgs/*.svg`                          ,
            env    : `${sourceFolder}/`                                                  ,
        },
        reset: buildFolder,
        rootFolder, sourceFolder, buildFolder,
    };
