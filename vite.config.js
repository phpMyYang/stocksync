import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.scss",
                "resources/js/app.js",
                "resources/js/dashboard.js",
            ],
            refresh: true,
        }),
    ],
    // IDAGDAG MO ANG PART NA ITO PARA MAWALA ANG WARNINGS:
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler", // or "modern"
                silenceDeprecations: [
                    "color-functions",
                    "global-builtin",
                    "import",
                    "legacy-js-api",
                ],
            },
        },
    },
});
