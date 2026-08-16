const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-sass-transformer'),
  },
  resolver: {
    sourceExts: [...sourceExts, 'scss', 'sass'],
  },
};

module.exports = mergeConfig(defaultConfig, config);xc