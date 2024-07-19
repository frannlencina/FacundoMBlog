'use client'
import Link from "next/link"
export default function Navbar(){
    return (
        <nav className="flex items-center justify-between text-[--light-blue] px-6 py-4 mt-5 max-w-2xl mx-auto bg-white rounded-2xl">
            <Link className="" href="/">Casa</Link>
            <ul className="flex items-center gap-12 ">
                <li>
                    <Link className="hover:text-[--mid-blue]" href="/viajes">Blog</Link>
                </li>
                <li>
                    <Link className="hover:text-[--mid-blue]" href="/recorrido">Galeria</Link>
                </li>
                <li>
                    <Link className="hover:text-[--mid-blue]"href="/sobre-mi">Sobre Mi</Link>
                </li>
            </ul>
           <Link className=" text-white px-6 py-1.5 bg-[--deep-blue] hover:bg-[--dark-blue] rounded-lg" href="/donaciones">Donaciones</Link>
        </nav>
    )
}