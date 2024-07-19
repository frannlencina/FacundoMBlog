import Navbar from "@/components/Navbar"
import '../postStyles.css'
export default function PostLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="w-full max-w-2xl sticky top-4 z-30 mx-auto">
                <Navbar />
            </div>
            
            <article className="max-w-4xl mx-auto py-16 px-6">
                {children}
            </article>
        </section>
    )
}