import React from 'react'
import Image from 'next/image'

const VisionMissionDesc = () => {
  return (
    <section className='w-full h-full bg-secondary'>
      {/* Mission */}
      <div className='w-full h-full p-0 md:pt-48 md:px-36 md:py-12 flex items-center'>
        {/* Mission Image */}
        <div className='w-1/2 h-auto hidden md:flex items-center justify-center'>
          <Image width={540} height={540} src="../Assets/Images/winmar3.png" alt="Vision Mission Page Hero Image" className='w-1/2 h-1/2 xl:w-3/4 xl:h-3/4 object-cover' />
        </div>
        {/* Mission Desc */}
        <div className='w-full md:w-1/2 h-full flex flex-col p-8'>
          <h1 className='text-4xl md:text-6xl xl:text-8xl font-playfair text-primary-400'>Our Mission</h1>
          <p className='mt-6 md:mt-12 text-justify text-sm md:text-md xl:text-xl font-montserrat'>Contribute to Agricultural Growth and Development Through Agricultural Industry and Services Development by Conducting a Consistent and Reliable Business</p>
        </div>
      </div>

      {/* Vision */}
      <div className='w-full h-full p-0 md:pt-48 md:px-36 md:py-12 flex items-center'>
        {/* Vission Image */}
        <div className='md:w-1/2 h-auto hidden md:flex items-center justify-center'>
          <Image width={540} height={540} src="../Assets/Images/winmar4.png" alt="Vision Mission Page Hero Image" className='w-1/2 h-1/2 xl:w-3/4 xl:h-3/4 object-cover' />
        </div>
        {/* Vission Desc */}
        <div className='w-full md:w-1/2 h-auto flex flex-col p-8'>
          <h1 className='text-4xl md:text-6xl xl:text-8xl font-playfair text-primary-400'>Our Vision</h1>
          <p className='mt-6 md:mt-12 text-justify text-sm md:text-md xl:text-xl font-montserrat'>Be More Efficient and Competitive to Become an Agricultural Support Company</p>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionDesc