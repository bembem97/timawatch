import type { Config } from "tailwindcss"
import { BREAKPOINTS } from "./src/constants/misc"
import container from "@tailwindcss/container-queries"
import ui from "@headlessui/tailwindcss"
import color from "tailwindcss/colors"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: BREAKPOINTS,
        container: {
            center: true,
            padding: {
                DEFAULT: "0.5rem",
            },
        },
        extend: {
            fontFamily: {
                mono: ["var(--font-roboto-mono)"],
            },
            zIndex: {
                appBar: "1100",
                drawer: "1200",
                modal: "1300",
            },
            aspectRatio: {
                portrait: "100 / 150",
            },
            transitionProperty: {
                "grid-areas": "grid-template-rows, grid-template-columns",
            },
            colors: {
                foreground: {
                    DEFAULT: color.neutral[50],
                    mute: color.neutral[300],
                },
                background: {
                    DEFAULT: color.neutral[900],
                    light: color.neutral[800],
                    dark: color.neutral[950],
                },
                accent: {
                    dark: color.yellow[700],
                    DEFAULT: color.yellow[600],
                    light: color.yellow[500],
                    foreground: color.yellow[50],
                },
            },
            boxShadow: {
                glass: "inset 1px 1px 1px 2px hsl(0 50% 99% / 0.06), inset -1px -1px 1px 2px hsl(0 50% 1% / 0.16)",
                "elevated-glass":
                    "inset 1px 1px 1px 2px hsl(0 50% 99% / 0.06), inset -1px -1px 1px 2px hsl(0 50% 1% / 0.16), 0 2px 2px 1px hsl(0 50% 1% / 0.35)",
            },
        },
    },
    plugins: [ui, container],
}
export default config
