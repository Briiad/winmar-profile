import React from 'react'

import { motion } from 'framer-motion'

import * as GiIcons from 'react-icons/gi'

const Intro = () => {
  return (
    <section className='w-full h-auto p-12'>
      <div className='w-full h-auto p-8 md:px-36 md:pt-12 text-center'>
        <h1 className='font-playfair font-bold text-6xl md:text-7xl text-primary-400'>The Product.</h1>
      </div>

      {/* Winmar Intro */}
      <div className='w-full h-full p-8 md:p-24 xl:p-36 grid grid-cols-1 md:grid-cols-3 gap-12'>
        <motion.div whileHover={{scale: 1.1,}} className='group col-span-1 w-full h-96 flex flex-col items-center justify-center bg-white hover:bg-primary-400 rounded-2xl shadow-md p-12 border border-primary-400 hover:border-none transition ease-in-out'>
          <GiIcons.GiCorn className='text-8xl text-primary-400 group-hover:text-white border border-primary-400 group-hover:border-white p-4 rounded-full transition ease-in-out'/>
          <p className='font-montserrat text-center font-bold text-2xl mt-6 text-primary-400 group-hover:text-white transition ease-in-out'>Supplying Hybrid Corn Seeds</p>          
        </motion.div>

        <motion.div whileHover={{scale: 1.1}} className='group col-span-1 w-full h-96 flex flex-col items-center justify-center bg-white hover:bg-primary-400 rounded-2xl shadow-md p-12 border border-primary-400 hover:border-none transition ease-in-out'>
          <GiIcons.GiWheat className='text-8xl text-primary-400 group-hover:text-white border border-primary-400 group-hover:border-white p-4 rounded-full transition ease-in-out'/>
          <p className='font-montserrat text-center font-bold text-2xl mt-6 text-primary-400 group-hover:text-white transition ease-in-out'>Supplying Hybrid and Inbred Rice Seeds</p>          
        </motion.div>

        <motion.div whileHover={{scale: 1.1}} className='group col-span-1 w-full h-96 flex flex-col items-center justify-center bg-white hover:bg-primary-400 rounded-2xl shadow-md p-12 border border-primary-400 hover:border-none transition ease-in-out'>
          <GiIcons.GiPlantSeed className='text-8xl text-primary-400 group-hover:text-white border border-primary-400 group-hover:border-white p-4 rounded-full transition ease-in-out'/>
          <p className='font-montserrat text-center font-bold text-2xl mt-6 text-primary-400 group-hover:text-white transition ease-in-out'>Supplying Horticultural Seeds</p>          
        </motion.div>
      </div>
      
    </section>
  )
}

export default Intro