import { ROBOTO } from "~/constants/font"
import { tv } from "tailwind-variants"
import "~/app/globals.css"
import Navbar from "~/components/global/Navbar"

const root = tv({
    slots: {
        base: [ROBOTO.variable],
        body: [],
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
                {children}
            </body>
        </html>
    )
}
