import React from 'react'
import Image from 'next/image'

const CoreStrength = () => {
  return (
    <section className='w-full h-full p-12 md:p-36 grid grid-cols-1 md:grid-cols-2 items-center bg-secondary'>
      {/* For Mobile Device */}
      <div className='block md:hidden col-span-1 w-full h-full mt-8 md:mt-0'>
        <h1 className='font-playfair text-4xl md:text-6xl font-bold opacity-75 text-primary-400 text-center md:text-left'>Our Strength as a Team.</h1>
        <div className='flex items-center justify-center mt-6'>
          <h1 className='w-4 h-4 md:w-12 md:h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-secondary rounded-full font-playfair font-bold text-md md:text-xl p-4 md:p-6'>1</h1>
          <p className='pl-4 font-montserrat text-primary-400 text-sm md:text-base'>Existing Grower Partners in Several Areas in East Java and Continental Java to Meet Production Targets.</p>
        </div>

        <div className='flex items-center justify-center mt-6'>
          <h1 className='w-4 h-4 md:w-12 md:h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-secondary rounded-full font-playfair font-bold text-md md:text-xl p-4 md:p-6'>2</h1>
          <p className='pl-4 font-montserrat text-primary-400 text-sm md:text-base'>A Team That Has Compentence and Experience in The Field of Cropps and Horticulture Seeds Production.</p>
        </div>
      </div>

      <div className='col-span-1 w-full h-full flex flex-col'>
        <div className='flex justify-center'>
          <Image width={960} height={540} src='/Assets/Images/winmarteam1.jpeg' alt="team 1" className='w-52 h-52 xl:w-72 xl:h-72 border-2 shadow-xl border-primary-400 rounded-full object-cover flex justify-end' />
          <Image width={960} height={540} src='/Assets/Images/winmarteam3.jpeg' alt="team 1" className='w-32 h-32 xl:w-48 xl:h-48 border-2 shadow-xl border-primary-400 rounded-full object-cover flex justify-end' />          
        </div>
        <Image width={960} height={540} src='/Assets/Images/winmarteam2.jpeg' alt="team 2" className='w-72 h-72 xl:w-96 xl:h-96 border-2 shadow-xl border-primary-400 rounded-full object-cover' />
      </div>

      {/* For Bigger Device */}
      <div className='hidden md:block col-span-1 w-full h-full mt-8 md:mt-0'>
        <h1 className='font-playfair text-4xl md:text-6xl font-bold opacity-75 text-primary-400 text-center md:text-left'>Our Strength as a Team.</h1>
        <div className='flex items-center justify-center mt-6'>
          <h1 className='w-4 h-4 md:w-12 md:h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-secondary rounded-full font-playfair font-bold text-md md:text-xl p-4 md:p-6'>1</h1>
          <p className='pl-4 font-montserrat text-primary-400 text-sm md:text-base'>Existing Grower Partners in Several Areas in East Java and Continental Java to Meet Production Targets.</p>
        </div>

        <div className='flex items-center justify-center mt-6'>
          <h1 className='w-4 h-4 md:w-12 md:h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-secondary rounded-full font-playfair font-bold text-md md:text-xl p-4 md:p-6'>2</h1>
          <p className='pl-4 font-montserrat text-primary-400 text-sm md:text-base'>A Team That Has Compentence and Experience in The Field of Cropps and Horticulture Seeds Production.</p>
        </div>
      </div>
    </section>
  )
}

export default CoreStrength