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
        <footer className="flex flex-col gap-8 text-[--light-blue] max-w-2xl mx-auto py-24 mt-24">
            <div className="flex justify-between">
                <span className="text-[--dark-blue] select-none opacity-50">© 2024</span>
                <button className="relative group" onClick={jumpToTop}>
                    Volver arriba
                    <span className="rounded-full px-4 py-3.5 bg-[--deep-blue] ml-2 group-hover:bg-[--mid-blue]"><i className="ri-arrow-up-line"></i></span>
                </button>
            </div>
            <div>
                <h5>Gracias por visitarme</h5>
                <h4 className="text-6xl">FACUNDO MEDEROS.</h4>
            </div>
            <div>
                <ul className="flex gap-8">
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
            <span className="mx-auto mt-12 opacity-40">Desarrollado con <i className="ri-heart-3-fill"></i> por <Link className="text-[--dark-blue] hover:text-[--deep-blue]" href="https://fraint-studio.deno.dev" target="_blank">@FraintStudio</Link></span>
        </footer>
    )
}