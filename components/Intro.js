import React from 'react'

import * as GiIcons from 'react-icons/gi'

const Intro = () => {
  return (
    <section className='w-full h-auto p-12'>
      <div className='w-full h-auto px-36 pt-12 text-center'>
        <h1 className='font-playfair font-bold opacity-70 text-7xl text-primary-400'>The Product.</h1>
      </div>

      {/* Winmar Intro */}
      <div className='w-full h-full p-24 grid grid-cols-3 gap-12'>
        <div className='col-span-1 w-full h-96 flex flex-col items-center justify-center bg-primary-400 rounded-2xl shadow-md p-12'>
          <GiIcons.GiCorn className='text-8xl text-white border border-white p-4 rounded-full'/>
          <p className='font-montserrat text-center font-bold text-2xl mt-6 text-white'>Supplying Hybrid Corn Seeds</p>          
        </div>

        <div className='col-span-1 w-full h-96 flex flex-col items-center justify-center bg-primary-400 rounded-2xl shadow-md p-12'>
          <GiIcons.GiWheat className='text-8xl text-white border border-white p-4 rounded-full'/>
          <p className='font-montserrat text-center font-bold text-2xl mt-6 text-white'>Supplying Hybrid and Inbred Rice Seeds</p>          
        </div>

        <div className='col-span-1 w-full h-96 flex flex-col items-center justify-center bg-primary-400 rounded-2xl shadow-md p-12'>
          <GiIcons.GiPlantSeed className='text-8xl text-white border border-white p-4 rounded-full'/>
          <p className='font-montserrat text-center font-bold text-2xl mt-6 text-white'>Supplying Horticultural Seeds</p>          
        </div>
      </div>
      
    </section>
  )
}

export default Intro