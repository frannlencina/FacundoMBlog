import { Toaster, toast } from 'sonner'

export default function DonationCard() {

    const MP_ACC_ID = process.env.NEXT_PUBLIC_MP_ACC_ID
    const copyText = () => {
        if (MP_ACC_ID) {
            navigator.clipboard.writeText(MP_ACC_ID);
            toast.success("Copiado correctamente", { duration: 2000, position: 'top-center' });
        }else{
            toast.error("Error al copiar el ID", { duration: 2000, position: 'top-center' });
        }
    }
    return (
        <div className="bg-[--mid-blue] p-6 rounded-3xl mx-auto max-w-sm">
            <Toaster />
            <div className="bg-white p-2 rounded-full flex justify-between items-center">
                <div className="text-sm flex items-center">
                    <button onClick={copyText} className="px-2.5 py-2 bg-[--mid-blue] text-white rounded-full hover:bg-[--light-blue] hover:text-[--mid-blue] cursor-pointer "><i className="ri-file-copy-line"></i></button>
                    <p className="inline-block ml-2 opacity-50  max-[252px]:max-w-[50px] max-w-[150px] truncate">{MP_ACC_ID ? MP_ACC_ID : 'Cargando...' }</p>
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