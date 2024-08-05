'use client'
import Link from 'next/link';
import moment from 'moment';

interface Props {
    slug: number,
    title: string,
    desc: String,
    banner: string,
    publishedAt: string,
}
export default function PostCard({ slug, title, desc, banner, publishedAt }: Props) {
    const formattedDate = moment(publishedAt).format('DD/MM/YYYY');
    return (
        <>
            <article className="flex flex-col min-[705px]:flex-row items-start min-[705px]:items-center justify-between w-fit mx-auto p-6">
                <div className='flex flex-col min-[705px]:flex-row min-[705px]:gap-5 items-start min-[705px]:items-center'>
                    <div>
                        <span className="relative text-xs text-gray-400 bg-stone-100 rounded-full px-1 py-0.5 top-7 -right-2 select-none">{formattedDate}</span>
                        <img className="size-32 min-[705px]:size-44 object-cover object-center rounded-xl" src={banner} alt="" />
                    </div>
                    <div className="max-w-xs py-6 min-[705px]:p-6 mx-auto">
                        <h4 className="text-[--mid-blue] text-2xl font-bold mb-3">{title}</h4>
                        <p className="grey-p text-wrap truncate line-clamp-3">{desc}</p>
                    </div>
                </div>
                <div className="inline-flex">
                    <Link className="footer_links" href={`/blog/${slug}`}>
                        Ver mi recorrido
                    </Link>
                </div>
            </article>
        </>
    )
}