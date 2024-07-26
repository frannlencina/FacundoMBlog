interface Props {
    title: string
    description: string
    image: string
}

export default function ExpCard({title, description, image}:Props) {
    return (
        <div className="flex flex-row gap-3 items-center border border-[--light-grey] px-4 py-2 rounded-full cursor-default">
            <div className="size-12 rounded-full bg-[--grey]">
                <img src={image} alt="" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-medium">{title}</span>
                <span className="text-xs opacity-50">{description}</span>
            </div>
        </div>
    )
}