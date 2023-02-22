// webpack.config.js
// module.exports = {
//   // ...
//   experiments: {
//     topLevelAwait: true,
//   },
// };
/** @type {import("next").NextConfig} */
module.exports = {
  experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};
