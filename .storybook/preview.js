import '!style-loader!css-loader!less-loader!../style/index.less'
import '!style-loader!css-loader!less-loader!../style/stories.less'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}