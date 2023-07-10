import React, { useState } from 'react'
import {Link} from 'react-scroll'
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
    
    const showLangueje = () => {
        if (showlang === false) {
            setShowNav(true)
        }else{
            setShowNav(false)
        }
    }
    
    const language = () => {
        if (info.language === "English") {
            changeLanguage("Spanish")
            setShowLang(false)
        }else if (info.language === "Spanish") {
            changeLanguage("English")
            setShowLang(false)
        }
    }
  return (
    <div className='fixed z-40 h-24 flex justify-between w-full'>
        <div className='bg-[#00000076] hidden md:flex absolute z-10 h-full w-full opacity-50'></div>
        <Link 
            to={`${info.items[0].id}`} 
            spy={true} 
            smooth={true}
            offset={50} 
            duration={500} 
            className='cursor-pointer mt-3 z-20 md:ml-10 ml-10 h-16 md:h-fit md:w-fit'>
            <img src={logo} alt="logo" />
        </Link> 
        <img onClick={handleNav} className='flex relative z-40 md:hidden h-8 w-8 mt-7 mr-12' src={vector} alt="hamburgesa" />
        <div className={`flex transition-all md:relative z-20 md:bg-transparent md:w-fit h-fit w-full top-0 md:-left-10 md:top-3 left-0 bg-[#110E2F] absolute ${showNav === false ? ' -translate-y-96 md:translate-y-0 md:opacity-100 opacity-0' : 'translate-x-0'}`}>
            <div className={`flex md:flex-row md:bg-transparent ${showNav === false ? 'pt-0' : 'pt-10 pb-20'}  md:pt-0 bg-[#110E2F] w-full flex-col md:relative absolute mt-6`}>
                {info.items.map((item,i)=>(
                    <Link 
                        to={`${item.id}`} 
                        spy={true} 
                        smooth={true}
                        offset={50} 
                        duration={500} 
                        onClick={(()=>setShowNav(false))}
                        className='md:mx-5 md:my-0 my-8 mx-auto md:text-base text-[#D9D9D9] transition-all hover:text-[#DA0BFF] text-xl cursor-pointer' 
                        key={i}>
                            {item.name}
                    </Link>
                ))}
            </div>
            <div className='relative md:mt-5 mt-6 md:ml-0 -ml-16 flex justify-end w-32 z-40'>
                <div className='z-40 md:bg-transparent md:hover:bg-[#D9D9D9] transition-all md:hover:p-1 bg-[#D9D9D9] md:p-0 p-1 rounded-full cursor-pointer relative'>
                    <img onClick={showLangueje} src={iconLanguage} className='h-8 w-8 ' alt="img" />
                </div>
                <div className={`absolute cursor-pointer transition-all py-2 px-4 rounded-full z-0 top-0 ${showlang === false ? 'translate-y-0 opacity-0' : 'translate-y-20'} ${showNav === true ? ' translate-x-10 bg-white text-black' : 'bg-[#110E2F] translate-x-0'}`}>
                    <p onClick={language}>{info.language === "English" ? "Spanish" : "Inglés"}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
