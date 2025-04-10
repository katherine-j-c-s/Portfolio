import './App.css'
import React, { useEffect, useState } from 'react'
import {info} from '../Data/MyInfo'


import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Personal from './components/Personal'



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
    <main className='bg-[#110E2F] text-slate-300 h-full w-full m-0 p-0'>
      <Nav changeLanguage={changeLanguage} info={data.nav} />
      <Home info={data.Home}/>
      <Personal info={data.Personal}/>
      <Projects info={data.Projects}/>
      <Contact info={data.Contact} />
    </main>
  )
}

export default App
