import project1 from '../src/assets/fitness.png'
import project2 from '../src/assets/gamepad.png'

import cetificate0 from '../src/assets/CertificateHenry.png'
import cetificate1 from '../src/assets/educationitAdvanced.png'
import cetificate2 from '../src/assets/EducationItFromScrach.png'
import cetificate3 from '../src/assets/ChicasDigitalers2.png'
import cetificate4 from '../src/assets/chicasDigitales1.png'

import icon1 from '../src/assets/react-color.svg'
import icon2 from '../src/assets/javascript-color.svg'
import icon3 from '../src/assets/python-color.svg'
import icon4 from '../src/assets/nodedotjs-color.svg'
import icon5 from '../src/assets/redux-color.svg'
import icon6 from '../src/assets/express-color.svg'
import icon7 from '../src/assets/postgresql-color.svg'
import icon8 from '../src/assets/mysql-color.svg'
import icon9 from '../src/assets/sequelize-color.svg'
import icon10 from '../src/assets/html5-color.svg'
import icon11 from '../src/assets/css3-color.svg'
import icon12 from '../src/assets/tailwindcss-color.svg'
import icon13 from '../src/assets/railway-color.svg'
import icon14 from '../src/assets/vercel-color.svg'
import icon15 from '../src/assets/netlify-color.svg'
import icon16 from '../src/assets/git-color.svg'
import icon17 from '../src/assets/github-color.svg'
import icon18 from '../src/assets/visualstudiocode-color.svg'
import icon19 from '../src/assets/figma-color.svg'
import icon20 from '../src/assets/jira-color.svg'

export const info = {
    Spanish:{
        nav:{
            items:['Home',"Sobre Mi","Habilidades","Proyectos","Educación","Contacto"],
            language: "Spanish"
        },
        Home:{
            text:"Hola, Mi Nombre es",
            name:"Katherine Contreras",
            position:"Desarrolladora Full Stack"
        },
        About:{
            text:"Sobre Mi",
            Title:"Quien Soy",
            desc1:"Comencé a programar gracias a la pandemia y porque quería aprender algo nuevo. Una vez que comencé, no había vuelta atrás 😍.",
            desc2:"Una de las cosas que me encantó de programar fue la cantidad de cosas que podía aprender a hacer con ello, y el hecho de que siempre está cambiando y mejorando, por lo que siempre hay algo nuevo que aprender cada día💪.",
            botons:['Contacto','Descargar CV']
        },
        Skills:{
            title:"Mis Habilidades",
            items:[
                {
                    title:"React",
                    rate: 4,
                    icon: icon1
                },{
                    title:"JavaScript",
                    rate: 5,
                    icon: icon2
                },{
                    title:"Phyton",
                    rate: 2,
                    icon: icon3
                },{
                    title:"NodeJs",
                    rate: 4,
                    icon: icon4
                },{
                    title:"Redux",
                    rate: 4,
                    icon: icon5
                },{
                    title:"Express",
                    rate: 4,
                    icon: icon6
                },{
                    title:"PostgreSQL",
                    rate: 3,
                    icon: icon7
                },{
                    title:"MySQL",
                    rate: 3,
                    icon: icon8
                },{
                    title:"Sequelize",
                    rate: 3,
                    icon: icon9
                },{
                    title:"HTML",
                    rate: 5,
                    icon: icon10
                },{
                    title:"CSS",
                    rate: 5,
                    icon: icon11
                },{
                    title:"TailwindCSS",
                    rate: 5,
                    icon: icon12
                },{
                    title:"Railway",
                    rate: 3,
                    icon: icon13
                },{
                    title:"Vercel",
                    rate: 4,
                    icon: icon14
                },{
                    title:"Netlify",
                    rate: 4,
                    icon: icon15
                },{
                    title:"git",
                    rate: 5,
                    icon: icon16
                },{
                    title:"Github",
                    rate: 5,
                    icon: icon17
                },{
                    title:"Visual Studio Code",
                    rate: 5,
                    icon: icon18
                },{
                    title:"Figma",
                    rate: 5,
                    icon: icon19
                },{
                    title:"Jira",
                    rate: 5,
                    icon: icon20
                }
            ]
        },
        Projects:{
            Title:"Mis Proyectos",
            More: "Visitar Pagina",
            projects: [
                {
                    title: "SportWear",
                    icon: project1,
                    youtubeVideo:"https://www.youtube.com/watch?v=xk-6JoQsdGA&t=181s",
                    link:"https://sportwear.vercel.app/",
                },{
                    title: "Videogames",
                    icon: project2,
                    youtubeVideo:"https://www.youtube.com/watch?v=-IIMIRXiVP4&t=80s",
                    link:"https://pi-video-games-seven.vercel.app/",
                }
            ]
        },
        Education:{
            Title:"Educación",
            Certificate: "Ver Certificado",
            info: [
                {
                    name: "Desarrrolladora Full Stack",
                    academy:"Soy Henry",
                    desc: "Un Curso en línea intensivo que simula un entorno laboral real y te prepara para una exitosa carrera como desarrollador Full Stack.",
                    certificate: cetificate0
                },{
                    name: "JavaScript Avanzado",
                    academy:"Educacion It",
                    desc: "Un Curso en línea intensivo que simula un entorno laboral real y te prepara para una exitosa carrera como desarrollador Full Stack.",
                    certificate: cetificate1
                },{
                    name: "JavaScript desde Cero",
                    academy:"Educacion It",
                    desc: "Un Curso en línea intensivo que simula un entorno laboral real y te prepara para una exitosa carrera como desarrollador Full Stack.",
                    certificate: cetificate2
                },{
                    name: "Introducción a la Programación parte 2",
                    academy:"Chicas Digitalers",
                    desc: "Un Curso en línea intensivo que simula un entorno laboral real y te prepara para una exitosa carrera como desarrollador Full Stack.",
                    certificate: cetificate3
                },{
                    name: "Introducción a la Programación parte 1",
                    academy:"Chicas Digitalers",
                    desc: "Un Curso en línea intensivo que simula un entorno laboral real y te prepara para una exitosa carrera como desarrollador Full Stack.",
                    certificate: cetificate4
                },
            ]
        },
        Contact:{
            title:"Contacta Me",
            full:["Position de Trabajo","Descripcion"],
            send:"enviar" , 
            language:"Spanish"
        }
    },
    English:{
        nav:{
            items:['Home',"About","Skills","Projects","Education","Contact"],
            language: "English"
        },
        Home:{
            text:"Hi!! My Name is",
            name:"Katherine Contreras",
            position:"Full Stack Developer"
        },
        About:{
            text:"About me",
            Title:"Who Am I ",
            desc1:"I started programming thanks to the pandemic and because I wanted to learn something new. once i started there was no going back 😍 .",
            desc2:"One of the things I loved about programming was how much I could learn to do with it, and the fact that it always keep changing and improving so there was always something new to learn every day💪",
            botons:['Contact','Dowload Cv']
        },
        Skills:{
            title:"My Skills",
            items:[
                {
                    title:"React",
                    rate: 4,
                    icon: icon1
                },{
                    title:"JavaScript",
                    rate: 5,
                    icon: icon2
                },{
                    title:"Phyton",
                    rate: 2,
                    icon: icon3
                },{
                    title:"NodeJs",
                    rate: 4,
                    icon: icon4
                },{
                    title:"Redux",
                    rate: 4,
                    icon: icon5
                },{
                    title:"Express",
                    rate: 4,
                    icon: icon6
                },{
                    title:"PostgreSQL",
                    rate: 3,
                    icon: icon7
                },{
                    title:"MySQL",
                    rate: 3,
                    icon: icon8
                },{
                    title:"Sequelize",
                    rate: 3,
                    icon: icon9
                },{
                    title:"HTML",
                    rate: 5,
                    icon: icon10
                },{
                    title:"CSS",
                    rate: 5,
                    icon: icon11
                },{
                    title:"TailwindCSS",
                    rate: 5,
                    icon: icon12
                },{
                    title:"Railway",
                    rate: 3,
                    icon: icon13
                },{
                    title:"Vercel",
                    rate: 4,
                    icon: icon14
                },{
                    title:"Netlify",
                    rate: 4,
                    icon: icon15
                },{
                    title:"git",
                    rate: 5,
                    icon: icon16
                },{
                    title:"Github",
                    rate: 5,
                    icon: icon17
                },{
                    title:"Visual Studio Code",
                    rate: 5,
                    icon: icon18
                },{
                    title:"Figma",
                    rate: 5,
                    icon: icon19
                },{
                    title:"Jira",
                    rate: 5,
                    icon: icon20
                }
            ]
        },
        Projects:{
            Title:"My Projects",
            More: "Visit Page",
            projects: [
                {
                    title: "SportWear",
                    icon: project1,
                    youtubeVideo:"https://www.youtube.com/watch?v=xk-6JoQsdGA&t=181s",
                    link:"https://sportwear.vercel.app/",
                },{
                    title: "Videogames",
                    icon: project2,
                    youtubeVideo:"https://www.youtube.com/watch?v=-IIMIRXiVP4&t=80s",
                    link:"https://pi-video-games-seven.vercel.app/",
                }
            ]
        },
        Education:{
            Title:"Educaction",
            Certificate: "View Certificate",
            info: [
                {
                    name: "Full Stack Developer",
                    academy:"Soy Henry",
                    desc: "An intensive online program that simulates a real work environment and prepares you for a successful career as a Full Stack developer.",
                    certificate: cetificate0
                },{
                    name: "Advanced JavaScript",
                    academy:"Educacion It",
                    desc: "Un Curso en línea intensivo que simula un entorno laboral real y te prepara para una exitosa carrera como desarrollador Full Stack.",
                    certificate: cetificate1
                },{
                    name: "JavaScript from scratch",
                    academy:"Educacion It",
                    desc: "Un Curso en línea intensivo que simula un entorno laboral real y te prepara para una exitosa carrera como desarrollador Full Stack.",
                    certificate: cetificate2
                },{
                    name: "Introduction to Programming part 2",
                    academy:"Chicas Digitalers",
                    desc: "Un Curso en línea intensivo que simula un entorno laboral real y te prepara para una exitosa carrera como desarrollador Full Stack.",
                    certificate: cetificate3
                },{
                    name: "Introduction to Programming part 1",
                    academy:"Chicas Digitalers",
                    desc: "Un Curso en línea intensivo que simula un entorno laboral real y te prepara para una exitosa carrera como desarrollador Full Stack.",
                    certificate: cetificate4
                },
            ]
        },
        Contact:{
            title:"Contact Me",
            full:["Job Position","Description"],
            send:"send", 
            language:"English"
        }
    },
}