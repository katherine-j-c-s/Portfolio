import React, { useEffect, useState } from 'react'
import Kate from '../assets/KateHome.png'
import icon1 from '../assets/gmail.png'
import icon2 from '../assets/linkedin.png'
import icon3 from '../assets/github.png'
import { Reveal } from './Reveal';
import { ScrollRight } from './ScrollRight';

export default function Home({info}) {
  const [text,setText] = useState()
  useEffect(()=>{
    setText(info.text)
  },[info])
  return (
    <div id={`${info.id}`} className='w-full h-fit relative'>
      <ScrollRight>
        <div className='bg-gradient-to-r absolute z-10 from-[#141414] via-[#332836] to-[#DA0BFF] h-full w-full opacity-50'></div>
        <div className='md:flex h-fit pt-24  align-bottom md:flex-row flex-col justify-center text-center md:text-justify w-full relative'>
          <div className='relative w-full md:w-fit mt-10 md:mt-52 z-20 h-fit'>
            <Reveal> 
              <p className='md:text-2xl text-xl mb-4 ml-10 md:ml-1'>{text}</p>
            </Reveal>
            <Reveal>
              <h1 className='md:text-6xl text-3xl md:ml-0 ml-10 font-bold'>{info.name}</h1>
            </Reveal>
            <Reveal> 
              <h2 className='md:text-3xl text-2xl md:ml-1 ml-10 mt-8 font-bold'>{info.position}</h2>
            </Reveal>
            <Reveal> 
              <div className='bg-[#DA0BFF] h-1 w-52 ml-10 md:mx-0 mx-auto md:ml-1 mt-3'></div>
            </Reveal>
            <Reveal> 
              <div className='flex md:w-52 w-full md:mx-0 ml-12 justify-evenly mt-3'>
                <div className='w-fit cursor-pointer h-fit p-2 rounded-full bg-[#DA0BFF] '>
                  <img className='h-8 w-8' src={icon1} alt="mail" />
                </div>
                <div className='w-fit cursor-pointer h-fit p-2 rounded-full bg-[#DA0BFF] '>
                  <img className='h-8 w-8' src={icon2} alt="mail" />
                </div>
                <div className='w-fit cursor-pointer h-fit p-2 rounded-full bg-[#DA0BFF] '>
                  <img className='h-8 w-8' src={icon3} alt="mail" />
                </div>
              </div>
            </Reveal>
          </div>
          <img className='relative z-0 w-full md:w-4/12 md:mx-0 mx-auto md:h-full h-80' src={Kate} alt="img" />
        </div>
      </ScrollRight>
    </div>
  )
}
