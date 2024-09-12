import fixReactVirtualized from "esbuild-plugin-react-virtualized"
import { resolve } from "path"
import cleanup from "rollup-plugin-cleanup"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

import react from "@vitejs/plugin-react"

import { peerDependencies } from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      plugins: [fixReactVirtualized as any],
    },
  },
  define: {
    global: "window",
  },
  plugins: [
    react(),
    cleanup({ comments: "istanbul", extensions: ["js", "ts"] }),
    dts({
      insertTypesEntry: true,
      exclude: [
        "**/*.stories.tsx",
        "**/*.css",
        "**/*.svg",
        "**/*.stories.ts",
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
      ],
    }),
  ],
  build: {
    cssCodeSplit: true,
    copyPublicDir: false,
    minify: true,
    assetsDir: "assets",
    assetsInlineLimit: 0,
    emptyOutDir: true,
    lib: {
      entry: [
        resolve(__dirname, "lib/index.ts"),
        resolve(__dirname, "lib/ui/base.css"),
        resolve(__dirname, "lib/ui/animations.ts"),
        resolve(__dirname, "lib/ui/dayjsLocales.ts"),
        resolve(__dirname, "lib/ui/components.ts"),
        resolve(__dirname, "lib/ui/dialog.ts"),
        resolve(__dirname, "lib/ui/drawer.ts"),
        resolve(__dirname, "lib/ui/icons.ts"),
        resolve(__dirname, "lib/ui/emotion/emotion-react.ts"),
        resolve(__dirname, "lib/ui/emotion/emotion-css.ts"),
        resolve(__dirname, "lib/ui/emotion/emotion-styled.ts"),
        resolve(__dirname, "lib/ui/logos.ts"),
        resolve(__dirname, "lib/ui/material/material.ts"),
        resolve(__dirname, "lib/ui/material/x-data-grid.ts"),
        resolve(__dirname, "lib/ui/modal.ts"),
        resolve(__dirname, "lib/ui/snackbar.ts"),
        resolve(__dirname, "lib/ui/themes.ts"),
        resolve(__dirname, "lib/ui/providers.ts"),
        resolve(__dirname, "lib/ui/widgets.ts"),
        resolve(__dirname, "lib/functions/functions.ts"),
        resolve(__dirname, "lib/patterns/patterns.ts"),
        resolve(__dirname, "lib/requests/requests.ts"),
      ],
      name: "pgv-lib",
      fileName: (format, name) => {
        if (format === "es") {
          return `${name}.js`
        }

        return `${name}.${format}`
      },
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
        },
      },
    },
  },
  esbuild: {
    supported: {
      "top-level-await": true, //browsers can handle top-level-await features
    },
  },
})
