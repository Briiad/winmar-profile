import React from 'react'
import Head from 'next/head'

const Produk = () => {
  return (
    <>
      <Head>
        <title>Produk - Widji Nusantara Makmur</title>
        <meta name="description" content="Products of WINMAR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className='w-full h-screen flex items-center justify-center pt-24 bg-secondary'>
        <h1 className='text-6xl md:text-9xl font-playfair text-center text-primary-400'>
          COMING SOON!
        </h1>
      </section>
    </>
  )
}

export default Produk