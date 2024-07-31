import Navbar from "@/components/Navbar"
export default function Page() {
    return (
        <main>
            <Navbar />
            <section className="container py-24">
                <div className="text-center py-6 max-w-fit mx-auto mb-52">
                    <h1 className="text-[--mid-blue] font-black text-4xl sm:text-5xl">MOCHITOURS</h1>
                    <img className=" max-w-52 sm:max-w-72 float-right" src="/assets/imgs/sobre-mi/mochitour-img.png" alt="" />
                </div>
                <div className="flex gap-6 w-full">
                    <img className="max-w-80" src="/assets/imgs/sobre-mi/descubrime-img.png" alt="" />
                    <div>
                        <h2 className="subtitle mb-2">Descubrime</h2>
                        <p className="grey-p">Mi nombre es Facundo, tengo 20 años de edad, estudiante de licenciatura en relaciones internacionales, (Facultad de Derecho, Uruguay). He trabajado en diversas experiencias dentro de Uruguay como fuera de mi país, desarrollándome en el sector atención al publico como mozo, recepción en hostels, limpieza, animador y recreación infantil / adulta. Recepción de clientes y comunicación con el publico en restaurantes, empresas, contaccenter, agente bancario, tengo herramientas en desarollo digital, publicidad, planificacion y organizacion de actividades.</p>
                    </div>
                </div>
            </section>
            <section className="container flex flex-col gap-y-12 py-24">
                <div>
                    <h4 className="subtitle">¿Precisas voluntarios?</h4>
                    <p className="grey-p">Si tienes un hotel, hostal o posada, camping, eco aldea, espacio o comunidad / proyecto donde crees que podría trabajar o ser tu voluntario, ofreciéndote alguno de mis servicios, ponte en contacto sin dudarlo. PUEDO SER TU PROXIMO VOLUNTARIO</p>
                </div>
                <div>
                    <h4 className="subtitle">Servicios</h4>
                    <p className="grey-p">Puedo ofrecerte diversos servicios para que puedas optar por uno o mas de uno. Los servicios pueden ser intercambiados por hospedaje, alimentación, beneficios como viajero en formato de voluntariado, o pago económico. Lo importante es que ambos obtengamos un beneficio</p>
                </div>
            </section>
            <section className="py-24 bg-[--light-blue]">
                <div className="container text-center">
                    <h4 className="text-white text-3xl font-bold">Mis valores</h4>
                    <p className="grey-p text-white mt-4">Si tendría que definirme en palabras, podría decir sociable, liderazgo, objetivo y energético. Me gusta desafiarme a experiencias laborales diferentes, académicamente disfruto de mis carreras.. Aspirando a ser un profesional en lo teórico pero principalmente en la practica de la vida. “Entusiasta en transitar el mundo que nos rodea, intentar entenderlo y contribuir en el para que pueda ser un mundo positivo”</p>
                </div>
            </section>
            <section className="container flex flex-col gap-y-12 py-24">
                <h4 className="subtitle">AVENTURERO</h4>
                <div>
                    {/* Fotos estilo mini galeria  */}
                </div>

            </section>
        </main>
    )
}