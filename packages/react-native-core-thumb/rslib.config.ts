import { defineConfig } from "@rslib/core";

import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
    lib: [
        {
            format: "esm",
            bundle: false,
            source: {
                tsconfigPath: "./tsconfig.json",
            },
            output: {
                distPath: {
                    root: "./dist/esm",
                },
            },
        },
        {
            format: "cjs",
            bundle: false,
            dts: {
                distPath: "./dist/types",
            },
            source: {
                tsconfigPath: "./tsconfig.cjs.json",
            },
            output: {
                distPath: {
                    root: "./dist/cjs",
                },
            },
        },
    ],
    output: {
        sourceMap: true,
        target: "web",
    },
    plugins: [pluginReact()],
});
