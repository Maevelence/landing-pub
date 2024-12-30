'use client'
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {motion} from 'framer-motion'
import React from "react";

const testimonials = [
  {
    text: "Это мгновенно привлекло опытного дизайнера, всегда находящегося в поиске инновационных инструментов.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Производительность нашей команды резко возросла с тех пор, как мы начали использовать этот инструмент. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Это приложение полностью изменило то, как я управляю своими проектами и сроками их выполнения.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Планирование и проведение мероприятий еще никогда не было таким простым. Это приложение помогает мне отслеживать всё, гарантируя, что ничто не ускользнет от внимания.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "Возможности настройки и интеграции этого приложения на высшем уровне.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Внедрение этого приложения для нашей команды упростило управление проектами и улучшило коммуникацию по всем направлениям.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "С помощью этого приложения мы можем легко назначать задачи, отслеживать прогресс и управлять документами в одном месте.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Его удобный интерфейс и надежные функции удовлетворяют наши разнообразные потребности.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstCol = testimonials.slice(0,3)
const seconCol = testimonials.slice(3,6)
const thirdCol = testimonials.slice(6,9)

const TestimCol = (props: { classname?: string; testimonals: typeof testimonials}) =>(
  <div 
      className={twMerge("flex flex-col gap-6 borderghost", props.classname)}>
        {props.testimonals.map(({text,imageSrc, name, username}) => (
            <div className="card" key={name}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image src={imageSrc} alt={name} height={40} width={40} className="h-10 w-10 rounded-full" />
              </div>

              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">{name}</div>
                <div className="tracking-tight leading-5">{username}</div>
              </div>
            </div>
          
    ))}
    
        </div>
)
export const Testimonials = () => {
  return <section className="bg-white">
      <div className="container">
        <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">Рекомендации</div>
        </div>
        <h2 className="section-title mt-5">Что говорят наши клиенты</h2>
        <p className="section-desc mt-5">От интуитивного дизайна к мощным особенностям, наше приложение стало важным инструментом для пользователей вокруг всего света.</p>
        </div>
        <motion.div className="flex justify-center gap-6 mt-10">
          <TestimCol testimonals={firstCol}  />   
          <TestimCol testimonals={seconCol} classname="hidden lg:flex" />  
          <TestimCol testimonals={thirdCol} classname="hidden md:flex"  />  
        </motion.div>
      </div>
  </section>;
};
