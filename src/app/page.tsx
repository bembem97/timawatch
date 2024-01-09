import type { Metadata } from "next"
import ContainerBox from "~/components/interface/ContainerBox"
import HomeBanner from "~/components/view/HomeBanner"
import MediaCarousel from "~/components/view/MediaCarousel"
import PersonCarousel from "~/components/view/PersonCarousel"
import homeData from "~/data/home"

export const metadata: Metadata = {
    title: "Homepage",
}

export default async function Home() {
    const data = await homeData()

    return (
        <>
            <main className="item-main flex flex-col gap-y-2">
                <HomeBanner data={data.banner} />
                <ContainerBox as="section" role="group">
                    <MediaCarousel type="movie" data={data.movie} heading="Trending Movies" />
                    <MediaCarousel type="tv" data={data.tv} heading="Trending Tv Shows" />
                    <PersonCarousel data={data.person} heading="Trending Celebrities" />
                </ContainerBox>
            </main>
        </>
    )
}
