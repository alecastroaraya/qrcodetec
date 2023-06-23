module.exports = {
  webpack: (config, { isServer }) => {
    // Resto de la configuración de webpack

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|woff2?|ttf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            outputPath: 'static/images/', // Cambia la ruta de salida si es necesario
            name: '[name].[hash].[ext]',
            esModule: false,
          },
        },
      ],
    });

    // Resto de la configuración de webpack

    return config;
  },
};
