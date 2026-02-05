/* eslint-disable react/prop-types */
import {ScrollRight} from './ScrollRight'
import {Appear} from './Appear'
import img from '../assets/amico.png'

import icon1 from '../assets/gmail.png'
import icon2 from '../assets/linkedin.png'
import icon3 from '../assets/github.png'
import { Reveal } from './Reveal'

export default function Contact({info}) {
  const emailAddress = 'kathijcs@gmail.com';
  const subject = info.language === "English" ? "Portfolio contact" : "Contacto desde el portafolio";
  const body = info.language === "English" ? "Hi Katherine,\n\n" : "Hola Katherine,\n\n";

  const mailtoHref = `mailto:${emailAddress}?subject=${encodeURIComponent(
    info.language === "English" ? "Portfolio contact" : "Contacto desde el portafolio"
  )}&body=${encodeURIComponent(
    info.language === "English"
      ? "Hi Katherine,\n\n"
      : "Hola Katherine,\n\n"
  )}`;

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    emailAddress
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const linkedIn = 'https://www.linkedin.com/in/katherine-contreras/';
  const Github = 'https://github.com/katherine-j-c-s'; 

  const handleOpenLink = (link) => {
    if (link === "G") {
      window.open(Github, '_blank');
    }else{
      window.open(linkedIn, '_blank');
    }
  };
  return (
    <ScrollRight>
    <div id={`${info.id}`} className='w-full h-fit relative mt-0 flex md:flex-row flex-col-reverse justify-center'>
      <div className='bg-gradient-to-r absolute from-[#141414] via-[#332836] to-[#DA0BFF] h-full w-full opacity-50 pointer-events-none'></div>
      <div className='md:w-fit w-10/12 md:mt-12 mt-0 md:mx-0 mx-auto md:mr-44 flex md:flex-col flex-col-reverse md:my-16 relative z-30'>
        <Appear>
        <img src={img} alt="img" />
        </Appear>
      </div>
      <div className='text-base mt-32 relative z-30 font-thin mx-auto md:mx-0 w-10/12 md:w-4/12'>
        <div className='mx-auto w-fit mb-10'>
          <Reveal>
          <div className='w-fit'>
            <h1 className='font-bold md:text-5xl text-3xl mx-5'>{info.title}</h1>
            <div className='bg-[#DA0BFF] h-1 w-full md:mx-0 mx-auto md:ml-1 mt-3'></div>
          </div>
          </Reveal>
        </div>
        
        <div className='text-center'>
          <Appear>
          <p className='font-mono md:text-xl text-base mb-5'>{info.text}</p>
          </Appear>
          <Appear>
          <div className='flex w-8/12 md:mb-0 mb-10 md:mx-auto justify-evenly mt-3'>
            <a
              href={mailtoHref}
              onClick={(e) => {
                e.preventDefault();
                const w = window.open(gmailComposeUrl, '_blank');
                if (!w) window.location.href = mailtoHref;
              }}
              className='w-fit bg-[#DA0BFF] hover:-translate-y-3 transition-all cursor-pointer h-fit p-2 rounded-full '
              aria-label="Enviar email a kathijcs@gmail.com"
            >
              <img className='h-8 w-8' src={icon1} alt="mail" />
            </a>
            <div onClick={()=>handleOpenLink('L')} className='w-fit bg-[#DA0BFF] hover:-translate-y-3 transition-all cursor-pointer h-fit p-2 rounded-full '>
              <img className='h-8 w-8' src={icon2} alt="mail" />
            </div>
            <div onClick={()=>handleOpenLink('G')} className='w-fit bg-[#DA0BFF] hover:-translate-y-3 transition-all cursor-pointer h-fit p-2 rounded-full '>
              <img className='h-8 w-8' src={icon3} alt="mail" />
            </div>
          </div>
          </Appear>
        </div>
      </div>
    </div>
    </ScrollRight>
  )
}
