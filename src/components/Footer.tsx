'use client'
import Link from "next/link";
export default function Footer() {
    const jumpToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <footer className="flex flex-col gap-8 text-[--light-blue] max-w-2xl mx-auto py-24 mt-24 p-6">
            <div className="flex min-[280px]:justify-between max-[280px]:gap-y-16 max-[280px]:flex-col-reverse">
                <span className="text-[--dark-blue] select-none opacity-50">© 2024</span>
                <button className="relative group" onClick={jumpToTop}>
                    Volver arriba
                    <span className="rounded-full px-4 py-3.5 bg-[--deep-blue] ml-2 group-hover:bg-[--mid-blue]"><i className="ri-arrow-up-line"></i></span>
                </button>
            </div>
            <div>
                <h5>Gracias por visitarme</h5>
                <h4 className="text-4xl sm:text-6xl">FACUNDO MEDEROS.</h4>
            </div>
            <div>
                <ul className="flex flex-col sm:flex-row gap-8 sm:gap-4 text-start">
                    <li>
                        <Link className="footer_links" href="#">Instagram</Link>
                    </li>
                    <li>
                        <Link className="footer_links" href="#">Youtube</Link>
                    </li>
                    <li>
                        <Link className="footer_links" href="#">Twitter</Link>
                    </li>
                </ul>
            </div>
            <span className="mx-auto mt-12 opacity-40 text-center">Desarrollado con <i className="ri-heart-3-fill"></i> por <Link className="text-[--dark-blue] hover:text-[--deep-blue]" href="https://fraint-studio.deno.dev" target="_blank">@FraintStudio</Link></span>
        </footer>
    )
}