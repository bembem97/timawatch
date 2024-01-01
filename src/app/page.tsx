import type { Metadata } from "next"
import Text from "~/components/interface/Text"

export const metadata: Metadata = {
    title: "Homepage",
}

export default function Home() {
    return (
        <main>
            <Text variant="h2" color="mute">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut iste delectus dolorem nemo sint
                fugiat sed magni totam alias at. Expedita minima neque molestias est consequatur accusamus
                tempore, aliquid laboriosam?
            </Text>
        </main>
    )
}
