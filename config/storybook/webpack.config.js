const path = require('path');
module.exports = (baseConfig, env, config) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('ts-loader'),
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
    },
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader',
    },
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
