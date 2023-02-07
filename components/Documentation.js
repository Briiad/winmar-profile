import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import doc1 from '/public/Assets/Images/Documentations/doc1.jpg'
import doc2 from '/public/Assets/Images/Documentations/doc2.jpg'
import doc3 from '/public/Assets/Images/Documentations/doc3.jpg'
import doc4 from '/public/Assets/Images/Documentations/doc4.jpg'
import doc5 from '/public/Assets/Images/Documentations/doc5.jpg'
import doc6 from '/public/Assets/Images/Documentations/doc6.jpg'
import doc7 from '/public/Assets/Images/Documentations/doc7.jpeg'
import doc8 from '/public/Assets/Images/Documentations/doc8.jpg'
import doc9 from '/public/Assets/Images/Documentations/doc9.jpg'
import doc10 from '/public/Assets/Images/Documentations/doc10.jpg'
import doc11 from '/public/Assets/Images/Documentations/doc11.jpg'
import doc12 from '/public/Assets/Images/Documentations/doc12.jpeg'
import doc13 from '/public/Assets/Images/Documentations/doc13.jpeg'
import doc14 from '/public/Assets/Images/Documentations/doc14.jpeg'
import doc15 from '/public/Assets/Images/Documentations/doc15.jpg'

const Documentation = () => {
  return (
    <section className='h-full w-full bg-secondary'>
      <div className='flex items-center justify-center pt-24'>
        <h1 className='font-playfair text-6xl md:text-7xl text-primary-400 flex items-center text-center px-12'>Our Hardwork, Made From Love.</h1>
      </div>
      <div className='h-full w-full max-w-7xl mx-auto gap-5 columns-2 md:columns-3 space-y-3 p-4 md:p-12'>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc1} alt="doc image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc2} alt="doc image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc3} alt="doc image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc4} alt="doc image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc5} alt="doc image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc6} alt="doc image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc7} alt="doc image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc8} alt="doc image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc9} alt="doc image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc10} alt="doc image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc11} alt="doc image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc12} alt="dc image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc13} alt="do image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc14} alt="do image" className='shadow-lg' /></motion.div>
        <motion.div whileHover={{scale: 1.05}}><Image src={doc15} alt="doc image" className='shadow-lg' /></motion.div>
      </div>
      
    </section>
  )
}

export default Documentation