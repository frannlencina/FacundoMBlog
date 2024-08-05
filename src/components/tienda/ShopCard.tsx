import Link from "next/link"

interface Props {
    name: String,
    brand: String,
    price: number,
    slug: String
}
export default function ShopCard({ name, brand, price, slug }: Props) {
    return (
        <Link href={`/tienda/${slug}`} className="hover:scale-105 transition-all duration-200">
            <div className="mb-3 bg-[--light-grey] p-4 rounded-xl">
                <img className="size-44 object-contain object-center" src="/assets/imgs/sobre-mi/mochitour-img.png" alt="Imagen de producto" />
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col overflow-hidden">
                    <h4 className="text-sm font-medium">{name}</h4>
                    <p className="text-xs"><span className="font-bold">Marca </span> {brand}</p>
                </div>
                <div>
                    <p className="text-sm font-bold text-nowrap uppercase">$U {price}</p>
                </div>
            </div>
        </Link>
    )
}