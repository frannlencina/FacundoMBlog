'use client'
import { useState } from "react";

interface Props {
  price: number;
}

export default function PriceCard({ price }: Props) {
  const [selectPrice, setSelectPrice] = useState(0);

  return (
    <div className="flex flex-col gap-5 mt-12">
      <div onClick={ ()=> {  setSelectPrice(1) } } className={ selectPrice == 1 ? `px-6 py-3 flex flex-col gap-2 border-solid border-black rounded-2xl border-4 max-w-full md:max-w-[65%] select-none cursor-pointer` : 'px-6 py-3 flex flex-col gap-2 border-dashed border-black rounded-2xl border-2 max-w-full md:max-w-[65%] select-none cursor-pointer'}>
        <p className="text-xl font-bold">$ {price}</p>
        <div className="flex justify-between">
          <p>Envio rapido</p>
          <p>Gratis</p>
        </div>
        <p className="text-xs opacity-60">de 24 a 48hrs</p>
      </div>
    </div>
  );
}
