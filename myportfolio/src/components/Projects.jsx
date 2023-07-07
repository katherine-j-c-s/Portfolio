import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import ReactCardFlip from 'react-card-flip'
//import ReactCardFlip from 'react-card-flip';

export default function Projects({info}) {
    const [isFlipped,setIsFlipped] = useState({item:null,flip:false})
    
    const openLinkInNewTab = (url) => {
        window.open(`${url}`, '_blank');
      };

    const handleFlip = (i) => {
        if (isFlipped.flip) {
            setIsFlipped({item:null,flip:false})
        }else{
            setIsFlipped({item:i,flip:true})
        }
    }
  return (
    <div className='w-full bg-black py-10 h-fit relative md:mt-32 mt-10'>
        {console.log(info)}
        <div className='md:w-fit md:ml-52 md:text-left text-center '>
            <h1 className='font-bold md:text-5xl text-3xl'>{info.Title}</h1>
            <div className='bg-[#DA0BFF] h-1 md:w-96 w-44 mt-6 md:mx-0 mx-auto'></div>
        </div>
        <div className='flex md:flex-row flex-col w-full md:justify-evenly justify-center'>
            {info.projects.map((pr,i)=>{
                let selected = false
                if (isFlipped.item == i) {
                    selected = true
                }
                return(
                    <div className='text-center'>
                        <div className="relative md:mt-32 mt-12 md:w-fit w-full mx-auto">
                            <ReactCardFlip isFlipped={selected} flipDirection="horizontal">
                                <div className="rounded-3xl md:shadow-[#DA0BFF] shadow-lg bg-[#110E2F] mx-auto md:mx-0 md:w-80 w-10/12 md:pt-52 pt-52 md:pb-12 pb-5" onMouseEnter={()=>handleFlip(i)} onClick={()=>handleFlip(i)}>
                                    <img className={`absolute ${i === 1 ? 'md:ml-2 -ml-6 -top-14' : 'md:ml-10 ml-3 -top-10'}  w-fit`} src={pr.icon} alt="icon" />
                                    <h2 className='font-bold text-3xl'>{pr.title}</h2>
                                </div>
                                <div className=" bg-[#110E2F] w-10/12 md:mx-0 mx-auto h-64 md:w-80 md:h-80"  onMouseLeave={handleFlip} onClick={()=>handleFlip(i)}>
                                    <ReactPlayer 
                                        url={pr.youtubeVideo} 
                                        controls 
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                            </ReactCardFlip>
                        </div>
                        <div className='mt-5'>
                            <p onClick={()=> openLinkInNewTab(pr.link)} className='text-[#DA0BFF] hover:border-b-2 md:border-b-0 border-b-2 px-5 transition-all pb-2 w-fit mx-auto cursor-pointer hover:border-[#DA0BFF] border-[#DA0BFF]' href={pr.link}>
                                {info.More}
                            </p>
                        </div>
                    </div>
            )})}
        </div>
        
    </div>
  )
}
