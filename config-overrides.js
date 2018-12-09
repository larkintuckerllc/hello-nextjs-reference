const {
  addBabelPlugin,
  addBundleVisualizer,
  override,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]),
  process.env.BUNDLE_VISUALIZE && addBundleVisualizer(),
);

