import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import * as AiIcons from 'react-icons/ai'
import * as GoIcons from 'react-icons/go'

const Kontak = () => {
  return (
    <>
      <Head>
        <title>Kontak - Widji Nusantara Makmur</title>
        <meta name="description" content="Contacts of WINMAR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className='w-full h-full pt-24 md:pt-0 bg-secondary'>
        <div className='w-full h-96 xl:h-[540px] flex items-center justify-center bg-hero2 bg-cover bg-center'>
          <h1 className='text-6xl md:text-7xl xl:text-9xl font-playfair text-secondary z-10 text-center'>
            Get Connected With Us
            <span className='text-9xl text-yellow-400'>.</span>
          </h1>
        </div>

        <div className='w-full h-full bg-secondary'>
          <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='col-span-1 bg-secondary p-12 font-montserrat text-primary-400 '>
              <div className='flex flex-col md:flex-row items-center'>
                <AiIcons.AiFillPhone className='text-3xl md:text-5xl text-primary-400 mb-4 md:mb-0 md:mr-12' />
                <div className='text-sm md:text-base'>
                  <p>+6285257572142 / +628113783340 EKO W.</p>
                  <p>+628133386836 HAMAM</p>
                  <p>+628133491791 TONNY</p>
                </div>
              </div>

              <div className='flex flex-col md:flex-row items-center my-8 md:my-16'>
                <AiIcons.AiOutlineMail className='text-3xl md:text-5xl text-primary-400 mb-4 md:mb-0 md:mr-12' />
                <a href='mailto:widji.nusantara.makmur@winmarseed.com' className='text-sm md:text-base'>widji.nusantara.makmur@winmarseed.com</a>
              </div>

              <div className='flex flex-col md:flex-row items-center'>
                <GoIcons.GoLocation className='text-3xl md:text-5xl text-primary-400 mb-4 md:mb-0 md:mr-12' />
                <p className='text-sm md:text-base text-center md:text-left'>Taman Kusuma 2 D18 Jl. Simp Kyai Yusuf Kota Malang</p>
              </div>
            </div>

            <div className='col-span-1 hidden md:flex items-center justify-center'>
              <Image width={540} height={540} src="/Assets/Images/logo.svg" alt="Logo winmar" className='opacity-20' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Kontak