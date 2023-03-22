import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { type BuildOptions } from './types/config';

export function buildPlugins(
  {
    paths,
    isDev,
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
      _PROJECT_: JSON.stringify(project),
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  return plugins;
}
