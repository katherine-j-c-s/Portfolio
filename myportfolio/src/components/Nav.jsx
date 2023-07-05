import React, { useState } from 'react'
import logo from '../assets/k.png'
import vector from '../assets/Vector.png'
import iconLanguage from '../assets/world-wide-web.png'

export default function Nav({changeLanguage,info}) {
    
    const [showlang, setShowLang] = useState(false)
    const [showNav,setShowNav] = useState(false)

    const handleNav = () => {
        if (showNav) {
            {console.log(showNav)}
            setShowNav(false)
        }else {
            setShowNav(true)
        }
    }
    
    const language = () => {
        console.log(info);
        if (info.language === "English") {
            changeLanguage("Spanish")
        }else if (info.language === "Spanish") {
            changeLanguage("English")
        }
    }
  return (
    <div className='absolute z-40 px-20 pt-5 flex justify-between w-full'>
        <img className='cursor-pointer md:ml-0 -ml-14 h-12 md:h-fit md:w-fit' src={logo} alt="logo" />
        <img onClick={handleNav} className='flex relative z-40 md:hidden h-8 w-8 mt-2 -mr-12' src={vector} alt="hamburgesa" />
        <div className={`flex transition-all md:relative md:bg-transparent md:w-fit h-fit w-full top-0 left-0 bg-[#110E2F] absolute ${showNav === false ? ' -translate-y-96 md:translate-y-0 md:opacity-100 opacity-0' : 'translate-x-0 '}`}>
            <div className={`flex md:flex-row md:bg-transparent ${showNav === false ? 'pt-0' : 'pt-10'}  md:pt-0 bg-[#110E2F] w-full flex-col md:relative absolute mt-6`}>
                {info.items.map((item,i)=>(
                    <p className='md:mx-5 md:my-0 my-10 mx-auto md:text-base text-xl cursor-pointer' key={i}>{item}</p>
                ))}
            </div>
            <div className='relative md:mt-5 mt-6 md:ml-0 -ml-16 flex justify-end w-32 z-40'>
                <div className='z-40 md:bg-transparent bg-[#D9D9D9] md:p-0 p-1 rounded-full cursor-pointer relative'>
                    <img onClick={()=> setShowLang(!showlang)} src={iconLanguage} className='h-8 w-8 ' alt="img" />
                </div>
                <div className={`absolute cursor-pointer transition-all bg-[#110E2F] py-2 px-4 rounded-full z-0 top-0 ${showlang === false ? 'translate-y-0 opacity-0' : 'translate-y-10'}`}>
                    <p onClick={language}>{info.language === "English" ? "Spanish" : "Inglés"}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
