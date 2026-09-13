import React from "react"

type DividerProps = {
    orientation?: "horizontal" | "vertical"
}

export const Divider: React.FC<DividerProps> = ({
    orientation = "horizontal",
}) => {
    const isHorizontal = orientation === "horizontal"

    return (
        <div
            className={
                isHorizontal
                    ? "h-12 w-full self-stretch border-y border-black/10 text-black/10 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] dark:border-white/10 dark:text-white/15"
                    : "h-full w-12 self-stretch border-x border-black/10 text-black/10 bg-[repeating-linear-gradient(45deg,currentColor_0,currentColor_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] dark:border-white/10 dark:text-white/15"
            }
        />
    )
}