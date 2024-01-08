import React, { CSSProperties } from "react"
import { MovieDetails } from "~/types/data/movieDetails"
import style from "./style"
import { IMAGE_URL } from "~/constants/misc"

const { base } = style()

export type HeroProps =
    | {
          backdrop_path: MovieDetails["backdrop_path"]
          genres: MovieDetails["genres"]
          id: MovieDetails["id"]
          release_date: MovieDetails["release_date"]
          runtime: MovieDetails["runtime"]
          tagline: MovieDetails["tagline"]
          title: MovieDetails["title"]
          vote_average: MovieDetails["vote_average"]
      }
    | undefined

interface HomeBannerProps {
    data: HeroProps
}

const HomeBanner = ({ data }: HomeBannerProps) => {
    return (
        <section
            className={base()}
            style={{ "--backdrop": `url(${IMAGE_URL}w1280${data?.backdrop_path})` } as CSSProperties}
        >
            HomeBanner
        </section>
    )
}

export default HomeBanner
