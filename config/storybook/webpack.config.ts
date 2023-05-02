import * as webpack from 'webpack';
import * as path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSVGloader } from '../build/loaders/buildSVGloader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');
  config.resolve!.alias = {
    ...config.resolve!.alias,
    '@': paths.src,
  };
  config.resolve!.fallback = {
    'fs': false,
    'path': false,
  };



  const rules = config.module!.rules as webpack.RuleSetRule[];
  config.module!.rules = rules.map((rule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module!.rules.push(buildSVGloader());
  config.module!.rules.push(buildCssLoader(true));

  config.plugins!.push(new webpack.DefinePlugin({
    _IS_DEV_: JSON.stringify(true),
    _API_: JSON.stringify(''),
    _PROJECT_: JSON.stringify('storybook'),
  }));

  config.experiments = { topLevelAwait: true };

  return config;
};

