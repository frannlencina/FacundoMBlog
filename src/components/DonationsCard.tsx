import { Toaster, toast } from 'sonner'
import Link from 'next/link';
export default function DonationCard() {

    const MP_ACC_ID = process.env.NEXT_PUBLIC_MP_ACC_ID
    const MP_ACC_LINK = process.env.NEXT_PUBLIC_MP_ACC_LINK

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
                <Link href={MP_ACC_LINK ? MP_ACC_LINK : ''} target='_blank' className="relative mr-3 font-bold text-[--grey]"><svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg></Link>
            </div>
            <div className="flex flex-col gap-2 justify-start mt-5">
                <h5 className="text-[--light-grey] opacity-70">Balance actual</h5>
                <h4 className="text-3xl font-bold text-white">$45, 934.00</h4>
                <p className="text-xs text-[--light-grey]"><i className="ri-wallet-3-fill text-[--green]"></i> Recaudado para el proyecto</p>
            </div>
        </div>
    )
}