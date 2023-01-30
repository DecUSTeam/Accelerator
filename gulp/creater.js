'use strict';

const
    addHTML   = (path, page) => {
        const content = `
            extends ../default
append styles

append scripts

block variables
    -
        let
            page_title = '${accel.site_name}',
            page_name  = '${page}';

block content
    div#root
        `;
        accel.fs.appendFile(`${path}/${page}.pug`)
    },
    addStyle  = () => {},
    addScript = () => {};

const Creater = async done => {
    accel.pages.forEach(page => {
        const pagePath = `${accel.paths.sourceFolder}/base/${page}`;
        accel.fs.mkdir(pagePath, error => {
            if(error?.code == 'EEXIST')
                return console.log(`Создание папки "${page}" не требуется`);
            console.log('Folder has been create!');
        });
        accel.fs.readdir(pagePath, (error, files) => {
            if(error) throw error;
            if(!files.length) {
                console.log(`В папке "${page}' файлов нет!`);

            }
        });
    });
};

export default Creater;
