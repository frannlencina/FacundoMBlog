'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import { getPetition } from "@/lib/getPetition"
import TravelData from "@/lib/interfaces"

export default function Page() {

    const [posts, setPosts] = useState<TravelData[]>([]);

    useEffect(() => {
        getPetition({ collection: "galerias" })
            .then((data) => {
                if (Array.isArray(data)) {
                    console.log(data)
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
        <section className="max-w-4xl mx-auto">
            <div className="columns-2 sm:columns-3 justify-center py-32 p-4">
                {posts.map((item, index) => (
                    <>
                        <Image
                            key={index}
                            width={145}
                            height={120}
                            className="w-full h-full rounded-2xl object-cover hover:scale-[1.03] transition-all"
                            src={item.attributes.Photo.data.attributes.url}
                            alt=""
                        />
                    </>
                ))}
            </div>

        </section>
    )
}