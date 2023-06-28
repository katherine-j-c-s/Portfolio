import womanImg from '../assets/woman.png'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="text-slate-200 border border-sky-400 w-8/12 flex flex-col mx-auto justify-center text-center">
        <img className='w-96 h-96 mx-auto' src={womanImg} alt="img" />
        <Typewriter onInit={(typewriter)=> {
          typewriter.typeString("Hi!!")
          .pauseFor(1000)
          .deleteAll()
          .typeString("I'm Katherine Contreras 😊")
          .start();
          }}
        />
    </div>
  )
}

export default Home