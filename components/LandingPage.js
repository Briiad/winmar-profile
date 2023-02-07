import React from 'react'
import { motion } from 'framer-motion'

const LandingPage = () => {
  return (
    <section className='relative w-full h-auto z-0'>
      <section className="relative h-screen flex flex-col justify-center text-white p-8 md:p-32 z-0">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
              <video className="min-w-full min-h-full absolute object-cover" autoPlay muted loop>
                <source  src="/Assets/Videos/Hero-vid.mp4" type="video/mp4" />
              </video>
          </div>
          <div className="flex flex-col z-20 ">
            <div className='font-playfair flex flex-col items-center justify-center'>
              <h1 className='text-6xl md:text-9xl border-b '>WINMAR</h1>
              <p className='mt-4 md:mt-8 text-xl md:text-3xl font-montserrat text-center'>PT . WIDJI NUSANTARA MAKMUR</p>
              <motion.button whileHover={{scale: 1.1}} className='w-36 rounded-md border border-yellow-500 flex justify-center items-center mt-8 hover:bg-yellow-500 transition ease-in-out text-yellow-500 hover:text-white'>
                <p className='font-montserrat p-4'>Know More</p>
              </motion.button>
            </div>
            {/* <p className='font-montserrat py-8 w-1/2'>PT. Widji Nusantara Makmur is a national company engaged in agriculture and logistics based in Malang, Indonesia. </p> */}
          
          </div>
          <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-10 bg-black opacity-70'></div>
      </section>
      

      {/* SVG Divider */}
      {/* <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='relative block w-full h-[150px]'>
          <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="fill-white"></path>
        </svg>
      </div> */}
    </section>
  )
}

export default LandingPage