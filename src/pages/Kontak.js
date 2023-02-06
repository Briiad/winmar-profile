import React from 'react'
import Head from 'next/head'
import * as AiIcons from 'react-icons/ai'
import * as GoIcons from 'react-icons/go'

const Kontak = () => {
  return (
    <>
      <Head>
        <title>Kontak - Widji Nusantara Makmur</title>
        <meta name="description" content="Contacts of WINMAR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='w-full h-full'>
        <div className='w-full h-96 flex items-center justify-center bg-hero2 bg-cover bg-center'>
          <h1 className='text-7xl font-playfair text-white z-10'>
            Get Connected With Us
            <span className='text-9xl text-yellow-400'>.</span>
          </h1>
        </div>

        <div className='w-full h-full'>
          <div className='w-full h-full grid grid-cols-2 gap-8'>
            <div className='col-span-1 bg-stone-100 p-12 font-montserrat text-primary-400 '>
              <div className='flex items-center'>
                <AiIcons.AiFillPhone className='text-5xl text-primary-400 mr-12' />
                <div>
                  <p>+6285257572142 EKO WIDIASTOPO</p>
                  <p>+628133386836 HAMAM</p>
                  <p>+628133491791 TONNY</p>
                </div>
              </div>

              <div className='flex items-center my-16'>
                <AiIcons.AiOutlineMail className='text-5xl text-primary-400 mr-12' />
                <a href='mailto:widji.nusantara.makmur@gmail.com'>widji.nusantara.makmur@gmail.com</a>
              </div>

              <div className='flex items-center'>
                <GoIcons.GoLocation className='text-5xl text-primary-400 mr-12' />
                <p>Taman Kusuma 2 D18 Jl. Simp Kyai Yusuf Kota Malang</p>
              </div>
            </div>

            <div className='col-span-1 flex items-center justify-center'>
              <img src="/Assets/Images/logo.svg" alt="Logo winmar" className='opacity-5' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Kontak