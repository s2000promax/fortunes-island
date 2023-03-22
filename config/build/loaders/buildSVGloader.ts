export function buildSVGloader(): object {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
}
