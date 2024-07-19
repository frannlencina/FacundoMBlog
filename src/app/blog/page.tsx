'use client'
import Navbar from "../components/Navbar"
import Breadcrumb from "../components/Breadcrumb"
import { useState, useEffect } from "react"
import PostCard from "../components/PostCard"

interface BannerData {
    data: {
        attributes: {
            url: string;
        }
    }
}

interface Attributes {
    title: string;
    description: string;
    publishedAt: string;
    slug: string;
    banner: BannerData;
}

interface TravelData {
    id: number;
    attributes: Attributes;
}

export default function Blog() {

    useEffect(() => {
        fetch("http://localhost:1337/api/blogs?populate=*")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data)
                if (Array.isArray(data)) {
                    setPosts(data);
                } else if (data && data.data) {
                    setPosts(data.data);
                } else {
                    setPosts([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching travel data:", error);
                setPosts([]);
            });
    }, []);


    const [posts, setPosts] = useState<TravelData[]>([]);
    return (
        <section className="mx-auto max-w-4xl min-h-screen">
            <div>
                <Navbar />
            </div>
            <div className="max-w-lg mx-auto text-center pt-12 px-4">
                <span className="inline-block border border-[--light-blue] select-none bg-white text-[--mid-blue] text-sm px-2 py-0.5 rounded-lg my-6">Posts</span>
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
            <section className="flex flex-col gap-8 py-32">
                {posts.map((item) => (
                    <div key={item.id}>
                        <PostCard
                            banner={item.attributes.banner.data.attributes.url}
                            title={item.attributes.title}
                            desc={item.attributes.description}
                            publishedAt={item.attributes.publishedAt}
                            slug={item.id}
                        />
                    </div>
                ))}
            </section>
        </section>
    )
}