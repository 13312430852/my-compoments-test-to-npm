var config={
    //配置开发测试入口以及出口文件名称
    dev:{
        entry: './src/main.js',
        filename:'build.js'
    },
    //配置打包入口以及出口文件名称
    build:{
        entry: './src/simpleButton/index.js',
        filename: 'simple-button.js'
    }

}
module.exports = {
    entry: process.env.NODE_ENV=="development"?config.dev.entry:config.build.entry,
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: process.env.NODE_ENV=="development"?config.dev.filename:config.build.filename,
        // library指定的就是你使用require时的模块名
        library: 'simpleText',
        libraryTarget: 'umd',

    }
}
