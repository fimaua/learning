const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'webpackCompilled.js',
        path: path.join(__dirname, 'main')
    },
    watch: true
}