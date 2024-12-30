'use client'
import acmeLogo from '@/assets/logo-acme.png'
import quantLogo from '@/assets/logo-quantum.png'
import echoLogo from '@/assets/logo-echo.png'
import celestLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets/logo-pulse.png'
import apexLogo from '@/assets/logo-apex.png'
import Image from 'next/image'
import {motion} from "framer-motion"

export const LogoTicker = () => {
  return <>
  <div className='py-8 bg-white'>
    <div className='container'>
      <div className="flex overflow-hidden borderghost">
        <motion.div className="flex gap-11 flex-none" animate={{
          translateX: ['-100%', '100%'],
        }} transition={{
          repeat: Infinity, repeatType: "mirror", duration:10, ease: "easeInOut"}}>
          <Image src={acmeLogo } alt="acme logo" className='logo-ticker-image' />
          <Image src={quantLogo} alt="quant logo" className='logo-ticker-image' />
          <Image src={echoLogo} alt="echo logo" className='logo-ticker-image' />
          <Image src={celestLogo} alt="celest logo" className='logo-ticker-image' />
          <Image src={pulseLogo} alt="pulse logo" className='logo-ticker-image' />
          <Image src={apexLogo} alt="apex logo" className='logo-ticker-image' />
        </motion.div>
      </div>
    </div>  
  </div>
    </>;
};
