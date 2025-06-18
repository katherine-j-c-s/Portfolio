import sportwearImg from '../src/assets/sportwearImg.png'
import videogamesImg from '../src/assets/videogamesImg.png'
import losAngelesImg from '../src/assets/losAngelesImg.png'
import pernaleteImg from '../src/assets/pernaleteImg.png'
import verocruzImg from '../src/assets/verocruzImg.png'
import manicureImg from '../src/assets/manicureImg.png'
import compadritoImg from '../src/assets/compadritoImg.png'
import katriezImg from '../src/assets/katriezImg.png'
import hotelImg from '../src/assets/hotelImg.png'
import myflix from '../src/assets/myflix.png'
import covid19 from '../src/assets/covid19.png'
import crypto from '../src/assets/crypto.jpg'
import gameOfThone from "../src/assets/gameOfThone.png"
import miniImg from '../src/assets/miniImg.png'
import caraKoalaImg from '../src/assets/caraKoalaImg.png'
import questionImg from '../src/assets/questionImg.png'
import colorFlipperImg from '../src/assets/colorFlipperImg.png'
import memoryGameImg from '../src/assets/memoryGameImg.png'
import counterImg from '../src/assets/counterImg.png'
import modalImg from '../src/assets/modalImg.png'
import chooseCharacterImg from '../src/assets/chooseCharacterImg.png'
import navbarImg from '../src/assets/navbarImg.png'

import cvEnglish from './CVEnglish.pdf'
import cvSpanish from './CVSpanish.pdf'

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
import icon21 from '../src/assets/php.svg'

export const info = {
    Spanish:{
        nav:{
            items:[
                {name:'Home',id:"/"},
                {name:'Personal',id:"personal"},
                {name:'Proyectos',id:"projects"},
                {name:'Contacto',id:"contact"}
            ],
            language: "Spanish"
        },
        Home:{
            id:"/",
            position:"Desarrolladora Full Stack",
            softSkills: "Me destaco por mi capacidad de adaptación, el trabajo en equipo y la comunicación asertiva. Me gusta aprender de los desafíos y mantener una actitud proactiva en todo lo que hago.",
            buttons: ["Proyectos","Contacto"]
        },
        Personal: {
            id: "personal",
            language: "Spanish",
            About:{
                id:"about",
                text:"Sobre Mi",
                Title:"Quien Soy",
                desc1:"Soy desarrolladora frontend, enfocada en crear experiencias web modernas, interactivas y escalables. Comencé a programar durante la pandemia y me apasioné por construir soluciones reales que sean funcionales y atractivas.",
                desc2:"Últimamente he explorado la integración de IA en mis proyectos y el desarrollo de herramientas colaborativas que resuelven problemas cotidianos. Disfruto transformar ideas en productos concretos y mejorar constantemente a través de la práctica y los desafíos creativos.",
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
                    },{
                        title:"Php",
                        rate: 5,
                        icon: icon21
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
            }
        },
        Projects: {
            id: "projects",
            Title: "Mis Proyectos",
            More: "Ver Página",
            projects: [
              {
                title: "SportWear",
                image: sportwearImg,
                link: "https://sportwear.vercel.app/",
                detail: "Tienda online de ropa deportiva. Página principal responsiva con React y Tailwind."
              },
              // {
              //   title: "Videojuegos",
              //   image: videogamesImg,
              //   link: "https://github.com/katherine-j-c-s/PI_VideoGames",
              //   detail: "App SPA que permite buscar, filtrar y agregar videojuegos usando una API. Hecha con React y Redux."
              // },
              {
                title: "Los Ángeles Mountains",
                image: losAngelesImg,
                link: "https://los-angeles-montains.vercel.app/",
                detail: "Sitio de exhibición de esquí en montañas. Realizado solo con HTML y CSS."
              },
              {
                title: "Asesorías Pernalete",
                image: pernaleteImg,
                link: "https://asesorias-pernalete.vercel.app/",
                detail: "Plataforma educativa de clases virtuales. Creada con React y Tailwind para una docente de informática."
              },
              {
                title: "Vero Cruz",
                image: verocruzImg,
                link: "https://vero-cruz.vercel.app/",
                detail: "Sitio para un emprendimiento de belleza y cosmética. Diseño emocional y moderno."
              },
              {
                title: "Manicurista",
                image: manicureImg,
                link: "https://katherine-j-c-s.github.io/Proyecto_U-as/Home/home.html#home",
                detail: "Página HTML/CSS para promoción de servicios de manicura. Diseño estático pero elegante."
              },
              {
                title: "Hotel Zante",
                image: hotelImg,
                link: "https://hotel-page-five.vercel.app/",
                detail: "Landing page para un hotel. Maquetado desde cero con HTML y CSS."
              },
              {
                title: "Katriez",
                image: katriezImg,
                link: "https://katriez.vercel.app/",
                detail: "Perfil personal tipo portfolio para una desarrolladora freelance. Hecho con React."
              },
              {
                title: "Mi Compadrito",
                image: compadritoImg,
                link: "https://website-mi-compadrito.vercel.app/",
                detail: "Sitio para venta de comida casera. Web responsive con React."
              },{
                title: "MyFlix",
                image: myflix,
                link: "https://my-flix-one.vercel.app/",
                detail: "diseño de netflix para ir agregando peliculas o series. Web responsive con React."
              },{
                title: "Covid 19",
                image: covid19,
                link: "https://trabajo-covid-19.vercel.app/",
                detail: "sitio web para concientizar el impacto del covid 19. Web responsive con React."
              },{
                title: "Crypto",
                image: crypto,
                link: "https://coingecko-react-tailwindcss-crypto.vercel.app/",
                detail: "sitio web que usa una api de crypto. Web responsive con React."
              },{
                title: "Game Of Trone",
                image: gameOfThone,
                link: "https://game-of-trone.vercel.app/",
                detail: "sitio web que esta usando 2 apis de juego de tronos. Web responsive con React."
              },
              {
                title: "Mini Proyectos",
                image: miniImg,
                link: "",
                detail: "Colección de mini proyectos interactivos hechos con JavaScript, ideales para prácticas.",
                miniProjects: [
                  {
                    title: "CaraKoala",
                    image: caraKoalaImg,
                    link: "https://carakoala.vercel.app/",
                    detail: "Generador de caritas de koala personalizado con HTML, CSS y JS."
                  },
                  {
                    title: "Preguntas y Respuestas",
                    image: questionImg,
                    link: "https://question-project-omega.vercel.app/",
                    detail: "Despliegue de preguntas con respuestas dinámicas usando JavaScript."
                  },
                  {
                    title: "Cambiador de Color",
                    image: colorFlipperImg,
                    link: "https://color-flipper-nu-two.vercel.app/",
                    detail: "Cambia el fondo del sitio con un clic. Hecho con JavaScript puro."
                  },
                  {
                    title: "Juego de Memoria",
                    image: memoryGameImg,
                    link: "https://memory-game-02.vercel.app/",
                    detail: "Mini juego interactivo para ejercitar la memoria visual."
                  },
                  {
                    title: "Contador",
                    image: counterImg,
                    link: "https://counter-iota-seven.vercel.app/",
                    detail: "Contador simple para practicar eventos y estado en JS."
                  },
                  {
                    title: "Modal Básico",
                    image: modalImg,
                    link: "https://model-project.vercel.app/",
                    detail: "Ejemplo de modal animado para mostrar contenido adicional."
                  },
                  {
                    title: "Elige tu Personaje",
                    image: chooseCharacterImg,
                    link: "https://choose-your-character.vercel.app/",
                    detail: "Selector de personaje de Mario hecho con React."
                  },
                  {
                    title: "Estilos de Navbar",
                    image: navbarImg,
                    link: "https://navbar-project-one.vercel.app/",
                    detail: "Navbars con estilos cambiantes, usando React."
                  }
                ]
              }
            ]
          }
          ,
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
                {name:'Personal',id:"personal"},
                {name:'Projects',id:"projects"},
                {name:'Contact',id:"contact"}
            ],
            language: "English"
        },
        Home:{
            id:"/",
            text:"Hi!! My Name is",
            name:"Katherine Contreras",
            position:"Full Stack Developer",
            softSkills: "Im known for my adaptability, teamwork, and clear communication. I enjoy learning from challenges and always bring a proactive mindset to everything I do.",
            buttons: ["Projects","Contact Me"]
        },
        Personal: {
            id: "personal",
            language: "English",
            About:{
                id:"about",
                text:"About me",
                Title:"Who Am I ",
                desc1:"I’m a frontend developer focused on creating modern, interactive, and scalable web experiences. I started programming during the pandemic, and quickly became passionate about building real solutions that are both functional and engaging.",
                desc2:"Lately, I’ve explored integrating AI into my projects and developing collaborative tools that solve everyday problems. I enjoy transforming ideas into real products and continuously improving through hands-on practice and creative challenges.",
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
                    },{
                        title:"Php",
                        rate: 5,
                        icon: icon21
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
        },
        Projects: {
            id: "projects",
            Title: "My Projects",
            More: "Visit Page",
            projects: [
              {
                title: "SportWear",
                image: sportwearImg,
                link: "https://sportwear.vercel.app/",
                detail: "Online store for sportswear. Main landing page built with React and Tailwind."
              },
              // {
              //   title: "Videogames",
              //   image: videogamesImg,
              //   link: "https://github.com/katherine-j-c-s/PI_VideoGames",
              //   detail: "SPA app to search, filter, and create videogames. Built with React and Redux using an external API."
              // },
              {
                title: "Los Ángeles Mountains",
                image: losAngelesImg,
                link: "https://los-angeles-montains.vercel.app/",
                detail: "Exhibition page for skiing. Pure HTML and CSS layout."
              },
              {
                title: "Asesorías Pernalete",
                image: pernaleteImg,
                link: "https://asesorias-pernalete.vercel.app/",
                detail: "Educational platform for virtual classes. React + Tailwind for a computer science teacher."
              },
              {
                title: "Vero Cruz",
                image: verocruzImg,
                link: "https://vero-cruz.vercel.app/",
                detail: "Beauty and personal care site. Emotional branding and modern aesthetic."
              },
              {
                title: "Manicurist",
                image: manicureImg,
                link: "https://katherine-j-c-s.github.io/Proyecto_U-as/Home/home.html#home",
                detail: "Static HTML/CSS site promoting nail services."
              },
              {
                title: "Hotel Zante",
                image: hotelImg,
                link: "https://hotel-page-five.vercel.app/",
                detail: "Hotel reservation landing page. Built from scratch with HTML and CSS."
              },
              {
                title: "Katriez",
                image: katriezImg,
                link: "https://katriez.vercel.app/",
                detail: "Freelancer portfolio profile for a web developer. Built with React."
              },
              {
                title: "Mi Compadrito",
                image: compadritoImg,
                link: "https://website-mi-compadrito.vercel.app/",
                detail: "Food sale website for a local kiosk. Responsive and made in React."
              },{
                title: "MyFlix",
                image: myflix,
                link: "https://my-flix-one.vercel.app/",
                detail: "Netflix design to add movies or tv shows. Responsive and made in React."
              },{
                title: "Covid 19",
                image: covid19,
                link: "https://trabajo-covid-19.vercel.app/",
                detail: "sitio web to raise awareness of covid 19. Responsive and made in React."
              },{
                title: "Crypto",
                image: crypto,
                link: "https://coingecko-react-tailwindcss-crypto.vercel.app/",
                detail: "sitio web using and api of crypto. Responsive and made in React."
              },{
                title: "Game Of Trone",
                image: gameOfThone,
                link: "https://game-of-trone.vercel.app/",
                detail: "sitio web using 2 apis of game of trone. Responsive and made in React."
              },
              {
                title: "Mini Projects",
                image: miniImg,
                link: "",
                detail: "Set of small JavaScript projects for practicing interactivity and logic.",
                miniProjects: [
                  {
                    title: "CaraKoala",
                    image: caraKoalaImg,
                    link: "https://carakoala.vercel.app/",
                    detail: "Customizable koala face generator with HTML, CSS, and JS."
                  },
                  {
                    title: "Q&A Display",
                    image: questionImg,
                    link: "https://question-project-omega.vercel.app/",
                    detail: "Interactive questions with collapsible answers using vanilla JS."
                  },
                  {
                    title: "Color Flipper",
                    image: colorFlipperImg,
                    link: "https://color-flipper-nu-two.vercel.app/",
                    detail: "Click to randomly change background color. Pure JavaScript."
                  },
                  {
                    title: "Memory Game",
                    image: memoryGameImg,
                    link: "https://memory-game-02.vercel.app/",
                    detail: "Flip card game to test memory skills. Fully functional and responsive."
                  },
                  {
                    title: "Counter",
                    image: counterImg,
                    link: "https://counter-iota-seven.vercel.app/",
                    detail: "Simple click counter to learn events and logic."
                  },
                  {
                    title: "Basic Modal",
                    image: modalImg,
                    link: "https://model-project.vercel.app/",
                    detail: "Animated modal example to show extra info. Smooth transitions."
                  },
                  {
                    title: "Choose Your Character",
                    image: chooseCharacterImg,
                    link: "https://choose-your-character.vercel.app/",
                    detail: "Mario character selector made in React."
                  },
                  {
                    title: "Navbar Styles",
                    image: navbarImg,
                    link: "https://navbar-project-one.vercel.app/",
                    detail: "Navigation bar with dynamic style changes using React."
                  }
                ]
              }
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