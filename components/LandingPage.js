import React from 'react'

const LandingPage = () => {
  return (
    <section className='relative w-full h-auto md:p-16 xl:p-24 bg-primary-400'>
      <div className='w-full h-screen grid grid-cols-2 gap-8 items-center justify-center -mt-24 mb-16'>
        <div className='col-span-1 text-4xl md:text-8xl font-bold font-playfair text-white'>
          <h1>Benih itu janji hari ini.</h1>
          <h1>Hasil esok hari.</h1>
        </div>
        
        {/* Video */}
        <div className='col-span-1 flex items-center justify-center'>
          <h1>Ini video winmar</h1>
        </div>
      </div>
      

      {/* SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='relative block w-full h-[150px]'>
          <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  )
}

export default LandingPage