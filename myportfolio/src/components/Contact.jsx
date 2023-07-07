import React, {useState} from 'react'
import {ScrollRight} from './ScrollRight'
import {Appear} from './Appear'
import img from '../assets/amico.png'

import icon1 from '../assets/gmail.png'
import icon2 from '../assets/linkedin.png'
import icon3 from '../assets/github.png'
import { Reveal } from './Reveal'

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact({info}) {

  const [inputs, setInputs] = useState({
    email: "",
    job: "",
    desc: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    job: "",
    desc: ""
  });

  const validate = (input) => {
    const errors = {}
    if (!regexEmail.test(inputs.email)) {
      if (info.language === "English") {
        errors.email = "Most be a valid Email";
      }else {
        errors.email = "Debe ser un email válido";
      }
    }
    return errors;
  }
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let empty = Object.values(inputs).find(v=> v === '')
    if (empty !== undefined) {
      let fill = {}
      Object.values(inputs).map((inp,i)=>{
        if (inp === '') {
          fill.position = i
        }
      })
      if (info.language === "English") {
        setErrors({
          [Object.keys(inputs)[fill.position]]: `Most Add ${Object.keys(inputs)[fill.position]}`
        })
      }else{
        setErrors({
            [Object.keys(inputs)[fill.position]]: `Debe agregar ${Object.keys(inputs)[fill.position]}`
        })
      }
    }
    if (Object.values(errors).length === 0) {
      console.log(errors);
    }
  }
  return (
    <ScrollRight>
    <div id={`${info.id}`} className='w-full h-fit relative mt-32 flex md:flex-row flex-col-reverse justify-center'>
      <div className='bg-gradient-to-r absolute from-[#141414] via-[#332836] to-[#DA0BFF] h-full w-full opacity-50'></div>
      <div className='md:w-fit w-10/12 md:mt-12 mt-10 md:mx-0 mx-auto md:mr-44 flex md:flex-col flex-col-reverse md:my-16 relative z-30'>
        <Appear>
        <img src={img} alt="img" />
        <div className='flex w-8/12 md:mb-0 mb-10 md:mx-0 justify-evenly mt-3'>
          <div className='w-fit hover:bg-[#DA0BFF] bg-[#DA0BFF] transition-all cursor-pointer h-fit p-2 rounded-full md:bg-[#D9D9D9] '>
            <img className='h-8 w-8' src={icon1} alt="mail" />
          </div>
          <div className='w-fit hover:bg-[#DA0BFF] bg-[#DA0BFF] transition-all cursor-pointer h-fit p-2 rounded-full md:bg-[#D9D9D9] '>
            <img className='h-8 w-8' src={icon2} alt="mail" />
          </div>
          <div className='w-fit hover:bg-[#DA0BFF] bg-[#DA0BFF] transition-all cursor-pointer h-fit p-2 rounded-full md:bg-[#D9D9D9] '>
            <img className='h-8 w-8' src={icon3} alt="mail" />
          </div>
        </div>
        </Appear>
      </div>
      <div className='text-base mt-16 relative z-30 font-thin mx-auto md:mx-0 w-10/12 md:w-96'>
        <Reveal>
        <div className='w-fit'>
          <h1 className='font-bold md:text-5xl text-3xl mx-5'>{info.title}</h1>
          <div className='bg-[#DA0BFF] h-1 w-full md:mx-0 mx-auto md:ml-1 mt-3'></div>
        </div>
        </Reveal>
        <form onSubmit={handleSubmit} className='mt-5'>
          <div>
            <Appear>
            <label className={`
            ${errors.email !== "" && errors.email
            ? "text-rose-600"
            : "text-white"
            }`}>
              Email
            </label>
            <input 
              className={`
              ${errors.email !== "" && errors.email
                ? "border-rose-800 hover:border-rose-500"
                : "border-[#DA0BFF] hover:border-white"
              } my-2 w-full bg-transparent border rounded-md py-1 px-2  cursor-pointer transition-all `} 
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
            </Appear>
            <p className="text-rose-800 mb-5">{errors.email}</p>
          </div>
          <div>
            <Appear>
            <label className={`
            ${errors.email !== "" && errors.job
            ? "text-rose-600"
            : "text-white"
            }`}>
              {info.full[0]}
            </label>
            <input 
              className={`
              ${errors.job !== "" && errors.job
                ? "border-rose-800 hover:border-rose-500"
                : "border-[#DA0BFF] hover:border-white"
              } my-2 w-full bg-transparent border rounded-md py-1 px-2  cursor-pointer transition-all `} 
              name="job"
              value={inputs.job}
              onChange={handleChange}
              type="text" 
            />
            </Appear>
            <p className="text-rose-800 mb-5">{errors.job}</p>
          </div>
          <div>
            <Appear>
            <label className={`
            ${errors.desc !== "" && errors.desc
            ? "text-rose-600"
            : "text-white"
            }`}>
              {info.full[1]}
            </label>
            <textarea 
              className={`
              ${errors.desc !== "" && errors.desc
                ? "border-rose-800 hover:border-rose-500"
                : "border-[#DA0BFF] hover:border-white"
              } my-2 w-full bg-transparent border rounded-md py-1 px-2  cursor-pointer transition-all `} 
              name="desc"
              value={inputs.desc}
              onChange={handleChange}
            />
            </Appear>
            <p className="text-rose-800 mb-5">{errors.desc}</p>
          </div>
          <Reveal>
          <button 
            className='bg-[#DA0BFF] rounded-md border-none transition-all hover:-translate-y-2 hover:font-bold px-10 py-1 mt-6 font-thin' 
            type='submit'>
              {info.send}
          </button>
          </Reveal>
        </form>
      </div>
    </div>
    </ScrollRight>
  )
}
