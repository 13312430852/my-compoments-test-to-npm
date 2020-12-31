

const path = require('path');

module.exports = {

    entry: './src/simpleButton/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'simple-button.js',
        // library指定的就是你使用require时的模块名
        library: 'simpleButton'

    }
}
