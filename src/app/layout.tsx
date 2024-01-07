import { ROBOTO } from "~/constants/font"
import { tv } from "tailwind-variants"
import "~/app/globals.css"
import Navbar from "~/components/global/Navbar"
import SideNav from "~/components/global/SideNav"
import Footer from "~/components/global/Footer"

const root = tv({
    slots: {
        base: [ROBOTO.variable],
        body: ["layout"],
    },
})

const { base, body } = root()

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={base()}>
            <body suppressHydrationWarning={true} className={body()}>
                <Navbar />
                <SideNav />
                {children}

                <Footer />
            </body>
        </html>
    )
}
