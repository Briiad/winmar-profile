import React from 'react'

const CoreStrength = () => {
  return (
    <section className='w-full h-full p-36 grid grid-cols-2 items-center'>
      <div className='col-span-1 w-full h-full flex flex-col'>
        <div className='flex justify-center'>
          <img src='/Assets/Images/winmarteam1.jpeg' alt="team 1" className='w-52 h-52 border-2 shadow-xl border-primary-400 rounded-full object-cover flex justify-end' />
          <img src='/Assets/Images/winmarteam3.jpeg' alt="team 1" className='w-32 h-32 border-2 shadow-xl border-primary-400 rounded-full object-cover flex justify-end' />          
        </div>
        <img src='/Assets/Images/winmarteam2.jpeg' alt="team 2" className='w-72 h-72 border-2 shadow-xl border-primary-400 rounded-full object-cover' />
      </div>

      <div className='col-span-1 w-full h-full'>
        <h1 className='font-playfair text-6xl font-bold opacity-75 text-primary-400'>Our Strength as a Team.</h1>
        <div className='flex items-center justify-center mt-6'>
          <h1 className='w-12 h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-white rounded-full font-playfair font-bold text-xl p-6'>1</h1>
          <p className='pl-4 font-montserrat text-primary-400'>Existing Grower Partners in Several Areas in East Java and Continental Java to Meet Production Targets.</p>
        </div>

        <div className='flex items-center justify-center mt-6'>
          <h1 className='w-12 h-12 flex justify-center items-center border border-primary-400 bg-primary-400 text-white rounded-full font-playfair font-bold text-xl p-6'>2</h1>
          <p className='pl-4 font-montserrat text-primary-400'>A Team That Has Compentence and Experience in The Field of Cropps and Horticulture Seeds Production.</p>
        </div>
      </div>
    </section>
  )
}

export default CoreStrength