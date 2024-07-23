import Link from "next/link"
import ExpCard from "@/components/sobre-mi/ExpCard"
import StudiesCard from "@/components/sobre-mi/StudiesCard"
import VolunCard from "@/components/sobre-mi/VolunCard"
import Navbar from "@/components/Navbar"

export default function Page() {
    return (
        <section className="max-w-3xl mx-auto">
            <Navbar />
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-y-6 sm:gap-x-8 px-4 mt-32 min-h-screen ">
                <div>
                    <div className="w-full sm:sticky sm:top-6 sm:z-30">
                        <div className="size-32">
                            <img className="rounded-xl" src="https://res.cloudinary.com/danwrsjzh/image/upload/v1721341589/Captura_de_pantalla_2024_07_11_175800_b00f55a105.png" alt="" />
                        </div>
                        <h1 className="text-3xl font-medium max-w-md mt-4">
                            Hola, Soy Facundo Mederos
                        </h1>
                        <div className="flex opacity-50 my-3 gap-3">
                            <Link className="hover:opacity-50" href='' target="_blank"> <i className="ri-instagram-line"></i></Link>
                            <Link className="hover:opacity-50" href='' target="_blank"> <i className="ri-youtube-line"></i></Link>
                            <Link className="hover:opacity-50" href='' target="_blank"> <i className="ri-twitter-x-line"></i></Link>
                        </div>
                        <ul className="list-disc opacity-50 ml-8">
                            <li>
                                <p>Licenciado en relaciones internacionales</p>
                            </li>
                            <li>
                                <p>Estudiante en licenciatura en comunicación</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-5 mt-32 sm:mt-0">
                    <h2 className="text-2xl font-medium ">
                        Pasión por comprender y aportar al mundo que nos rodea
                    </h2>
                    <div className="flex gap-3 gap-y-6 text-sm my-6">
                        <Link className="bg-[--deep-blue] text-white px-4 py-2 rounded-xl" href="">Contactame</Link>
                        <Link className="border border-[--deep-blue] text-[--deep-blue] bg-white px-4 py-2 rounded-xl" href="">Descarga CV</Link>
                    </div>
                    <hr className="mt-16" />
                    <div className="flex flex-col gap-y-10 py-16">
                        <h4 className="font-medium text-xl">Estudios</h4>
                        <StudiesCard title="Licenciado en relaciones internacionales" studie="Udelar  - FIC" date="04 - 06 - 2023" />
                        <StudiesCard title="Licenciado en relaciones internacionales" studie="Udelar  - FIC" date="04 - 06 - 2023" />
                        <StudiesCard title="Licenciado en relaciones internacionales" studie="Udelar  - FIC" date="04 - 06 - 2023" />
                    </div>
                    <div className="flex flex-col gap-5 py-16">
                        <h4 className="font-medium text-xl">Experiencia</h4>
                        <ExpCard title="Profesional en comercio exterior" description="Profesional en comercio exterior" image="" />
                        <ExpCard title="Profesional en comercio exterior" description="Profesional en comercio exterior" image="" />
                        <ExpCard title="Profesional en comercio exterior" description="Profesional en comercio exterior" image="" />
                    </div>
                    <div className="py-12">
                        <h5 className="opacity-50 text-xs font-bold relative top-1.5">Experiencia</h5>
                        <h4 className="font-medium text-xl">Voluntariados</h4>
                        <p className="opacity-50 text-sm">Me gusta aportar y ayudar en voluntariados</p>
                        <div className="flex flex-col mt-6 gap-5">
                            <VolunCard title="Canelones Junta" description="Voluntariado de ropa para ayudar con una causa" image="https://res.cloudinary.com/danwrsjzh/image/upload/v1721342000/Captura_de_pantalla_2024_07_11_175742_be7534e632.png" date="04 - 06 - 2023" />
                            <VolunCard title="Canelones Junta" description="Voluntariado de ropa para ayudar con una causa" image="https://res.cloudinary.com/danwrsjzh/image/upload/v1721342000/Captura_de_pantalla_2024_07_11_175742_be7534e632.png" date="04 - 06 - 2023" />
                            <VolunCard title="Canelones Junta" description="Voluntariado de ropa para ayudar con una causa" image="https://res.cloudinary.com/danwrsjzh/image/upload/v1721342000/Captura_de_pantalla_2024_07_11_175742_be7534e632.png" date="04 - 06 - 2023" />
                        </div>
                    </div>
                </div>
                <div className="inline-flex h-fit mx-auto gap-4 text-sm my-6 col-span-2 mt-52">
                    <Link className="bg-[--deep-blue] text-white px-4 py-2 rounded-xl" href="">Contactame</Link>
                    <Link className="border border-[--deep-blue] text-[--deep-blue] bg-white px-4 py-2 rounded-xl" href="">Descarga CV</Link>
                </div>
                <hr className="col-span-2" />
            </div>
        </section>
    )
}