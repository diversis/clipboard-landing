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
                    "strong-cyan": "hsla(171, 66%, 44%,1)",
                    "strong-cyan-50": "hsla(171, 66%, 44%,0.7)",
                    "light-blue": "hsla(233, 100%, 69%,1) ",
                    "light-blue-50": "hsla(233, 100%, 69%,0.7) ",
                    "dark-grayish-blue": "hsla(210, 10%, 33%,1)",
                    "grayish-blue": "hsla(201, 11%, 66%,1)",
                },
                breakpoints: {
                    sm: "375px",
                    md: "768px",
                    xl: "1200px",
                },
                text: {
                    sm: "0.9rem",
                    base: "1.125rem",
                    xl: "1.40625rem",
                    "2xl": "1.758375rem",
                    "3xl": "2.197125rem",
                    "4xl": "2.746125rem",
                    "5xl": "3.4335rem",
                },
                boxShadow: {
                    btn: " inset 0px -5px 5px -5px rgba(0,0,0,0.7)",
                    "btn-pressed": " inset 0px 8px 5px -5px rgba(0,0,0,0.7)",
                },
            },
            rules: [
                [
                    /^text-(.*)$/,
                    ([, c], { theme }) => {
                        if (theme.colors[c]) return { color: theme.colors[c] };
                    },
                ],
                [
                    /^bg-(.*)$/,
                    ([, c], { theme }) => {
                        if (theme.colors[c])
                            return { "background-color": theme.colors[c] };
                    },
                ],
                [
                    /^fill-(.+)$/,
                    ([, c], { theme }) => {
                        if (theme.colors[c]) return { fill: theme.colors[c] };
                    },
                ],
            ],
            variants: [
                // hover:
                (matcher) => {
                    if (!matcher.startsWith("hover:")) return matcher;
                    return {
                        // slice `hover:` prefix and passed to the next variants and rules
                        matcher: matcher.slice(6),
                        selector: (s) => `${s}:hover`,
                    };
                },
                //focus
                (matcher) => {
                    if (!matcher.startsWith("focus:")) return matcher;
                    return {
                        // slice `hover:` prefix and passed to the next variants and rules
                        matcher: matcher.slice(6),
                        selector: (s) => `${s}:focus`,
                    };
                },
            ],
            shortcuts: {
                btn: "px-6 py-3 gap-4 shadow-btn rounded-full text-xl text-base text-white text-center font-bold z-[100] w-full xl:w-[18ch] transition-all",
                h2: "text-2xl xl:text-4xl text-center text-dark-grayish-blue font-semibold pb-8",
                h3: "text-lg xl:text-2xl text-dark-grayish-blue font-bold",
            },
        }),
    ],
};
