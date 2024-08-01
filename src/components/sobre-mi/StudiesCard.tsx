interface Props {
    title: string,
    studie: string,
    date: string
}
export default function StudiesCard({ title, studie, date }: Props) {
    return (
        <div className="divide-x-2 divide-black cursor-default max-w-sm ">
            <h4 className="text-md font-medium">{title}</h4>
            <div className="flex justify-between opacity-50 px-2">
                <span className="text-xs">
                    {studie}
                </span>
                <span className="text-xs font-bold">
                    {date}
                </span>
            </div>
        </div>
    )
}