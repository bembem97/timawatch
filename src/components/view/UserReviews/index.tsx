import { StarIcon } from "@heroicons/react/20/solid"
import React from "react"
import Chip from "~/components/interface/Chip"
import CollapseText from "~/components/interface/CollapseText"
import ContainerBox from "~/components/interface/ContainerBox"
import Icon from "~/components/interface/Icon"
import Text from "~/components/interface/Text"
import { ReviewProps } from "~/types/data/mediaReviews"

interface UserReviewsProps {
    data?: ReviewProps[]
}

const UserReviews = ({ data }: UserReviewsProps) => {
    return (
        <section>
            <div className="flex items-end gap-x-8">
                <Text variant="h2" as="h2">
                    Social
                </Text>
                <Text variant="h3">Reviews</Text>
            </div>

            <ContainerBox className="rounded-xl bg-background-light px-2.5 py-4">
                <div className="grid [--grid-area:3.5rem_1fr] grid-cols-[var(--grid-area)] grid-rows-[var(--grid-area)] gap-x-2.5">
                    <div className="col-[1/2] row-[1/2]">
                        <div className="rounded-full h-full w-full bg-red-500"></div>
                    </div>

                    <div className="col-[2/3] row-[1/2] flex flex-col gap-y-0.5">
                        <Text variant="h4">Felimon Garcia</Text>

                        <div className="flex items-center gap-x-2">
                            <Chip
                                label="4.1"
                                size="xs"
                                iconStart={<Icon size="xs" icon={StarIcon} />}
                                color="accent"
                            />
                            <Text variant="caption" className="text-foreground-mute" as="p">
                                Posted on November 1, 2023
                            </Text>
                        </div>
                    </div>

                    <div className="col-span-full row-[2/3]">
                        <CollapseText clamp={4}>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, numquam
                                consequuntur vitae rem enim repudiandae soluta suscipit. Omnis vel, error
                                dolore sequi aliquam sed quam distinctio, totam eum magnam rem. Lorem ipsum
                                dolor sit amet consectetur adipisicing elit. Perferendis, numquam consequuntur
                                vitae rem enim repudiandae soluta suscipit. Omnis vel, error dolore sequi
                                aliquam sed quam distinctio, totam eum magnam rem.
                            </Text>
                        </CollapseText>
                    </div>
                </div>
            </ContainerBox>
        </section>
    )
}

export default UserReviews
