const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: './script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
    ,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpg$/,
                type: 'asset/resource',
                generator: {
                  filename: 'images/[hash][ext][query]'
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html',
        })
      ]
};

