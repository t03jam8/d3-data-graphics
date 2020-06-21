const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/i,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}