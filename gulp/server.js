const Server = () => browserSync.init({
    server: {
        baseDir: paths.build.layouts
    },
    notify: false,
    port: 3000
});

export default Server;
