'use client'
export default function Footer() {
    const jumpToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <footer className="flex flex-col gap-8 text-[--light-blue] max-w-2xl mx-auto py-24">
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
                        <a className="footer_links" href="#">Instagram</a>
                    </li>
                    <li>
                        <a className="footer_links" href="#">Youtube</a>
                    </li>
                    <li>
                        <a className="footer_links" href="#">Twitter</a>
                    </li>
                </ul>
            </div>
            <span className="mx-auto mt-12 opacity-40">Desarollador con <i className="ri-heart-3-fill"></i> por <a className="text-[--dark-blue] hover:text-[--deep-blue]" href="https://www.instagram.com/fraint.studio/" target="_blank">@FraintStudio</a></span>
        </footer>
    )
}