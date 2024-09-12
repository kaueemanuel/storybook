import type { StorybookConfig } from "@storybook/react-vite"
const pluginsToExclude = ["cleanup", "vite:dts"]
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  async viteFinal(config) {
    // Add your configuration here
    config.plugins = config.plugins?.filter(
      (p: any) => !pluginsToExclude.includes(p.name),
    )
    return config
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../src/assets"],
}
export default config
