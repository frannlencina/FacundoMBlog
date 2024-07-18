import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

import TravelsCards from "./components/TravelsCard";
export default function Home() {

  const travels = [
    {
      id: 1,
      title: "Travel 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
      date: "2023",
      slug: "travel-1"
    },
    {
      id: 2,
      title: "Travel 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
      date: "2023",
      slug: "travel-2"
    },
    {
      id: 3,
      title: "Travel 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
      date: "2023",
      slug: "travel-3"
    }
  ]

  return (
    <main className="flex flex-col gap-12 items-center min-h-screen p-4 w-full">
      <header className="max-w-4xl min-h-48 rounded-5xl text-center p-4">
        <h1 className="text-white text-6xl font-black">FACUNDO MEDEROS</h1>
        <h2 className="text-white mt-4 max-w-md mx-auto">“ Viajar por el mundo es mi pasión, es lo que amo y mas me gusta, es mi estilo de vida “</h2>
      </header>
      <section className="w-full">
        <Navbar />
      </section>
      <section className="mt-52 mb-24">
        <div className="text-[--mid-blue] flex justify-start flex-col">
          <h4 className="font-black text-5xl">sobre mi</h4>
          <p className="max-w-sm mt-2 opacity-50">Viajar por el mundo es mi pasión, es lo que amo y mas me gusta, es mi estilo de vida</p>
        </div>
        <div className="max-w-3xl mx-auto my-24">
         <Slider />
        </div>
      </section>
      <section>
        <div className="text-[--mid-blue] flex justify-start flex-col">
          <h4 className="font-black text-5xl">viajes</h4>
          <p className="max-w-sm mt-2 opacity-50">Viajar por el mundo es mi pasión, es lo que amo y mas me gusta, es mi estilo de vida</p>
        </div>
        <div className="my-32">
          {
            travels.map((item) => (
              <div>
                <TravelsCards title={item.title} desc={item.desc} date={item.date} slug={item.slug} />
                <hr className="my-6" />
              </div>
            ))
          }
          {/* Algunos recorridos de viajes hechos */}
        </div>
      </section>
      <section className="flex flex-col gap-10 max-w-4xl mx-auto py-24">
        <div className="text-[--mid-blue] text-center">
          <h4 className="font-black text-5xl">galería</h4>
          <p className="max-w-sm mt-2 mx-auto opacity-50">Viajar por el mundo es mi pasion, es lo que amo y mas me gusta, es mi estilo de vida</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="max-w-6xl">
            <img src="https://res.cloudinary.com/dctldwa03/image/upload/v1721187841/gallery-main-img_pk5lq2.png" alt="" />
          </div>
          <div className="flex justify-center gap-4 max-h-52 max-w-xl mx-auto">
            <img className="max-w-52" src="https://res.cloudinary.com/dctldwa03/image/upload/v1721187840/gallery-card-img-1_oroudu.png" alt="" />
            <img className="max-w-52" src="https://res.cloudinary.com/dctldwa03/image/upload/v1721187840/gallery-card-img-2_c5jc4u.png" alt="" />
            <img className="max-w-52" src="https://res.cloudinary.com/dctldwa03/image/upload/v1721187840/gallery-card-img-3_znrks2.png" alt="" />
          </div>
          <button className="footer_links w-fit mx-auto">Ver todo</button>
        </div>
      </section>
      <section>
        <div className="text-[--mid-blue] text-center">
          <h4 className="font-black text-5xl">contactarme</h4>
          <p className="max-w-xs mt-2 mx-auto opacity-50">si quieres contactarme puedes contactarme aquí</p>
        <div className="text-[--mid-blue] text-xl flex items-center gap-4 justify-center mt-6">
          <a className="text-[--light-blue] hover:opacity-50" href=""><i className="ri-instagram-line"></i></a>
          <a className="text-[--light-blue] hover:opacity-50" href=""><i className="ri-youtube-line"></i></a>
          <a className="text-[--light-blue] hover:opacity-50" href=""><i className="ri-twitter-x-line"></i></a>
        </div>
        </div>
      </section>
    </main>
  );
}
