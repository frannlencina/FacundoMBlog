import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='flex justify-center items-center min-h-screen max-w-2xl mx-auto'>
      <div>
        <h4 className='text-[--light-blue] text-3xl'>Upsss!</h4>
        <h2 className='text-5xl font-bold text-[--mid-blue]'>Error 404</h2>
        <p className='text-2xl opacity-40 mb-3'>Pagina no encontrada</p>
        <Link className='text-2xl font-bold opacity-40 hover:opacity-60 hover:text-[--mid-blue]' href="/"><i className="ri-arrow-left-line"></i> Volver al inicio </Link>
      </div>
    </section>
  )
}