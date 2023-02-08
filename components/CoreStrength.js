import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const CoreStrength = () => {
  return (
    <section className='w-full h-full p-12 md:p-36 grid grid-cols-1 items-center bg-secondary'>
      {/* For Bigger Device */}
      <div className=' col-span-1 w-full h-full mt-8 md:mt-0'>
        <h1 className='font-playfair text-4xl md:text-6xl font-bold opacity-75 text-primary-400 text-center'>Our Strength as a Team.</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 xl:p-16 mt-8 md:mt-0'>
          <div className='col-span-1 flex flex-col items-center text-center p-4'>
            <div className='flex'>
              <Image width={640} height={640} src='/Assets/Images/collaboration.png' className='w-24 h-24 object-cover' />
              <Image width={640} height={640} src='/Assets/Images/indonesia.png' className='w-24 h-24 object-cover' />
            </div>
            <p className='p-2 2xl:p-12 font-montserrat text-primary-400 text-sm md:text-base 2xl:text-lg'>Existing Grower Partners in Several Areas in East Java and Continental Java to Meet Production Targets.</p>
          </div>

          <div className='col-span-1 flex flex-col items-center text-center p-4'>
            <Image width={640} height={640} src='/Assets/Images/meeting.png' className='w-24 h-24 object-cover' />
            <p className='p-2 2xl:p-12 font-montserrat text-primary-400 text-sm md:text-base 2xl:text-lg'>A Team That Has Compentence and Experience in The Field of Cropps and Horticulture Seeds Production.</p>
          </div>
        </div>
      </div>

      {/* The Picture */}
      <div className='relative h-full w-auto'>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          initialSlide={2}
          modules={[EffectCoverflow, Pagination]}
          className='p-8'
        >
          <SwiperSlide>
            <Image width={960} height={960} src='/Assets/Images/winmarteam3.jpeg' alt='the teams' className='w-56 h-48 md:w-[540px] md:h-96 object-cover' />
          </SwiperSlide>

          <SwiperSlide>
            <Image width={960} height={960} src='/Assets/Images/winmarteam2.jpeg' alt='the teams' className='w-56 h-48 md:w-[540px] md:h-96 object-cover' />
          </SwiperSlide>

          <SwiperSlide>
            <Image width={960} height={960} src='/Assets/Images/winmarteam1.jpeg' alt='the teams' className='w-56 h-48 md:w-[540px] md:h-96 object-cover' />
          </SwiperSlide>

          <SwiperSlide>
            <Image width={960} height={960} src='/Assets/Images/winmarteam4.jpg'  alt='the teams'className='w-56 h-48 md:w-[540px] md:h-96 object-cover' />
          </SwiperSlide>

          <SwiperSlide>
            <Image width={960} height={960} src='/Assets/Images/winmarteam5.JPG'  alt='the teams'className='w-56 h-48 md:w-[540px] md:h-96 object-cover' />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default CoreStrength