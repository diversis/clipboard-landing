import UnoCSS from "unocss/vite";
import { presetAttributify, presetUno, presetWebFonts } from "unocss";

export default {
    plugins: [
        UnoCSS({
            presets: [
                presetAttributify({
                    /* preset options */
                }),
                presetUno(),
                presetWebFonts({
                    provider: "google", // default provider
                    fonts: {
                        // these will extend the default theme
                        sans: "Roboto",
                        mono: ["Fira Code", "Fira Mono:400,700"],
                        // custom ones
                        "Bai-Jamjuree": [
                            {
                                name: "Bai Jamjuree",
                                weights: ["400", "600"],
                                italic: false,
                            },
                            {
                                name: "sans-serif",
                                provider: "none",
                            },
                        ],
                    },
                }),
                // ...custom presets
            ],
            theme: {
                colors: {
                    "strong-cyan": "hsl(171, 66%, 44%)",
                    "light-blue": "hsl(233, 100%, 69%) ",
                },
                breakpoints: {
                    sm: "375px",
                    md: "768px",
                    xl: "1440px",
                },
            },
        }),
    ],
};
