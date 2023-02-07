import React from 'react'
import { motion } from 'framer-motion'

const Documentation = () => {
  return (
    <section className='h-full w-full'>
      <div className='flex items-center justify-center mt-24'>
        <h1 className='font-playfair text-6xl md:text-7xl text-primary-400 flex items-center text-center px-12'>"Our Hardwork, Made From Love."</h1>
      </div>
      <div className='h-full w-full max-w-7xl mx-auto gap-5 columns-2 md:columns-3 space-y-3 p-4 md:p-12'>
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc1.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc2.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc3.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc4.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc5.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc6.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc7.jpeg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc8.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc9.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc10.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc11.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc12.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc13.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc14.jpg'} alt="doc image" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc15.jpg'} alt="doc image" className='shadow-lg' />
      </div>
      
    </section>
  )
}

export default Documentation