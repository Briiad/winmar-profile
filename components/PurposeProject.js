import React from 'react'

const PurposeProject = () => {
  return (
    <section className='w-full h-full bg-stone-50'>
      {/* Purpose */}
      <div className='w-full h-full grid grid-cols-2 gap-8'>
        <div className='col-span-1 p-24 text-primary-400'>
          <h1 className='font-playfair text-6xl font-bold opacity-75'>We love What We Do.</h1>
          <div className=''>
            <div className='flex items-center justify-center mt-6'>
              <h1 className='w-12 h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-white rounded-full font-playfair font-bold text-xl p-6'>1</h1>
              <p className='pl-4 font-montserrat text-primary-400'>Running a business in agriculture, including seeds production business.</p>
            </div>
            <div className='flex items-center justify-center my-6'>
              <h1 className='w-12 h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-white rounded-full font-playfair font-bold text-xl p-6'>2</h1>
              <p className='pl-4 font-montserrat text-primary-400'>Running a business in the field of land transportation in general, expedition and warehousing to support trading business.</p>
            </div>
            <div className='flex items-center justify-center mb-6'>
              <h1 className='w-12 h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-white rounded-full font-playfair font-bold text-xl p-6'>3</h1>
              <p className='pl-4 font-montserrat text-primary-400'>Become a partner of other companies, both local and international companies.</p>
            </div>
            <div className='flex items-center justify-center'>
              <h1 className='w-12 h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-white rounded-full font-playfair font-bold text-xl p-6'>4</h1>
              <p className='pl-4 font-montserrat text-primary-400'>Running a business in the field of agricultural services.</p>
            </div>
          </div>
        </div>

        {/* Purpose - Image */}
        <div className='col-span-1 flex items-center justify-center p-12 '>
          <img src='../Assets/Images/winmar1.png' alt="we love what we do" className='w-[450px] h-[450px] object-cover' />
        </div>
      </div>
      
    </section>
  )
}

export default PurposeProject