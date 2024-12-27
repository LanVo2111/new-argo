module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    {
      name: "@storybook/addon-docs",
      options:{
        transcludeMarkdown: true
      }
    },
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-babel"
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    });
    return config;
  },

  "framework": {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
}
