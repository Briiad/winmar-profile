import React, {useState} from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

import { openNav } from './animation/motion'
import HamburgerNav from './HamNav'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed md:relative w-full h-24 z-50 flex justify-center items-center bg-white shadow-md'>
      <div className='container mx-auto px-8 py-4 flex justify-between text-primary-400 '>
        {/* Logo */}
        <div className='flex items-center justify-center'>
          {/* <h1 className='font-playfair font-bold text-3xl'>Winmar<span className='text-yellow-400'>.</span></h1> */}
          <img src="/Assets/Images/logo_winmar.svg" alt="Logo Winmar" className='w-24 h-12' />
        </div>

        {/* Links */}
        <HamburgerNav toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <AnimatePresence>
          {isOpen &&
            <motion.div className='absolute md:hidden grid grid-rows-5 gap-2 top-0 right-0 h-96 p-8 w-3/4 bg-primary-400 text-white' variants={openNav} initial="hidden" animate="visible" exit="exit">
              <div className='row-span-2'></div>
              <div className='row-span-3 flex flex-col items-center font-montserrat font-medium text-sm'>
                <p className=''>
                  <Link href='/'>About Winmar</Link>
                </p>
                <p className='my-8 md:my-0'>
                  <Link href='/VisiMisi'> Vision and Mission </Link>
                </p>
                <p className='my-0 md:mx-8'>
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
            </motion.div>
          }
        </AnimatePresence>

        {/* Bigger device */}
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