import './App.css'
import React, { useEffect, useState } from 'react'
import {info} from '../Data/MyInfo'


import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'



function App() {
  const [data,setData] = useState({...info.English})

  const changeLanguage = (language) => {
    if (language === "Spanish") {
      setData({...info.Spanish})
    }else if (language === "English"){
      setData({...info.English})
    }
  }

  return (
    <main className='bg-[#110E2F] text-slate-300 pb-10 h-full w-full m-0 p-0'>
      <Nav changeLanguage={changeLanguage} info={data.nav} />
      <Home info={data.Home}/>
      <div className='h-96 w-full'></div>
      <About info={data.About}/>
      <Skills info={data.Skills} />
    </main>
  )
}

export default App
