'use client'
import Navbar from "../../components/Navbar"
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
        <section className="mx-auto max-w-4xl min-h-screen">
            <div className="w-full max-w-2xl sticky top-4 z-30 mx-auto">
                <Navbar />
            </div>
            <div className="max-w-lg mx-auto text-center pt-12 px-4">
                <Badge text="Posts" />
                <h1 className="text-5xl font-black text-[--mid-blue]">Publicaciones sobre mis viajes </h1>
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
            <section className="grid grid-cols-2 sm:flex sm:flex-col sm:gap-8 py-32">
                {posts.map((item) => (
                    <div key={item.id}>
                        <PostCard
                            banner={item.attributes.banner.data.attributes.url}
                            title={item.attributes.title}
                            desc={item.attributes.description}
                            publishedAt={item.attributes.publishedAt}
                            slug={item.id}
                        />
                        <hr className="mx-auto my-16 max-w-[70%]" />
                    </div>

                ))}
            </section>
        </section>
    )
}