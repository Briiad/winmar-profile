import React from 'react'
import { motion } from 'framer-motion'
import * as AiIcons from 'react-icons/ai'

import { idleArrow } from './animation/motion'

const LandingPage = () => {
  return (
    <section className='relative w-full h-auto z-0'>
      <section className="relative h-screen flex flex-col justify-center text-secondary p-8 md:p-32 z-0">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
              <video className="min-w-full min-h-full absolute object-cover" autoPlay muted loop>
                <source  src="/Assets/Videos/hero.mp4" type="video/mp4" />
              </video>
          </div>
          <div className="flex flex-col z-20 ">
            <div className='font-playfair flex flex-col items-center justify-center'>
              <h1 className='text-6xl md:text-9xl border-b '>WINMAR</h1>
              <p className='mt-4 md:mt-8 text-xl md:text-3xl font-montserrat text-center'>PT . WIDJI NUSANTARA MAKMUR</p>
              <motion.button whileHover={{scale: 1.1}} variants={idleArrow} animate="visible" className='w-36 md:w-48  flex justify-center items-center mt-8 '>
                <p className='p-4 rounded-full border border-yellow-500 hover:bg-yellow-500 transition ease-in-out text-yellow-500 hover:text-secondary text-xl md:text-4xl'><AiIcons.AiOutlineArrowDown /></p>
              </motion.button>
            </div>
            {/* <p className='font-montserrat py-8 w-1/2'>PT. Widji Nusantara Makmur is a national company engaged in agriculture and logistics based in Malang, Indonesia. </p> */}
          
          </div>
          <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-10 bg-black opacity-70'></div>
      </section>
    </section>
  )
}

export default LandingPage