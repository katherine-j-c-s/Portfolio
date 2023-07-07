import React from 'react'
import KateAbout from '../assets/KateAbout.png'
import elipse from '../assets/Ellipse.png'
import btn1 from '../assets/mailbtn.png'
import btn2 from '../assets/dowloadbtn.png'

export default function About({info}) {
  return (
    <div className='flex w-full md:bg-transparent bg-[#110E2F] md:pt-6 -mt-16 relative z-10 md:flex-row flex-col-reverse justify-center'>
        <div className='md:w-2/4 top-5 relative md:top-0 md:right-0 right-0 w-full flex md:justify-end md:pr-44'>
            <img className='absolute top-6 left-16 mx-auto md:w-fit w-44' src={elipse} alt="backimg" />
            <img className='relative mx-auto md:mx-0 md:w-fit w-44' src={KateAbout} alt="img" />
        </div>
        <div className='flex flex-col justify-start mt-10 md:w-2/4 w-full'>
            <div className='md:w-9/12 md:ml-0 md:px-0 px-5 w-full'>
                <div className='flex'>
                    <div className='bg-[#DA0BFF] h-1 md:w-8 w-4 mt-3'></div>
                    <p className='mx-3 md:text-xl text-base'>{info.text} </p>
                    <div className='bg-[#DA0BFF] h-1 md:w-8 w-4 mt-3'></div>
                </div>
                <h1 className='font-bold md:text-sans text-4xl mb-6'>{info.Title}</h1>
                <div className='flex flex-col md:pr-0'>
                    <p className='my-5 md:text-xl text-justify md:w-fit text-base'>{info.desc1}</p>
                    <p className='md:text-xl text-base text-justify'>{info.desc2}</p>
                </div>
                <div className='flex mt-5'>
                    <div className='flex mr-5 md:w-fit p-2 border border-[#DA0BFF] transition-all hover:bg-[#DA0BFF] hover:-translate-y-2 justify-evenly rounded-md'>
                        <p className='md:text-xl mr-2 w-fit text-base font-mono'>{info.botons[0]}</p>
                        <img src={btn1} className='h-5 w-5 mt-1' alt="btn"/>
                    </div>
                    <div className='flex md:w-fit p-2 border border-[#DA0BFF] bg-[#DA0BFF] hover:-translate-y-2 transition-all justify-evenly rounded-md'>
                        <p className='md:text-xl mr-2 text-base font-mono'>{info.botons[1]}</p>
                        <img src={btn2} className='h-5 w-5 mt-1' alt="btn"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
