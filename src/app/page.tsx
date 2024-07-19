'use client'
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import TravelsCards from "../components/TravelsCard";
import { useEffect, useState } from "react";
import Link from "next/link";

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

export default function Home() {

  const [travelData, setTravelData] = useState<TravelData[]>([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/blogs?populate=*")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        if (Array.isArray(data)) {
          setTravelData(data);
        } else if (data && data.data) {
          setTravelData(data.data);
        } else {
          setTravelData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching travel data:", error);
        setTravelData([]);
      });
  }, []);

  const filteredData = travelData.slice(0, 3);

  return (
    <main className="flex flex-col gap-12 items-center min-h-screen p-4 w-full">
      <header className="max-w-4xl min-h-48 rounded-5xl text-center">
        <h1 className="text-[--light-blue] text-4xl sm:text-6xl font-black">FACUNDO MEDEROS</h1>
        <h2 className="text-[--light-blue] mt-4 max-w-md mx-auto">“ Viajar por el mundo es mi pasión, es lo que amo y mas me gusta, es mi estilo de vida “</h2>
      </header>
      <div className="w-full max-w-2xl sticky top-0 z-30">
        <Navbar />
      </div>
      <section className="mt-52 mb-24 w-full sm:max-w-2xl">
        <div className="text-[--mid-blue] flex justify-start flex-col">
          <h4 className="font-black text-5xl">sobre mi</h4>
          <p className="max-w-sm mt-2 opacity-50">Viajar por el mundo es mi pasión, es lo que amo y mas me gusta, es mi estilo de vida</p>
        </div>
        <div className="w-full mx-auto my-24">
        <Slider />
      </div>
      </section>
     
      <section className="py-32">
        <div className="text-[--mid-blue] flex justify-start flex-col pb-32">
          <h4 className="font-black text-5xl">viajes</h4>
          <p className="max-w-sm mt-2 opacity-50">Viajar por el mundo es mi pasión, es lo que amo y mas me gusta, es mi estilo de vida</p>
        </div>
        <div>
          {filteredData.map((item) => (
            <div key={item.id}>
              <TravelsCards
                banner={item.attributes.banner.data.attributes.url}
                title={item.attributes.title}
                desc={item.attributes.description}
                publishedAt={item.attributes.publishedAt}
                slug={item.id}
              />
              <hr className="my-16 sm:my-6" />
            </div>
          ))}

        </div>
        <div className="flex justify-center mt-12">
          <Link href="/blog" className="footer_links w-fit mx-auto">Ver todos</Link>
        </div>
      </section>
      <section className="flex flex-col gap-10 max-w-4xl mx-auto py-24">
        <div className="text-[--mid-blue] text-center">
          <h4 className="font-black text-5xl">galería</h4>
          <p className="max-w-sm mt-2 mx-auto opacity-50">Viajar por el mundo es mi pasion, es lo que amo y mas me gusta, es mi estilo de vida</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className=" sm:max-w-6xl mx-auto">
            <img className="w-full object-cover" src="https://res.cloudinary.com/dctldwa03/image/upload/v1721187841/gallery-main-img_pk5lq2.png" alt="" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 justify-center gap-y-4 sm:gap-4 sm:max-h-52 max-w-2xl mx-auto">
            <img className="max-w-[80%] mx-auto sm:max-w-52" src="https://res.cloudinary.com/dctldwa03/image/upload/v1721187840/gallery-card-img-1_oroudu.png" alt="" />
            <img className="max-w-[80%] mx-auto sm:max-w-52" src="https://res.cloudinary.com/dctldwa03/image/upload/v1721187840/gallery-card-img-2_c5jc4u.png" alt="" />
            <img className="max-w-[80%] mx-auto sm:max-w-52" src="https://res.cloudinary.com/dctldwa03/image/upload/v1721187840/gallery-card-img-3_znrks2.png" alt="" />
          </div>
          <Link href="/galeria" className="footer_links w-fit mx-auto">Ver galeria</Link>
        </div>
      </section>
      <section>
        <div className="text-[--mid-blue] text-start">
          <h4 className="font-black text-4xl text-wrap">contactarme</h4>
          <p className="max-w-xs mt-2 mx-auto opacity-50 text-wrap">si quieres contactarme puedes contactarme aquí</p>
          <div className="text-[--mid-blue] text-xl flex items-center gap-4 justify-center mt-6">
            <Link className="text-[--light-blue] hover:opacity-50" href="" target="_blank"><i className="ri-instagram-line"></i></Link>
            <Link className="text-[--light-blue] hover:opacity-50" href="" target="_blank"><i className="ri-youtube-line"></i></Link>
            <Link className="text-[--light-blue] hover:opacity-50" href="" target="_blank"><i className="ri-twitter-x-line"></i></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
