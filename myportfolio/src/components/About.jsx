import React from 'react'
import { Reveal } from './Reveal'
import KateAbout from '../assets/KateAbout.png'
import elipse from '../assets/Ellipse.png'
import btn1 from '../assets/mailbtn.png'
import btn2 from '../assets/dowloadbtn.png'
import { Appear } from './Appear'

export default function About({info}) {
  return (
    <div  id={`${info.id}`} className='flex w-full md:bg-transparent bg-[#110E2F] md:pt-16 relative md:flex-row flex-col-reverse justify-center'>
        <div className='md:w-2/4 top-0 relative md:-top-10 md:right-0 right-0 w-full flex md:justify-end md:pr-44'>
            <img className='absolute left-6 top-10 md:top-20 md:left-auto md:w-fit w-8/12' src={elipse} alt="backimg" />
            <img className='relative mx-auto md:mx-0 md:left-5 md:w-fit w-8/12' src={KateAbout} alt="img" />
        </div>
        <div className='flex flex-col justify-start mt-10 md:w-2/4 w-full'>
            <div className='md:w-9/12 md:ml-0 md:px-0 px-5 w-full'>
                <Appear>
                    <div className='flex'>
                        <div className='bg-[#DA0BFF] h-1 md:w-8 w-4 mt-3'></div>
                        <p className='mx-3 md:text-xl text-base'>{info.text} </p>
                        <div className='bg-[#DA0BFF] h-1 md:w-8 w-4 mt-3'></div>
                    </div>
                </Appear>
                <Appear>
                <h1 className='font-bold md:text-sans text-4xl mb-6'>{info.Title}</h1>
                </Appear>
                <Appear>
                <div className='flex flex-col md:pr-0'>
                    <p className='my-5 md:text-xl text-justify md:w-fit text-base'>{info.desc1}</p>
                    <p className='md:text-xl text-base text-justify'>{info.desc2}</p>
                </div>
                </Appear>
                <div className='flex mt-5'>
                    <Reveal>
                    <div className='flex mr-5 md:w-fit p-2 border border-[#DA0BFF] transition-all hover:bg-[#DA0BFF] hover:-translate-y-2 justify-evenly rounded-md'>
                        <p className='md:text-xl mr-2 w-fit text-base font-mono'>{info.botons[0]}</p>
                        <img src={btn1} className='h-5 w-5 mt-1' alt="btn"/>
                    </div>
                    </Reveal>
                    <Reveal>
                    <div className='flex md:w-fit p-2 border border-[#DA0BFF] bg-[#DA0BFF] hover:-translate-y-2 transition-all justify-evenly rounded-md'>
                        <p className='md:text-xl mr-2 text-base font-mono'>{info.botons[1]}</p>
                        <img src={btn2} className='h-5 w-5 mt-1' alt="btn"/>
                    </div>
                    </Reveal>
                </div>
            </div> 
            
        </div>
    </div>
  )
}
