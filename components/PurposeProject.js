import React from 'react'
import Image from 'next/image'

const PurposeProject = () => {
  return (
    <section className='w-full h-full bg-secondary'>
      {/* Purpose */}
      <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8'>
        <div className='col-span-1 p-12 md:p-24 text-primary-400'>
          <h1 className='font-playfair text-4xl md:text-6xl text-center md:text-left font-bold opacity-75'>What is The Company All About.</h1>
          <div>
            <div className='flex items-center justify-start mt-6'>
              <h1 className='w-4 h-4 md:w-12 md:h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-secondary rounded-full font-playfair font-bold text-md md:text-xl p-4 md:p-6'>1</h1>
              <p className='pl-4 font-montserrat text-primary-400 text-sm md:text-base'>Running a business in agriculture, including seeds production business.</p>
            </div>
            <div className='flex items-center justify-start my-6'>
              <h1 className='w-4 h-4 md:w-12 md:h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-secondary rounded-full font-playfair font-bold text-md md:text-xl p-4 md:p-6'>2</h1>
              <p className='pl-4 font-montserrat text-primary-400 text-sm md:text-base'>Running a business in the field of land transportation in general, expedition and warehousing to support trading business.</p>
            </div>
            <div className='flex items-center justify-start mb-6'>
              <h1 className='w-4 h-4 md:w-12 md:h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-secondary rounded-full font-playfair font-bold text-md md:text-xl p-4 md:p-6'>3</h1>
              <p className='pl-4 font-montserrat text-primary-400 text-sm md:text-base'>Become a partner of other companies, both local and international companies.</p>
            </div>
            <div className='flex items-center justify-start'>
              <h1 className='w-4 h-4 md:w-12 md:h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-secondary rounded-full font-playfair font-bold text-md md:text-xl p-4 md:p-6'>4</h1>
              <p className='pl-4 font-montserrat text-primary-400 text-sm md:text-base'>Running a business in the field of agricultural services.</p>
            </div>
          </div>
        </div>

        {/* Purpose - Image */}
        <div className='col-span-1 flex items-center justify-center p-12 '>
          <Image width={960} height={960} src='/Assets/Images/winmar1.jpg' alt="we love what we do" className='w-50 h-50 md:w-[540px] md:h-[540px] xl:w-full xl:h-full object-contain xl:object-cover' />
        </div>
      </div>
      
    </section>
  )
}

export default PurposeProject