import { tv } from "tailwind-variants"

const tabStyle = tv({
    slots: {
        tabContainer: "tab__container",
        tab: "tab",
        tabList: "tab__list",
        tabPanels: "tab__panels",
        tabPanel: "tab__panel",
    },

    variants: {
        selected: {
            true: {
                tab: "tab--selected",
            },
        },
    },
})

export default tabStyle
