'use strict';

const Fonts = {
    FontsElements: () => gulp.src(paths.source.fonts)
        .pipe(plumber(
            notify.onError({
                title  : 'Fonts',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(ifPlugin(!isDev, fonter({
            formats: ['woff']
        })))
        .pipe(ifPlugin(!isDev, gulp.src(paths.source.fonts)))
        .pipe(ifPlugin(!isDev, woff2()))
        .pipe(gulp.dest(paths.build.fonts)),

    FontsStyle: async done => {
        const fontsStyleInlcude = `./source/styles/settings/vendors/_fonts.scss`;
        fs.writeFileSync(fontsStyleInlcude, '');
        fs.readdir(`${paths.build.fonts}/`, (err, fontsDirsNames) => {
            if (err) {
                console.log('Отсутствуют папки со шрифтами!');
                done()
            }
            if (fontsDirsNames) {
                fontsDirsNames.forEach(fontDirName => {
                    fs.readdir(`${paths.build.fonts}/${fontDirName}`, (err, fontFilesName) => {
                        if (err) {
                            console.log('Отсутствуют шрифты!');
                            done()
                        };
                        if (fontFilesName) {
                            fontFilesName.filter(fontFileName => !fontFileName.toLowerCase().includes('woff2'))
                                .forEach(fontFileName => {
                                    const
                                        fontName        = fontFileName.split('.')[0].split('-')[0],
                                        fontVendor      = fontFileName.split('.')[0].split('-')[1],
                                        fontWeight__str = fontVendor.toLowerCase().includes('italic') ? fontVendor.toLowerCase().replace('italic', '') : fontVendor,
                                        fontStyle       = fontVendor.toLowerCase().includes('italic') ? 'italic' : 'normal',
                                        fontWoffOrTtf   = !isDev ? `url('../fonts/${fontDirName}/${fontName}-${fontVendor}.woff') format('woff')` : `url('../fonts/${fontDirName}/${fontName}-${fontVendor}.ttf') format('truetype')`,
                                        fontWoff2       = !isDev ? `,\n        url('../fonts/${fontDirName}/${fontName}-${fontVendor}.woff2') format('woff2');` : ';';

                                    let fontWeight__num;

                                    switch (fontWeight__str.toLowerCase()) {
                                        case 'thin'      : fontWeight__num = 100; break;
                                        case 'extralight': fontWeight__num = 200; break;
                                        case 'light'     : fontWeight__num = 300; break;
                                        case 'regular'   : fontWeight__num = 400; break;
                                        case 'medium'    : fontWeight__num = 500; break;
                                        case 'semibold'  : fontWeight__num = 600; break;
                                        case 'bold'      : fontWeight__num = 700; break;
                                        case 'extrabold' : fontWeight__num = 800; break;
                                        case 'black'     : fontWeight__num = 900; break;

                                        default          : fontWeight__num = 400; break;
                                    }
                                    const fontFace = `@font-face {\n    font-family: '${fontName}';\n    src: ${fontWoffOrTtf}${fontWoff2}\n    font-weight: ${fontWeight__num};\n    font-style: ${fontStyle};\n};\n`;

                                    fs.appendFile(fontsStyleInlcude, fontFace, err => {
                                        if (err) throw console.error(`Ошибка при добавлении шрифта: ${fontName}-${fontVendor}`)
                                        console.log(`Шрифт "${fontName}-${fontVendor}" успешно добавлен!`);
                                    });
                                });
                        }
                    });
                })
            }
        });
    }
};

export default Fonts;
