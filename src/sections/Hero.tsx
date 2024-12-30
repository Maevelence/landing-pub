'use client';
import ArrowIcon from '@/assets/arrow-right.svg'
import cogImg from '@/assets/cog.png'
import cylinderImg from "@/assets/cylinder.png"
import noodleImg from '@/assets/noodle.png'
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:  heroRef,
    offset: ["start end", "end start"]
  })
  const posY = useTransform(scrollYProgress, [0,1],[150,-150])



  return (
  <section className=
  'pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip'>
    <div className="container">
        <div className='md:flex  items-center'>
        <div className='md:w-[478px]'>
          <div className="tag">Версия 1.0
          </div>
          <div>
          <h1  className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-6">Путь креативности</h1>
          </div>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">Радуйтесь достижениям с помощью приложения, предназначенного для отслеживания вашего прогресса, мотивации ваших усилий и празднования ваших успехов.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
        <button className="btn btn-primary">Бесплатно</button>
        <button className="btn btn-text">
            <span>Узнать больше</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
        </div>
      <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
      <motion.img src={cogImg.src} alt="Ваша шестеренка" className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6'
      animate={{
        translateY: [-30,30],
      }}
      transition={{
        repeat: Infinity, 
        repeatType: "mirror", 
        duration: 4,
        ease: "easeInOut"}} />
      <motion.img src={cylinderImg.src}  width={220} height={220} alt="Цилиндр вумный" className='hidden md:block -top-32 -left-32 md:absolute' 
      style={{
        translateY:posY,
      }} />
      <motion.img 
        src={noodleImg.src}  
        width={220} 
        height={220} 
        alt="Загогулина" 
        className='hidden lg:block absolute top-[415px] left-[-200px]'
        style={{
            rotate: 30,
            translateY:posY,
          }} />
      </div>
      </div>
    </div>   
  </section>
  )
};
