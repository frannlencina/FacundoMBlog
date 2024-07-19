'use client'
import Link from 'next/link';
import moment from 'moment';

interface Props{
    slug: number,
    title: string,
    desc: string,
    banner: string,
    publishedAt: string,
}
export default function PostCard({slug, title, desc, banner, publishedAt}: Props){
    const formattedDate = moment(publishedAt).format('DD/MM/YYYY');
    return(
        <div className="flex justify-between max-w-3xl items-center gap-4">
            <div className='max-w-44'>
            <span className="relative top-8 left-4 text-xs bg-white px-2 py-0.5 rounded-lg text-[--light-blue] max-w-32">{formattedDate}</span>
                <img className=' object-cover rounded-3xl' src={banner} alt="" />
            </div>
            <div className="flex flex-col gap-3 max-w-[50%]">
                <span className="text-[--mid-blue] text-lg  font-bold">{title}</span>
                <span className="text-[--grey] text-start">{desc}</span>
            </div>
            <div>
                <Link className="footer_links" href={`/blog/${slug}`}>ver mi recorrido</Link>
            </div>
        </div>
    )
}