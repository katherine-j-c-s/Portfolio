import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { MdOutlineInstallDesktop } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import icon1 from '../assets/gmail.png'
import icon2 from '../assets/linkedin.png'
import icon3 from '../assets/github.png'
import { Reveal } from './Reveal';
import TypingText from './TypingText';

export default function Home({info}) {
  const [text,setText] = useState()
  useEffect(()=>{
    setText(info.text)
  },[info])

  const handleOpenLink = (link) => {
    if (link === "G") {
      window.open(Github, '_blank');
    } else {
      window.open(linkedIn, '_blank');
    }
  };

  const handleOpenGmail = () => {
    const emailAddress = 'kathijcs@gmail.com';
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };

  const linkedIn = 'https://www.linkedin.com/in/katherine-contreras/';
  const Github = 'https://github.com/katherine-j-c-s'; 

  return (
    <div id={`${info.id}`} className='w-full min-h-screen relative overflow-hidden'>
      {/* Gradient Background */}
      <div className='bg-gradient-to-r absolute z-10 from-[#141414] via-[#332836] to-[#DA0BFF] h-full w-full opacity-50'></div>
      
      {/* Main Content Container */}
      <div className='flex flex-col md:flex-row justify-center items-center w-full h-full relative pt-10 md:pt-0'>
        
        {/* Text & Info Container */}
        <div className='relative w-full md:w-1/2 flex flex-col justify-center items-center md:items-start z-20 px-6 md:px-12 md:pl-16 pt-10 md:pt-0'>
          {/* Position Title */}
          <div className='w-full flex justify-center md:justify-start'>
            <Reveal>
              <TypingText
                text={info.position}
                startDelay={1200} 
                speed={100}      
                className="md:text-5xl text-3xl mb-2 font-bold text-center md:text-left"
              />
            </Reveal>
          </div>
          
          {/* Purple Line */}
          <div className='w-full flex justify-center md:justify-start'>
            <Reveal> 
              <div className='bg-[#DA0BFF] h-1 w-48 md:w-72 mt-3'></div>
            </Reveal>
          </div>
          
          {/* Skills Tags */}
          <div className='w-full mt-7'>
            <Reveal> 
              <div className='flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mt-3'>
                <div className='w-fit text-sm md:text-base hover:shadow-md hover:shadow-[#DA0BFF] cursor-pointer transition-all ease-in-out hover:-translate-y-1 h-fit py-2 px-4 rounded-md bg-[#0000006f]'>
                  <p>React || React Native</p>
                </div>
                <div className='w-fit text-sm md:text-base hover:shadow-md hover:shadow-[#DA0BFF] cursor-pointer transition-all ease-in-out hover:-translate-y-1 h-fit py-2 px-4 rounded-md bg-[#0000006f]'>
                  <p>Javascript</p>
                </div>
                <div className='w-fit text-sm md:text-base hover:shadow-md hover:shadow-[#DA0BFF] cursor-pointer transition-all ease-in-out hover:-translate-y-1 h-fit py-2 px-4 rounded-md bg-[#0000006f]'>
                  <p>Node.js</p>
                </div>
                <div className='w-fit text-sm md:text-base hover:shadow-md hover:shadow-[#DA0BFF] cursor-pointer transition-all ease-in-out hover:-translate-y-1 h-fit py-2 px-4 rounded-md bg-[#0000006f]'>
                  <p>Phyton</p>
                </div>
              </div>
            </Reveal>
          </div>
          
          {/* Soft Skills Text */}
          <div className='w-full my-5'>
            <Reveal> 
              <p className='text-sm md:text-base max-w-lg text-center md:text-left'>
                {info.softSkills}
              </p>
            </Reveal>
          </div>
          
          {/* Navigation Buttons */}
          <div className='w-full'>
            <Reveal> 
              <div className='flex flex-wrap justify-center md:justify-start gap-4 mt-3'>
                {info.buttons.map((item, index) => {
                  let icon = [<MdOutlineInstallDesktop/>, <GrContact/>];
                  let link = ["projects","contact"];
                  return(
                    <Link 
                      key={index}
                      to={`${link[index]}`} 
                      spy={true} 
                      smooth={true}
                      offset={0} 
                      duration={500}>
                        <div className='w-fit flex items-center text-sm md:text-base justify-center text-white hover:shadow-md hover:text-black hover:shadow-[#000000] cursor-pointer transition-all hover:-translate-y-1 ease-in-out h-fit py-2 px-5 rounded-md bg-[#DA0BFF]'>
                          <p>{item}</p>
                          <div className='ml-2'>
                            {icon[index]}
                          </div>
                        </div>
                    </Link> 
                  )
                })}
              </div>
            </Reveal>
          </div>
          
          {/* Social Media Icons */}
          <div className='w-full mt-6 mb-8 md:mb-0'>
            <Reveal> 
              <div className='flex justify-center md:justify-start gap-4 mt-3'>
                <div onClick={handleOpenGmail} className='cursor-pointer p-3 hover:shadow-md hover:shadow-[#000000] transition-all ease-in-out hover:-translate-y-1 rounded-full bg-[#DA0BFF]'>
                  <img className='h-5 w-5 md:h-7 md:w-7' src={icon1} alt="mail" />
                </div>
                <div onClick={()=>handleOpenLink('L')} className='cursor-pointer p-3 hover:shadow-md hover:shadow-[#000000] transition-all ease-in-out hover:-translate-y-1 rounded-full bg-[#DA0BFF]'>
                  <img className='h-5 w-5 md:h-7 md:w-7' src={icon2} alt="linkedin" />
                </div>
                <div onClick={()=>handleOpenLink('G')} className='cursor-pointer p-3 hover:shadow-md hover:shadow-[#000000] transition-all ease-in-out hover:-translate-y-1 rounded-full bg-[#DA0BFF]'>
                  <img className='h-5 w-5 md:h-7 md:w-7' src={icon3} alt="github" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        
        {/* Animation Container */}
        <div className="relative z-20 w-full md:w-1/2 h-52 md:h-screen flex items-end justify-center">
          <DotLottieReact
            src="https://lottie.host/1d7a2dc1-3f3f-4717-9e18-7c327bfc1a9a/18P3KVvPUn.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  )
}