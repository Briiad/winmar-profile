import React from 'react'
import { motion } from 'framer-motion'

const Documentation = () => {
  return (
    <section className='h-full w-full'>
      <div className='flex items-center justify-center mt-24'>
        <h1 className='font-playfair text-7xl text-primary-400'>Our Work From the Scratch!</h1>
      </div>
      <div className='h-full w-full max-w-7xl mx-auto gap-5 columns-3 space-y-3 p-12'>
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc1.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc2.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc3.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc4.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc5.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc6.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc7.jpeg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc8.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc9.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc10.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc11.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc12.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc13.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc14.jpg'} alt="" className='shadow-lg' />
        <motion.img whileHover={{scale: 1.05}} src={'/Assets/Images/Documentations/doc15.jpg'} alt="" className='shadow-lg' />
      </div>
      
    </section>
  )
}

export default Documentation