import Navbar from "@/components/Navbar"
import Link from "next/link"
import StudiesCard from "@/components/sobre-mi/StudiesCard"
import ExpCard from "@/components/sobre-mi/ExpCard"
import VolunCard from "@/components/sobre-mi/VolunCard"

import ServicesDetails from "@/components/sobre-mi/ServicesDetails"
import ServicesData from "@/lib/ServicesData.json"

export default function Page() {
    return (
        <main>
            <Navbar />
            <section id="profesionalSection" className="container p-4">
                <div className="text-center py-24 mx-auto">
                    <h1 className="text-5xl font-black">Sobre mi</h1>
                    <p className="grey-p max-w-sm mx-auto">Pretendo mixturar mis pasiones de vida con mi profesión para hacer de ello un mundo mejor</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-x-6 py-32 ">
                    <img className="max-w-80" src="/assets/imgs/sobre-mi/profesional-img.png" alt="Imagen Facundo Mederos" />
                    <div>
                        <h2 className="subtitle text-black">Conóceme como profesional</h2>
                        <p className="grey-p">A mis 19 años de edad me propuse construir un camino profesional estudiando, comprendiendo y aportando al mundo una licenciatura en relaciones internacionales.</p>
                        <span className="inline-block opacity-50 text-xs mt-3"> <i className="ri-pushpin-2-line"></i> Formando en la Universidad de la republica Facultad de de Derecho.</span>
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row gap-x-8 py-32">
                    <div>
                        <h2 className="subtitle text-black">Servicios Profesionales en Relaciones Internacionales</h2>
                        <p className="grey-p">Brindo servicios especializados en comercio internacional, derechos humanos, diplomacia y gestión en diversas áreas. Contacta para charlas informativas o colaboración.</p>
                        <div className="flex flex-col gap-y-3 mt-8">
                            {
                                ServicesData.map(item => (
                                    <ServicesDetails name={item.name} description={item.description} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <img className="max-w-72" src="/assets/imgs/sobre-mi/descubrime-img.png" alt="Imagen Facundo Mederos" />
                    </div>
                </div>

            </section>
            <section className="container p-4">
                <div id="expSection" className="text-center py-32 max-w-xl mx-auto">
                    <h2 className="subtitle text-black">Pasión por comprender y aportar al mundo que nos rodea</h2>
                    <p className="grey-p">Puedes contar conmigo para  un intercambio cultural, consultoría, voluntariado, proyecto, o gestionar un emprendimiento estaré abierto a escucharte</p>
                </div>
                <div className="mx-auto w-fit py-24">
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
            </section>
        </main>
    )
}