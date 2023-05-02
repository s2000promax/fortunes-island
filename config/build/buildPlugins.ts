import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import { type BuildOptions } from './types/config';

export function buildPlugins(
  {
    paths,
    isDev,
    apiUrl,
    project,
  }: BuildOptions,
): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev),
      _API_: JSON.stringify(apiUrl),
      _PROJECT_: JSON.stringify(project),
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales },
        { from: paths.assets, to: paths.buildAssets },
      ],
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: true }));
  }

  return plugins;
}
