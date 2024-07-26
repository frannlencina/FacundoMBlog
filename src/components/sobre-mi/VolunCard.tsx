interface Props {
    title: string
    description: string
    date: string
    image: string
}
export default function VolunCard({ title, description, date, image}: Props) {
    return (
        <div className="flex flex-row gap-3 items-center border border-[--light-grey] px-4 py-2 rounded-2xl cursor-default">
            <div className="size-12">
            <img className=" object-cover rounded-xl bg-[--grey]" src="https://res.cloudinary.com/danwrsjzh/image/upload/v1721342000/Captura_de_pantalla_2024_07_11_175742_be7534e632.png" alt="" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-medium">Profesional en comercio exterior</span>
                <span className="text-xs opacity-50">Profesional en comercio exterior</span>
            </div>
        </div>
    )
}