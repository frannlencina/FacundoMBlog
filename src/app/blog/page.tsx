'use client'
import Breadcrumb from "../../components/Breadcrumb"
import { useState, useEffect } from "react"
import PostCard from "../../components/PostCard"
import { getPetition } from "@/lib/getPetition"
import TravelData from "@/lib/interfaces"
import Badge from "@/components/Badge"

export default function Blog() {

    const [posts, setPosts] = useState<TravelData[]>([]);

    useEffect(() => {
        getPetition({ collection: "blogs" })
            .then((data) => {
                if (Array.isArray(data)) {
                    setPosts(data);
                } else {
                    setPosts([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching travel data:", error);
                setPosts([]);
            });
    }, []);


    return (
        <section className="mx-auto max-w-4xl ">
            <div className="max-w-lg mx-auto text-center pt-12 px-4">
                <Badge text="Posts" />
                <h1 className="text-3xl sm:text-5xl font-black text-[--mid-blue]">Publicaciones sobre mis viajes </h1>
                <h4 className="text-[--grey] mt-4">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem </h4>
            </div>
            <div className="flex justify-center my-12">
                <Breadcrumb homeElement={'Home'}
                    separator={<span> <i className="ri-arrow-drop-right-fill"></i> </span>}
                    activeClasses='text-blue-500'
                    containerClasses='flex py-5'
                    listClasses='hover:underline mx-2 '
                    capitalizeLinks />
            </div>
            <section className="flex flex-col gap-y-12 max-[705px]:divide-y-2 rounded-none">
                {posts.map((item) => (
                        <PostCard
                            banner={item.attributes.banner.data.attributes.url}
                            title={item.attributes.title}
                            desc={item.attributes.description}
                            publishedAt={item.attributes.publishedAt}
                            slug={item.id}
                        />
                ))}
            </section>
        </section>
    )
}