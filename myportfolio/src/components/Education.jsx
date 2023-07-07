import React, { useState } from 'react'

export default function Education({info}) {
    
    const [showInfo,setShowInfo] = useState(null)
    const [image, setImage] = useState(null)

    const handleInfo = (i) => {
        setShowInfo(i)
    }
    const openimg = (img) => {
        setImage(img)
    } 
    const closeimg = () => {
        setImage(null)
    } 
  return (
    <div className='w-full'>
        <h1 className='font-bold md:text-5xl text-2xl mt-16 ml-10 md:ml-44'>{info.Title}</h1>
        <div className='w-full md:mt-16 mt-5'>
            {info.info.map((edu,i)=>{
                let selected = false 
                let imgOpen = false
                if (edu.name === showInfo) {
                    selected = true
                }
                if (edu.certificate === image) {
                    imgOpen = true
                }
                return(
                    <div>
                        <div 
                            onMouseEnter={()=>handleInfo(edu.name)} 
                            onMouseLeave={()=>handleInfo(null)} 
                            className={`mb-5 ${selected === true ? 'pb-24 md:pb-32' : ' pb-5'} ${image !== null ? "hidden" : "flex flex-col"} transition-all relative z-0 mx-auto pt-5 md:pl-5 border-b-4 border-[#DA0BFF] w-10/12`} >
                            <h3 className='md:text-3xl text-xl relative z-0 font-mono'>{edu.name.toUpperCase()}</h3>
                            <div className={`${selected === true ? 'opacity-100 translate-y-20 relative z-0' : 'absolute z-0 opacity-0 translate-y-0'} transition-all  absolute top-0 z-10`}>
                                <div className='flex md:flex-row flex-col w-full -mt-10 justify-between'>
                                    <h1 className='md:text-3xl text-xl text-[#DA0BFF] relative z-0 font-bold'>{edu.academy}</h1>
                                    <p onClick={()=>openimg(edu.certificate)} className='md:mt-5 mt-2 relative z-0 text-indigo-500 cursor-pointer hover:border-b-2 md:border-b-0 border-b-2 border-indigo-500 transition-all text-base w-fit'>{info.Certificate} </p>
                                </div>
                                <p className='md:text-xl text-base mt-5'>{edu.desc}</p>
                            </div>
                        </div>
                        {imgOpen === true ? (
                            <div className='fixed left-0 right-0 top-0 bottom-0 md:py-32 py-44 bg-slate-950 h-screen w-full flex justify-center align-middle z-50'>
                                <p onClick={closeimg} className='md:text-5xl text-3xl absolute top-3 right-5 md:right-10'>x</p>
                                <img className='md:w-8/12 w-full' src={edu.certificate} alt="img" />
                            </div>
                        ): null}
                    </div>
                    
                )
            })}
        </div>
    </div>
  )
}