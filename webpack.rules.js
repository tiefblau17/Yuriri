module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    loaders: [
      {
        loader: 'babel-loader'
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true
      }
    }]
  },
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.(svg|ico|icns)$/,
    exclude: [/\.js$/, /\.ts$/, /\.tsx$/, /\.html$/, /\.json$/, /\.ejs$/],
    loader: "file-loader",
    options: {
        name: "[path][name].[ext]",
    },
  },
  {
    test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
    loader: "url-loader",
    options: {
        name: "[path][name].[ext]",
    },
  },
];
