interface Props {
    text: string
}
export default function Badge({text}: Props){
    return(
        <div className="mx-auto w-fit my-6">
            <span className="text-[--grey] text-sm inline-block px-2 py-0.5 border border-[--light-grey] select-none bg-[#F7F7F7] rounded-lg">{text}</span>
        </div>
    )
}