import project1 from '../src/assets/fitness.png'
import project2 from '../src/assets/gamepad.png'

import cvEnglish from '../src/assets/cvEnglish.pdf'
import cvSpanish from '../src/assets/cvEspañol.pdf'

import cetificate0 from '../src/assets/CertificateHenry.png'
import cetificate1 from '../src/assets/educationitAdvanced.png'
import cetificate2 from '../src/assets/EducationItFromScrach.png'
import cetificate3 from '../src/assets/ChicasDigitalersSecond.png'
import cetificate4 from '../src/assets/ChicasDigitalersFirst.png'

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
            items:[
                {name:'Home',id:"/"},
                {name:'Sobre Mi',id:"about"},
                {name:'Habilidades',id:"skills"},
                {name:'Proyectos',id:"projects"},
                {name:'Educación',id:"education"},
                {name:'Contacto',id:"contact"}
            ],
            language: "Spanish"
        },
        Home:{
            id:"/",
            text:"Hola, Mi Nombre es",
            name:"Katherine Contreras",
            position:"Desarrolladora Full Stack"
        },
        About:{
            id:"about",
            text:"Sobre Mi",
            Title:"Quien Soy",
            desc1:"Comencé a programar gracias a la pandemia y porque quería aprender algo nuevo. Una vez que comencé, no había vuelta atrás 😍.",
            desc2:"Una de las cosas que me encantó de programar fue la cantidad de cosas que podía aprender a hacer con ello, y el hecho de que siempre está cambiando y mejorando, por lo que siempre hay algo nuevo que aprender cada día💪.",
            botons:['Contacto','Descargar CV'],
            cv: cvSpanish,
            pathName: "cvEspañol"
        },
        Skills:{
            id:"skills",
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
            id:"projects",
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
            id:"education",
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
                    desc: "Domina el desarrollo del lado del cliente y conviértete en Front End Web Developer. Aprende a utilizar JavaScript para crear experiencias altamente interactivas.",
                    certificate: cetificate1
                },{
                    name: "JavaScript desde Cero",
                    academy:"Educacion It",
                    desc: "Domina los fundamentos de la programación a través de uno de los lenguajes más utilizados del mercado. Aprende a generar desarrollos en entornos Web y Mobile.",
                    certificate: cetificate2
                },{
                    name: "Introducción a la Programación parte 2",
                    academy:"Chicas Digitalers",
                    desc: "Es un espacio de formación gratuita que busca transmitir a jóvenes mujeres el entusiasmo por la tecnología ,enseñano las bases de Html, CSS y JavaScript",
                    certificate: cetificate3
                },{
                    name: "Introducción a la Programación parte 1",
                    academy:"Chicas Digitalers",
                    desc: "Es un espacio de formación gratuita que busca transmitir a jóvenes mujeres el entusiasmo por la tecnología ,enseñano las bases de Html, CSS y JavaScript",
                    certificate: cetificate4
                },
            ]
        },
        Contact:{
            id:"contact",
            title:"Contacta Me",
            text: "Mandame un Email para conectar! Y si lo prefieres, tambien me puedes encontrar en...",
            full:["Position de Trabajo","Descripcion"],
            send:"enviar" , 
            language:"Spanish"
        }
    },
    English:{
        nav:{
            items:[
                {name:'Home',id:"/"},
                {name:'About',id:"about"},
                {name:'Skills',id:"skills"},
                {name:'Projects',id:"projects"},
                {name:'Education',id:"education"},
                {name:'Contact',id:"contact"}
            ],
            language: "English"
        },
        Home:{
            id:"/",
            text:"Hi!! My Name is",
            name:"Katherine Contreras",
            position:"Full Stack Developer"
        },
        About:{
            id:"about",
            text:"About me",
            Title:"Who Am I ",
            desc1:"I started programming thanks to the pandemic and because I wanted to learn something new. once i started there was no going back 😍 .",
            desc2:"One of the things I loved about programming was how much I could learn to do with it, and the fact that it always keep changing and improving so there was always something new to learn every day💪",
            botons:['Contact','Dowload Cv'],
            cv: cvEnglish,
            pathName: "cvEnglish"
        },
        Skills:{
            id:"skills",
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
            id:"projects",
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
            id:"education",
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
                    desc: "Master client-side development and become a Front End Web Developer. Learn how to use JavaScript to create highly interactive experiences.",
                    certificate: cetificate1
                },{
                    name: "JavaScript from scratch",
                    academy:"Educacion It",
                    desc: "Master the fundamentals of programming through one of the most widely used languages in the market. Learn how to create developments in Web and Mobile environments.",
                    certificate: cetificate2
                },{
                    name: "Introduction to Programming part 2",
                    academy:"Chicas Digitalers",
                    desc: "It is a free training space that seeks to transmit to young women the enthusiasm for technology, teaching the foundations of HTML, CSS, and JavaScript.",
                    certificate: cetificate3
                },{
                    name: "Introduction to Programming part 1",
                    academy:"Chicas Digitalers",
                    desc: "It is a free training space that seeks to transmit to young women the enthusiasm for technology, teaching the foundations of HTML, CSS, and JavaScript.",
                    certificate: cetificate4
                },
            ]
        },
        Contact:{
            id:"contact",
            title:"Contact Me",
            text: "Shoot me an email if you want to connect! You can also find me on ...",
            full:["Job Position","Description"],
            send:"send", 
            language:"English"
        }
    },
}