import Navbar from "@/components/Navbar"
import '../postStyles.css'
export default function PostLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Navbar />
            <article className="max-w-4xl mx-auto py-16 px-6">
                {children}
            </article>
        </section>
    )
}