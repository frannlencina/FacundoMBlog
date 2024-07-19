import Link from 'next/link';
import moment from 'moment';

interface Props{
    slug: number,
    title: string,
    desc: string,
    banner: string,
    publishedAt: string,
}
export default function TravelsCards({slug, title, desc, banner, publishedAt}: Props){
    const formattedDate = moment(publishedAt).format('DD/MM/YYYY');
    return(
        <div className="flex flex-col gap-y-6 text-start sm:flex-row sm:gap-y-6 justify-between max-w-3xl items-center gap-4">
            <span className="text-[--light-blue] max-w-32">{formattedDate}</span>
            <div className="flex flex-col gap-3 max-w-[50%] ">
                <span className="text-[--mid-blue] text-lg font-bold">{title}</span>
                <span className="text-[--light-blue] text-start">{desc}</span>
            </div>
            <div>
                <Link className="footer_links" href={`/blog/${slug}`}>ver mi recorrido</Link>
            </div>
        </div>
    )
}