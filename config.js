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
            layouts  : `${buildFolder}/`                 ,
            scripts  : `${buildFolder}/assets/scripts/`  ,
            styles   : `${buildFolder}/assets/styles/`   ,
            images   : `${buildFolder}/assets/images/`   ,
            fonts    : `${buildFolder}/assets/fonst/`    ,
            libraries: `${buildFolder}/assets/libraries/`,
            favicons : `${buildFolder}/assets/favicons/` ,
        },
        source: {
            layouts  : `${sourceFolder}/components/**/*.pug`                 ,
            scripts  : `${sourceFolder}/components/**/*.js`  ,
            styles   : `${sourceFolder}/components/**/*.sccs`   ,
            images   : `${sourceFolder}/assets/images/`   ,
            fonts    : `${sourceFolder}/assets/fonst/`    ,
            libraries: `${sourceFolder}/assets/libraries/`,
            favicon  : `${sourceFolder}/assets/favicons/` ,
        },
        watch: {

        },
        rootFolder, sourceFolder, buildFolder,
    };
