import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, Pagination, Navigation } from "swiper";

const Activity = () => {
  return (
    <section className='relative w-full h-full bg-secondary'>
      <h1 className='flex items-center justify-center font-playfair font-bold text-6xl md:text-7xl text-center md:text-left text-primary-400 pt-12'>THE PROJECTS.</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="w-full h-full "
      >
        <SwiperSlide className='p-8 md:px-24 md:py-8 xl:px-36 xl:py-12'>
          <div className='w-full h-full p-4 md:py-24 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='col-span-1 flex flex-col'>
              <h1 className='font-montserrat font-bold opacity-70 text-4xl md:text-6xl text-primary-400'>Corn Seed Projects.</h1>
              <p className='p-0 pt-6 md:py-8 md:pr-12 font-montserrat text-sm md:text-lg text-justify text-primary-400'>
                Hybrid corn seed projects involve the creation of new corn varieties by crossing two genetically different inbred lines of corn. This results in offspring that display improved traits, such as higher yields, improved pest and disease resistance, and better adaptation to different growing conditions, compared to the parent plants.
              </p>

            </div>

            <div className='col-span-1 relative h-full w-full'>
              <Swiper 
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className='w-full h-full'>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/corn1.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/corn2.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/corn3.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/corn4.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/corn5.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className='p-8 md:px-24 md:py-8 xl:px-36 xl:py-12'>
          <div className='w-full h-full p-4 md:py-24 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='col-span-1 flex flex-col'>
              <h1 className='font-montserrat font-bold opacity-70 text-4xl md:text-6xl text-primary-400'>Vegetable Seed Projects.</h1>
              <p className='p-0 pt-6 md:py-8 md:pr-12 font-montserrat text-sm md:text-lg text-justify text-primary-400'>
                Hybrid vegetable seed projects involve the development and production of new and improved varieties of hybrid vegetable seeds. These projects are similar to hybrid corn seed projects in that they involve the crossing of two genetically different parent plants to produce offspring with improved traits.
              </p>
            </div>

            <div className='col-span-1 relative h-full w-full'>
              <Swiper 
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className='w-full h-full'>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/veg1.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/veg2.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/veg3.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/veg4.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/veg5.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='p-8 md:px-24 md:py-8 xl:px-36 xl:py-12'>
          <div className='w-full h-full p-4 md:py-24 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='col-span-1 flex flex-col'>
              <h1 className='font-montserrat font-bold opacity-70 text-4xl md:text-6xl text-primary-400'>Processing Units.</h1>
              <p className='p-0 pt-6 md:py-8 md:pr-12 font-montserrat text-sm md:text-lg text-justify text-primary-400'>Our Proccessing Site located at <span className='font-bold'>Kediri, East Java.</span> Site processing for hybrid seed is a critical aspect of the production of hybrid seeds, and it is essential for ensuring the quality and consistency of the final product. The success of hybrid seed production depends on the efficient and effective execution of the various steps involved in site processing.</p>
            </div>

            <div className='col-span-1 relative h-full w-full'>
              <Swiper 
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className='w-full h-full'>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/processing1.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/processing2.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/processing3.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/processing4.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
                <SwiperSlide className='p-4 md:p-8'>
                  <Image width={960} height={540} src='/Assets/Images/Activity/processing5.jpg' alt='Processing Unit' className='w-[540px] h-96 object-cover'/>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Activity