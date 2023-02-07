import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className='w-full h-24 z-10 flex justify-center items-center bg-white shadow-md'>
      <div className='container mx-auto px-8 py-4 flex justify-between text-primary-400 '>
        {/* Logo */}
        <div className='flex items-center justify-center'>
          {/* <h1 className='font-playfair font-bold text-3xl'>Winmar<span className='text-yellow-400'>.</span></h1> */}
          <img src="/Assets/Images/logo_winmar.svg" alt="Logo Winmar" className='w-24 h-12' />
        </div>
        {/* Links */}
        <div className='hidden md:flex items-center font-montserrat font-medium text-xs'>
          <p className='mr-8'>
            <Link href='/'>About Winmar</Link>
          </p>
          <p>
            <Link href='/VisiMisi'> Vision and Mission </Link>
          </p>
          <p className='mx-8'>
            <Link href='Produk'> Products </Link>
          </p>
        </div>
        <Link href='/Kontak' className='hidden md:flex items-center'>
          <motion.button whileHover={{scale: 1.15}} whileTap={{scale: 0.8}} className='border border-primary-400 rounded-sm hover:bg-primary-400 hover:text-white'>
            <p className='px-4 py-2 font-montserrat font-medium text-sm'>
              Contact Us
            </p>
          </motion.button>
        </Link>
      </div>
      
    </nav>
  )
}

export default Navbar 