import React from 'react'
import * as AiIcons from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='w-full h-full p-8  bg-primary-400'>
      <div className='grid grid-cols-3 gap-4 py-8 font-montserrat text-white'>
        <div>
          <img src="/Assets/Images/logo2.svg" alt="Logo Winmar" className='w-36 h-12 object-cover mb-6' />
          <p className='w-3/4 text-sm text-justify'>PT. Widji Nusantara Makmur is a national company engaged in agriculture and logistics based in Malang, Indonesia.</p>
        </div>
        <div>
          <h1 className='text-xl font-bold mb-6'>About us.</h1>
          <div className='text-sm'>
            <p className='mb-4'>Contact</p>
            <p>License & Legal Documents</p>
          </div>
        </div>
        <div>
          <h1 className='text-xl font-bold mb-6'>Connect With Us.</h1>
          <div className='flex items-center'>
            <AiIcons.AiFillFacebook className='text-2xl mr-4' />
            <AiIcons.AiFillInstagram className='text-2xl mr-4' />
            <AiIcons.AiFillTwitterCircle className='text-2xl mr-4' />
            <AiIcons.AiOutlineMail className='text-2xl mr-4' />
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center font-montserrat text-white text-xs border-t border-white p-4 '>
        <p>PT. Widji Nusantara Makmur, Malang, Indonesia</p>
        <p>Copyright © 2022 All Rights Reserved</p>
      </div>
    </section>
  )
}

export default Footer