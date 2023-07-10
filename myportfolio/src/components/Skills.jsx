import React, { useState } from 'react'
import { Appear } from './Appear'

import starEmpty from '../assets/starEmpti.png'
import start from '../assets/star.png'


export default function Skills({info}) {
    const [showDetail,setShowDetail] = useState({show:false})
    const stars = [1,2,3,4,5]
    
    const handleDetail = (title,rate) => {
        setShowDetail({
            title:title,
            rate:rate,
            show:true
        })
    }
  return (
    <div id={`${info.id}`} className='w-full -mb-10 md:pt-8'>
        <Appear>
        <div className='md:shadow-[#DA0BFF] md:shadow-xl rounded-3xl py-8 mt-10 h-fit mb-10 mx-auto w-full md:w-10/12 '>
            <div className='w-fit md:mx-0 mx-auto text-center md:text-left md:ml-10 mb-10'>
                <h1 className='text-2xl md:text-5xl font-bold'>{info.title}</h1>
                <div className='md:h-0 h-1 bg-[#DA0BFF] w-44'></div>
            </div>
            <div className='flex flex-wrap justify-center mx-auto md:w-10/12'>
                {info.items.map((item,i)=>{
                    let title = ""
                    if (item.title === showDetail.title) {
                        title = item.title
                    }
                    return(
                        <div key={i} className='relative' onMouseEnter={()=> handleDetail(item.title, item.rate)} onMouseLeave={()=>setShowDetail({show:false})}>
                            <img className='h-12 m-4 w-12 relative z-0' src={item.icon} alt="img" />
                            <div className={`absolute bottom-0 transition-all rounded-md ${showDetail.show === false ? 'translate-y-0' : 'bg-[#8D8D8D] md:translate-x-0 -translate-x-10 -translate-y-24 text-slate-300 h-fit w-36 pl-4 z-10'}`}>
                                <p>{title}</p>
                                {showDetail.show !== false && title !== "" ? 
                                    <div className='flex my-3 w-fit'>
                                        {stars.map((i)=>{
                                            let img = null
                                            if (i <= showDetail.rate) {
                                                img = start
                                            }else{
                                                img= starEmpty
                                            }
                                            return(
                                            <img className='h-5 ml-1 w-5' src={img} alt="" /> 
                                            )
                                        })}
                                    </div>
                                : null}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div> 
        </Appear>
    </div>
  )
}
