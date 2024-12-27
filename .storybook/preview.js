//this is the file where you configure all stories
export const parameters = {
  // actions: { argTypesRegex: "^on[A-Z].*", disable: false },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  showPanel: true,
}
export const tags = ["autodocs"];