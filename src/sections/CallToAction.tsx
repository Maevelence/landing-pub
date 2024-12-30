'use client'
import ArrowRight from '@/assets/arrow-right.svg'
import starImg from '@/assets/star.png'
import springImg from '@/assets/spring.png'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
export const CallToAction = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start',]
  })

  const posY = useTransform(scrollYProgress, [0,1],[150,-150])

  return <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className='section-heading relative'>
      <h2 className="section-title">Войдите бесплатно сегодня</h2>
      <p className="section-desc mt-5">Празднуйте удовольствие от завершенности с приложением, предназначенным отмечать прогресс и мотивировать на новые попытки.</p>
      <motion.img 
      src={starImg.src} alt='Звезда' width={360} height={360} className='absolute -left-[350px] -top-[137px]' style={{translateY: posY}} />
      <motion.img 
      src={springImg.src} alt='Пружинка' height={360}width={360} className='absolute -right-[331px] -top-[19px]'
      style={{translateY: posY}} />
      </div>
      <div className="flex gap-2 mt-10 justify-center">
        <button className="btn btn-primary">Бесплатно</button>
        <button className="btn btn-text">
          <span>Узнать больше</span>
          <ArrowRight className="h-5 w-5" />
          </button>
      </div>
    </div>
  </section>;
};
