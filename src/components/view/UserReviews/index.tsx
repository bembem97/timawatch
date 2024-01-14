import { StarIcon } from "@heroicons/react/20/solid"
import React, { ReactNode } from "react"
import { CardMedia } from "~/components/interface/Card"
import Chip from "~/components/interface/Chip"
import CollapseText from "~/components/interface/CollapseText"
import ContainerBox from "~/components/interface/ContainerBox"
import Icon from "~/components/interface/Icon"
import Text from "~/components/interface/Text"
import { IMAGE_URL } from "~/constants/misc"
import getDateFormat from "~/functions/getDateFormat"
import getRandomNumber from "~/functions/getRandomNumber"
import { ReviewProps } from "~/types/data/mediaReviews"

interface UserReviewsProps {
    data: ReviewProps[]
}

const UserReviews = ({ data }: UserReviewsProps) => {
    if (data.length === 0) {
        return (
            <section>
                <div className="flex items-end gap-x-8">
                    <Text variant="h2" as="h2">
                        Social
                    </Text>
                    <Text variant="h3">Reviews</Text>
                </div>

                <Box>
                    <Text variant="h3" className="text-danger-foreground block text-center">
                        No Reviews
                    </Text>
                </Box>
            </section>
        )
    }

    const random = getRandomNumber(data.length)
    const {
        author_details: { avatar_path, name, rating, username },
        content,
        created_at,
    } = data[random]

    return (
        <section>
            <div className="flex items-end gap-x-8">
                <Text variant="h2" as="h2">
                    Social
                </Text>
                <Text variant="h3">Reviews</Text>
            </div>

            <Box>
                <div className="grid [--grid-area:3.5rem_1fr] grid-cols-[var(--grid-area)] grid-rows-[var(--grid-area)] gap-x-2.5">
                    <div className="col-[1/2] row-[1/2] rounded-full overflow-hidden bg-gradient-to-br from-background-light to-background-dark border-none border-transparent">
                        <CardMedia
                            className="h-full w-full bg-cover"
                            alt={name}
                            src={`${IMAGE_URL}original${avatar_path}`}
                            width={100}
                            height={150}
                        />
                    </div>

                    <div className="col-[2/3] row-[1/2] flex flex-col gap-y-0.5">
                        <Text variant="h4">{username}</Text>

                        <div className="flex items-center gap-x-2">
                            <Chip
                                label={rating}
                                size="xs"
                                iconStart={<Icon size="xs" icon={StarIcon} />}
                                color="accent"
                            />
                            <Text variant="caption" className="text-foreground-mute" as="p">
                                Posted on {getDateFormat(created_at, { dateFormat: "full-date-long-month" })}
                            </Text>
                        </div>
                    </div>

                    <div className="col-span-full row-[2/3] min-h-32">
                        <CollapseText clamp={4}>
                            <Text>{content}</Text>
                        </CollapseText>
                    </div>
                </div>
            </Box>
        </section>
    )
}

export default UserReviews

function Box({ children }: { children: ReactNode }) {
    return <ContainerBox className="rounded-xl bg-background-light px-2.5 py-4">{children}</ContainerBox>
}
