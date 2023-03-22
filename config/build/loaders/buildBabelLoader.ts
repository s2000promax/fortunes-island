import { type BuildOptions } from '../types/config';

export function buildBabelLoader({ isDev }: BuildOptions): object {
  return {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
        ],
        plugins: [
          ['i18next-extract',
            {
              locales: ['en'],
              keyAsDefaultValue: true,
              outputPath: 'src/shared/config/i18next/extractedTranslations/{{locale}}/{{ns}}.json',
            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
