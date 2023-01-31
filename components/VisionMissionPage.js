import React from 'react'

const VisionMissionPage = () => {
  return (
    <section className='w-full h-full'>
      <div className='relative'>
        <div className='absolute w-full h-96 bg-black opacity-40 z-10'></div>
        <img src="../Assets/Images/winmar2.jpg" alt="Vision Mission Page Hero Image" className='w-full h-96 object-cover' />
      </div>

      {/* Mission */}
      <div className='w-full h-full px-36 py-20 flex items-center'>
        {/* Mission Image */}
        <div className='w-1/2 h-auto'>
          <img src="../Assets/Images/winmar2.jpg" alt="Vision Mission Page Hero Image" className='w-96 h-96 object-cover' />
        </div>
        {/* Mission Desc */}
        <div className='w-1/2 h-full flex flex-col p-8'>
          <h1 className='text-6xl font-bold font-playfair text-primary-400'>Our Mission</h1>
          <p className='mt-12 text-justify text-md font-montserrat'>Contribute to Agricultural Growth and Development Through The Development of Agricultural Industry and Services by Conducting a Consistent and Reliable Business</p>
        </div>
      </div>

      {/* Vision */}
      <div className='w-full h-full px-36 py-20 flex items-center'>
        {/* Vission Image */}
        <div className='w-1/2 h-auto'>
          <img src="../Assets/Images/winmar2.jpg" alt="Vision Mission Page Hero Image" className='w-96 h-96 object-cover' />
        </div>
        {/* Vission Desc */}
        <div className='w-1/2 h-full flex flex-col p-8'>
          <h1 className='text-6xl font-bold font-playfair text-primary-400'>Our Vission</h1>
          <p className='mt-12 text-justify text-md font-montserrat'>Efficient and Competitive Agricultural Support Company</p>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionPage