import { type Configuration } from 'webpack';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildEnv, type BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
    assets: path.resolve(__dirname, 'public', 'assets'),
    buildAssets: path.resolve(__dirname, 'build', 'assets'),
  };

  const mode = env.mode || 'development';

  if (mode === 'production') {
    dotenv.config();
  }

  const PORT = env.port || 3000;
  const apiUrl = process.env.apiUrl || 'http://localhost:8000';

  const isDev = mode === 'development';

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  });

  return config;
};
