import logo from '@/assets/logosaas.png'
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLinkIn from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYoutube from '@/assets/social-youtube.svg'

export const Footer = () => {
  return <>
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className='inline-flex relative before:top-2 before:bottom-0 before:h-full before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B,#2FD8FE)] before:absolute'>
          <Image src={logo} height={48} width={48} alt='Логотип SaaS' className='relative' />
        </div>
        <nav className='flex flex-col md:flex-row justify-center gap-6 mt-6'>
          <a  href='#'>О нас</a>
          <a  href='#'>Особенности</a>
          <a  href='#'>Клиенты</a>
          <a  href='#'>Обновления</a>
          <a  href='#'>Помощь</a>
        </nav>
        <div className='flex justify-center gap- mt-6'>
          <SocialX />
          <SocialInsta />
          <SocialLinkIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className='mt-6'>&copy; 2024 Могла быть ваша компания. Все права защищены.</p>
      </div>
    </footer>
  </>;
};
