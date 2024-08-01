interface Props {
    name: string,
    description?: string,
}
export default function ServicesDetails({name, description}: Props){
    return(
        <div className="w-fit text-sm">
            <h4 className="font-medium opacity-70">{name}</h4>
            <p className="grey-p">{description}</p>
            <hr className="max-w-[80% opacity-50]" />
        </div>
    )
}