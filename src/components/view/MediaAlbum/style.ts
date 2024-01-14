import { tv } from "tailwind-variants"
import tabStyle from "~/components/interface/Tab/style"

const mediaAlbumStyle = tv({
    extend: tabStyle,
    slots: {
        tabContainer: [
            "px-0",
            "grid",
            "items-center",
            "grid-cols-1",
            "2xl:grid-cols-[max-content_1fr]",
            "grid-rows-[repeat(2,max-content)_minmax(10rem,1fr)]",
            "2xl:grid-rows-[max-content_minmax(10rem,1fr)]",
        ],
        tabList: ["2xl:col-[2/3]", "2xl:row-[1/2]", "2xl:ml-6", "px-0"],
        tab: [],
        tabPanel: ["px-0"],
        tabPanels: ["col-span-full", "2xl:row-[2/3]", "self-stretch"],
        albumItem: ["overflow-x-auto", "overflow-y-hidden", "flex", "gap-x-2", "pb-2"],
    },
})

export default mediaAlbumStyle
