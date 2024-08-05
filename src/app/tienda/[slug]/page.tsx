import PriceCard from "@/components/tienda/PriceCard"
import Link from "next/link";

let find = false;
async function getPost(slug: string) {
    const res = await fetch(`http://localhost:1337/api/tiendas/${slug}?populate=*&timestamp=${Date.now()}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Post not found');
            }
            find = true
            return res.json();
        })
        .then((res) => res.data.attributes)
        .catch((error) => {
            console.error('Error fetching post:', error);
            find = false
            return null; // Devuelve null para indicar que no se encontró el post
        });
    return res;
}

export default async function Page({
    params: { slug },
}: {
    params: { slug: string }
}) {


    const post = await getPost(slug);
    return (
        <main className="flex flex-col justify-center items-center max-w-6xl min-h-screen p-4 mx-auto text-black">
            {find
                ? (
                    <div>
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-3">
                                <img className="rounded-xl w-full" src={post.Portada.data.attributes.url} alt="" />
                                <div className="flex gap-3 overflow-x-auto">
                                    {
                                        post.Carrusel.data.map((item, index) => (
                                            <div key={index}>
                                                <img className="size-44 rounded-xl object-contain object-center" src={item.attributes.url} alt="" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <div>
                                    <h2 className="text-4xl font-black">{post.Nombre}</h2>
                                    <h4 className="text-xl opacity-65">{post.Descripcion}</h4>
                                    <PriceCard price={post.Precio} />

                                    <p className="opacity-60 text-xs max-w-xs mt-6">
                                        Cualquir duda o error que tengas puedes contactar conmigo.
                                    </p>

                                    <a href="mailto:mederos1.cuentapersonal@gmail.com" className="inline-block bg-[--mid-blue] mt-4 mx-auto text-white rounded-lg px-4 py-2 font-bold hover:bg-transparent outline hover:outline-[--mid-blue] hover:outline-2 hover:text-[--mid-blue]">
                                        Comprar
                                    </a>

                                </div>
                            </div>
                        </section>
                    </div>
                )
                : (
                    <section className='container'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                      <h2 className='text-xl font-bold text-center'>No se encontraron datos para la URL especificada</h2>
                      <Link href="/" className='text-[--mid-blue] font-medium border border-[--mid-blue] px-4 py-2 rounded-full text-sm hover:bg-[--mid-blue] hover:text-white'><i className="ri-arrow-left-s-line"></i> Volver al inicio</Link>
                    </div>
                  </section>
                )}
        </main>
    )
}