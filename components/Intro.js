import React from 'react'

import * as GiIcons from 'react-icons/gi'

const Intro = () => {
  return (
    <section className='w-full h-auto p-12'>
      {/* About Winmar */}
      <div className='w-full h-full flex items-center justify-center px-72 tracking-wide pb-12 font-playfair'>
        <h1 className='font-bold text-4xl opacity-80 text-center text-primary-400'>PT. Widji Nusantara Makmur is a national company engaged in agriculture and logistics based in Malang, Indonesia. </h1>
      </div>

      {/* Winmar Processing */}
      <div className='w-full h-full grid grid-cols-2 gap-8 items-center justify-center px-36 py-12 font-montserrat'>
        <h1 className='col-span-1 font-medium text-md text-primary-400'>This company has Tooling Processing in Kab. Kediri. Our company has a variety of businesses in the field of Agriculture.</h1>
        <div className='col-span-1 flex flex-col'>
          <div className='flex mb-4 items-center'>
            <div className='border border-primary-400 bg-primary-400 rounded-full p-4'>
              <GiIcons.GiCorn className='text-4xl text-white ' />
            </div>
            <h1 className='p-4 text-primary-400 font-medium text-md'>80% Corn Production Speed</h1>
          </div>

          <div className='flex mt-4'>
            <div className='border border-primary-400 bg-primary-400 rounded-full p-4'>
              <GiIcons.GiWheat className='text-4xl text-white ' />
            </div>
            <h1 className='p-4 text-primary-400 font-medium text-md'>20% Rice Production Speed</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro