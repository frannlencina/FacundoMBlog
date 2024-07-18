'use client'
export default function Navbar(){
    return (
        <nav className="flex items-center justify-between text-[--light-blue] px-6 py-4 mt-5 max-w-2xl mx-auto bg-white rounded-2xl">
            <a className="" href="/">Casa</a>
            <ul className="flex items-center gap-12 ">
                <li>
                    <a className="hover:text-[--mid-blue]" href="/viajes">Viajes</a>
                </li>
                <li>
                    <a className="hover:text-[--mid-blue]" href="/recorrido">Recorrido</a>
                </li>
                <li>
                    <a className="hover:text-[--mid-blue]"href="/sobre-mi">Sobre Mi</a>
                </li>
            </ul>
           <a className=" text-white px-6 py-1.5 bg-[--deep-blue] hover:bg-[--dark-blue] rounded-lg" href="/donaciones">Ayudar</a>
        </nav>
    )
}