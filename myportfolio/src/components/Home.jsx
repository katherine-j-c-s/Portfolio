import React from 'react'
import Typewriter from "typewriter-effect";
import Kate from '../assets/KateHome.png'
import icon1 from '../assets/gmail.png'
import icon2 from '../assets/linkedin.png'
import icon3 from '../assets/github.png'

export default function Home({info}) {
  return (
    <div className=' z-10 relative h-80'>
        <div className='bg-gradient-to-r absolute from-[#141414] via-[#332836] to-[#DA0BFF] h-full w-full opacity-50'></div>
        <div className='relative h-80 w-full z-10'>
          <div className='bg-gradient-to-r top-80 absolute from-[#141414] via-[#332836] to-[#DA0BFF] h-full w-full opacity-50'></div>
        </div>
        <div className='md:flex md:mt-11 -mt-10 md:flex-row flex-col justify-center text-center md:text-justify w-full md:justify-between md:px-32'>
          <div className='relative z-20 -mt-40'>
            <div className='md:text-2xl text-xl mb-4 ml-1'>
              <Typewriter onInit={(typewriter)=> {
                typewriter.typeString(`${info.text}`)
                .start();
                }}
              />
            </div>
            <h1 className='md:text-6xl text-2xl font-bold'>{info.name}</h1>
            <h2 className='md:text-3xl text-2xl ml-1 mt-8 font-bold'>{info.position}</h2>
            <div className='bg-[#DA0BFF] h-1 w-52 md:mx-0 mx-auto md:ml-1 mt-3'></div>
            <div className='flex md:w-52 w-8/12 md:mx-0 mx-auto justify-evenly mt-3'>
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
          </div>
          <img className='md:-mt-96 -mt-4 w-fit md:mx-0 mx-auto md:h-fit h-80' src={Kate} alt="img" />
        </div>
        
    </div>
  )
}
