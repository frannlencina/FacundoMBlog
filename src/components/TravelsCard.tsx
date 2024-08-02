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
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 items-center sm:max-w-3xl max-w-[70%] mx-auto border border-[--light-blue] rounded-3xl p-5">
            <span className="relative text-[--light-blue] max-w-32">{formattedDate}</span>
            <div className="flex flex-col mb-3 max-w-[80%] sm:col-span-2">
                <span className="text-[--mid-blue] text-lg font-bold truncate">{title}</span>
                <span className="text-[--light-blue] text-start truncate ">{desc}</span>
            </div>
            <div>
                <Link className="bg-[--mid-blue] text-white px-4 py-2 rounded-full w-fit mx-auto" href={`/blog/${slug}`}>leer más</Link>
            </div>
        </div>
    )
}