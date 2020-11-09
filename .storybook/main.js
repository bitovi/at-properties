module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        // Extract any SCSS content and minimize
        test: /\.scss$/,
        use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },                    
            {
                loader: 'postcss-loader'                        
            },                    
            {
                loader: 'sass-loader',
                options: {                            
                    plugins: () => [autoprefixer()]
                }
            }                    
        ]
      },
    ]

    return config
  }
}