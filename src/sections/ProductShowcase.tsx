'use client'
import prodImg from '@/assets/product-image.png' 
import pyraImg from '@/assets/pyramid.png'
import tubeImg from '@/assets/tube.png'
import Image from 'next/image';
import {motion,useScroll,useTransform} from "framer-motion"
import { useRef } from 'react';

export const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const posY = useTransform(scrollYProgress,[0,1],[150,-150])

  return <>
  <section ref={sectionRef} className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
    <div className="container">
      <div className='section-heading'>
      <div className='flex justify-center'>
        <div className='tag'>Повысьте продуктивность</div>
      </div>
        <h2 className='section-title'>Лучший способ следить за прогрессом</h2>
        <p className='section-desc mt-5'>Без усилий превращайте свои идеи в полноценно функционирующие и отзывчивые SaaS-сайты за минуты с нашими шаблонами
        </p>
        </div>
        <div className='relative'>
        <Image src={prodImg} alt="Сайт" className='mt-10' />
        <motion.img 
          src={pyraImg.src} 
          alt="Пирамида" 
          height={262} 
          width={262} 
          className='absolute -right-48 -top-32' 
          style={{
          translateY: posY,
        }} />
        <motion.img src={tubeImg.src} alt="Труба" height={248} width={248} className='hidden md:block absolute  bottom-24 -left-36' style={{
          translateY: posY,
        }} />
        </div>
    </div>
    
  </section>
  </>;
};
