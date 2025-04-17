import { createScrollbar } from "#/base";

declare global {
    interface Window {
        scrolia: {
            createScrollbar: typeof createScrollbar;
        };
    }
}

((): void => {
    window.scrolia = {
        createScrollbar,
    };
})();
