export default function DonationCard(){
    return(
        <div className="bg-[--mid-blue] p-6 rounded-3xl mx-auto max-w-sm">
        <div className="bg-white p-4 rounded-full flex justify-between items-center">
            <div className="text-sm">
                <span className="p-2 bg-[--mid-blue] text-white rounded-full hover:bg-[--light-blue] hover:text-[--mid-blue] cursor-pointer "><i className="ri-file-copy-line"></i></span>
                <span className="ml-2 opacity-50">0v898...d8798</span>
            </div>
           <span className="relative -top-1 mr-2 font-bold text-[--grey]">...</span>
        </div>
        <div className="flex flex-col gap-2 justify-start mt-5">
            <h5 className="text-[--light-grey] opacity-70">Balance actual</h5>
            <h4 className="text-3xl font-bold text-white">$45, 934.00</h4>
            <p className="text-xs text-[--light-grey]"><i className="ri-wallet-3-fill text-[--green]"></i> Recaudado para el proyecto</p>
        </div>
        </div>
    )
}