import React from 'react'

const VisionMissionDesc = () => {
  return (
    <section>
      {/* Mission */}
      <div className='w-full h-full pt-48 px-36 py-12 flex items-center'>
        {/* Mission Image */}
        <div className='w-1/2 h-auto flex items-center justify-center'>
          <img src="../Assets/Images/winmar3.png" alt="Vision Mission Page Hero Image" className=' object-cover' />
        </div>
        {/* Mission Desc */}
        <div className='w-1/2 h-full flex flex-col p-8'>
          <h1 className='text-6xl font-playfair text-primary-400'>Our Mission</h1>
          <p className='mt-12 text-justify text-md font-montserrat'>Contribute to Agricultural Growth and Development Through Agricultural Industry and Services Development by Conducting a Consistent and Reliable Business</p>
        </div>
      </div>

      {/* Vision */}
      <div className='w-full h-full px-36 py-12 flex items-center'>
        {/* Vission Image */}
        <div className='w-1/2 h-auto flex items-center justify-center'>
          <img src="../Assets/Images/winmar4.png" alt="Vision Mission Page Hero Image" className='w-96 h-96 object-cover' />
        </div>
        {/* Vission Desc */}
        <div className='w-1/2 h-full flex flex-col p-8'>
          <h1 className='text-6xl font-playfair text-primary-400'>Our Vision</h1>
          <p className='mt-12 text-justify text-md font-montserrat'>Be More Efficient and Competitive to Become an Agricultural Support Company</p>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionDesc