'use client'
import Link from "next/link"
import DrawerNavbar from "./DrawerNavbar"
export default function Navbar() {
    return (
        <header className="w-full sticky top-4 z-30 mx-auto">
            <nav className="flex items-center justify-between text-[--light-blue] px-6 py-4 mt-5 max-w-3xl mx-auto bg-white rounded-2xl">
                <Link className="" href="/">Inicio</Link>
                <ul className="hidden sm:flex items-center gap-12 ">
                    <li>
                        <Link className="hover:text-[--mid-blue]" href="/sobre-mi">Sobre Mi</Link>
                    </li>
                    <li>
                        <Link className="hover:text-[--mid-blue]" href="/mochitour">Mochitour</Link>
                    </li>
                    <li>
                        <Link className="hover:text-[--mid-blue]" href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="hover:text-[--mid-blue]" href="/galeria">Galeria</Link>
                    </li>
                </ul>
                <Link className="hidden sm:block text-white px-6 py-1.5 bg-[--deep-blue] hover:bg-[--dark-blue] rounded-lg" href="/donaciones">Donaciones</Link>
                <DrawerNavbar />
            </nav>
        </header>
    )
}