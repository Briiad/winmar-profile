import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full h-auto z-10 bg-white'>
      <div className='container mx-auto px-8 py-4 md:py-6 flex justify-between text-primary-400 '>
        {/* Logo */}
        <div className='flex items-center justify-center'>
          <h1 className='font-playfair font-bold text-3xl'>Winmar<span className='text-yellow-400'>.</span></h1>
        </div>
        {/* Links */}
        <div className='flex items-center font-montserrat font-medium text-sm '>
          <p className='mr-8'>
            <Link href='/'>Tentang Winmar</Link>
          </p>
          <p>
            <Link href='/VisiMisi'> Visi dan Misi </Link>
          </p>
          <p className='mx-8'>Produk</p>
        </div>
        <button className='border border-primary-400 rounded-sm'>
          <p className='px-4 py-2 font-montserrat font-medium text-sm'>
            <Link href='/Kontak'>Hubungi Kami</Link>
          </p>
        </button>
      </div>
      
    </nav>
  )
}

export default Navbar 