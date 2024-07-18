interface Props{
    slug: string,
    title: string,
    desc: string,
    date: string,
}
export default function TravelsCards({slug, title, desc, date}: Props){
    return(
        <div className="flex justify-between max-w-3xl items-center gap-4">
            <div className="text-[--light-blue] text-lg">{date}</div>
            <div className="flex flex-col gap-3 max-w-[50%]">
                <span className="text-[--mid-blue] text-lg  font-bold">{title}</span>
                <span className="text-[--light-blue] text-start">{desc}</span>
            </div>
            <div>
                <a className="footer_links" href={`/${slug}`}>ver mi recorrido</a>
            </div>
        </div>
    )
}