import * as path from "node:path";

import { MarkdownPageEvent } from "typedoc-plugin-markdown";

/**
 * @param {import("typedoc-plugin-markdown").MarkdownApplication} app
 */
export const load = (app) => {
    app.renderer.on(MarkdownPageEvent.END, insert);
};

const vanilla = path.resolve(
    process.cwd(),
    "..",
    "..",
    "apis",
    "vanilla",
    "README.md",
);

const react = path.resolve(
    process.cwd(),
    "..",
    "..",
    "apis",
    "react",
    "README.md",
);

const reactNative = path.resolve(
    process.cwd(),
    "..",
    "..",
    "apis",
    "react-native",
    "README.md",
);

/**
 * @param {import("typedoc-plugin-markdown").MarkdownPageEvent} page
 */
const insert = (page) => {
    if (
        page.filename === vanilla ||
        page.filename === react ||
        page.filename === reactNative
    ) {
        const head = "[< Back](./../../README.md)\n\n";
        page.contents = head + page.contents;
    }
};
