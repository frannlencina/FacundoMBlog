'use client'
import Link from 'next/link';
import moment from 'moment';

interface Props {
    slug: number,
    title: string,
    desc: string,
    banner: string,
    publishedAt: string,
}
export default function PostCard({ slug, title, desc, banner, publishedAt }: Props) {
    const formattedDate = moment(publishedAt).format('DD/MM/YYYY');
    return (
        <div className="flex flex-col justify-start sm:flex-row  max-w-3xl items-start sm:items-center sm:justify-between gap-y-6 sm:gap-4 px-4">
            <div className='max-w-44 flex flex-col justify-start items-start'>
                <span className="relative top-8 w-fit left-4 text-xs bg-white px-2 py-0.5 rounded-lg text-[--light-blue] max-w-32 select-none">{formattedDate}</span>
                <img className=' object-cover rounded-3xl' src={banner} alt="" />
            </div>
            <div className="flex flex-col gap-3 min-[790px]:max-w-[50%] min-[640px]:max-w-[35%]">
                <span className="text-[--mid-blue] text-lg  font-bold">{title}</span>
                <span className="text-[--grey] text-start">{desc}</span>
            </div>
            <div>
                <Link className="footer_links flex-wrap" href={`/blog/${slug}`}>ver mi recorrido</Link>
            </div>
        </div>
    )
}