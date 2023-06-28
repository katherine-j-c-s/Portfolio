import woman from '../src/assets/woman.png'

import iconContact1 from '../src/assets/gmail.png'
import iconContact2 from '../src/assets/linkedin.png'
import iconContact3 from '../src/assets/github.png'

import cetificate1 from '../src/assets/educatioitAdvanced.png'
import cetificate2 from '../src/assets/educationItFromScrach.PNG'
import cetificate3 from '../src/assets/chicasDigitales2.PNG'
import cetificate4 from '../src/assets/chicasDigitales1.PNG'

export const info = {
    Español: [
        {   
            id:1,
            icono: woman,
            name : "Katherine Contreras",
        },{   
            id:2,
            title: "Proyectos",
            desc:"estos son unos de los proyectos que he hecho, si quieres ver mas puedes entrar en mi github",
            github:{
                tittle: "Github",
                url:"https://github.com/katherine-j-c-s",
                icon: iconContact3
            },
            Proyects : [
                {
                    id : 1,
                    title : "Ecommerce de ropa deportiva",
                    VideoUrl : "https://www.youtube.com/watch?v=xk-6JoQsdGA",
                    urlHosting : "https://sportwear.vercel.app/"
                },
                {
                    id : 2,
                    title : "Pagina de Videojuegos",
                    VideoUrl : "https://www.youtube.com/watch?v=-IIMIRXiVP4",
                    urlHosting : "https://github.com/katherine-j-c-s/PI_VideoGames"
                }
            ]
        },{   
            id:3,
            title: "Tecnologías",
            tecnologies: [
                {   
                    id:1,
                    title:"JavaScript Avanzado",
                    certificate:cetificate1
                },{   
                    id:2,
                    title:"JavaScript desde Cero",
                    certificate:cetificate2
                },{   
                    id:3,
                    title:"Introducción a la Programación parte 2",
                    certificate:cetificate3
                },{   
                    id:4,
                    title:"Introducción a la Programación parte 1",
                    certificate:cetificate4
                }
            ]
        },{   
            id:4,
            title: "Educación",
            education: [
                {   
                    id:1,
                    title:"JavaScript Avanzado",
                    certificate:cetificate1
                },{   
                    id:2,
                    title:"JavaScript desde Cero",
                    certificate:cetificate2
                },{   
                    id:3,
                    title:"Introducción a la Programación parte 2",
                    certificate:cetificate3
                },{   
                    id:4,
                    title:"Introducción a la Programación parte 1",
                    certificate:cetificate4
                }
            ]
        },{   
            id:5,
            title: "Sobre mi",
            desc: "Hola, soy Katherine Contreras . soy de Venezuela y actualmente vivo en Argentina, mi idioma nativo es el español pero tengo un nivel avanzado en ingles y actualmente estoy estudiando Frances desde cero . Empecé a programar gracias a la pandemia y porque quería aprender algo nuevo. una vez que empecé no había vuelta atrás 😍 . Una de las cosas que me atraparon de la programación era todo lo que podía aprender a hacer con ella y el hecho de que siempre estaba en constante cambio y mejora, por lo que siempre había algo nuevo que aprender todos los días. Pero lo que más me gustó es que lo único que necesitamos para ello, es una computadora o laptop y buen internet👌 . después de tres años de estudio y práctica me considero preparado para empezar a buscar oportunidades laborales como programador en empresas o startups. Mi propuesta de valor radica en mi forma de adaptarme a cualquier situación, lo que hace que mis proyectos como programador sean más fáciles de realizar💡 . Así que... te invito a contactarme si estás interesado en conseguir a alguien como yo!!",
            idiomas : [{title:"Español",nivel:"Nativo"},{title:"Inglés",nivel:"Avanzado",certificado:"https://www.efset.org/cert/Q2wtTu"},{title:"Francés",nivel:"Basico"}]
        },{   
            id:6,
            title: "Contactos",
            contacts : [
                {
                    tittle: "Gmail",
                    url:"kathijcs@gmail.com",
                    icon: iconContact1
                },{
                    tittle: "Linkedin",
                    url:"https://www.linkedin.com/in/katherine-contreras/",
                    icon: iconContact2
                },{
                    tittle: "Github",
                    url:"https://github.com/katherine-j-c-s",
                    icon: iconContact3
                }
            ]
        }
    ],
    Ingles: [
        {   
            id:1,
            icono: woman,
            name : "Katherine Contreras",
        },{   
            id:2,
            title: "Projects",
            desc:"This are some projects I've made, If you wanna see more, go and checkout my Github",
            github:{
                tittle: "Github",
                url:"https://github.com/katherine-j-c-s",
                icon: iconContact3
            },
            Proyects : [
                {
                    id : 1,
                    title : "Sportswear Ecommerce",
                    VideoUrl : "https://www.youtube.com/watch?v=xk-6JoQsdGA",
                    urlHosting : "https://sportwear.vercel.app/"
                },
                {
                    id : 2,
                    title : "Videogames Page",
                    VideoUrl : "https://www.youtube.com/watch?v=-IIMIRXiVP4",
                    urlHosting : "https://github.com/katherine-j-c-s/PI_VideoGames"
                }
            ]
        },{   
            id:3,
            title: "Education",
            education: [
                {   
                    id:1,
                    title:"Advanced JavaScript",
                    certificate:cetificate1
                },{   
                    id:2,
                    title:"JavaScript from Scratch",
                    certificate:cetificate2
                },{   
                    id:3,
                    title:"Introduction to Programming part 2",
                    certificate:cetificate3
                },{   
                    id:4,
                    title:"Introduction to Programming part 1",
                    certificate:cetificate4
                }
            ]
        },{   
            id:4,
            title: "About me",
            desc: "Hi, I'm Katherine Contreras . I'm from Venezuela and I currently live in Argentina, my native language is Spanish but I have an advanced level in English and I am currently studying French from scratch . I started programming thanks to the pandemic and because I wanted to learn something new. once i started there was no going back 😍 . One of the things I loved about programming was how much I could learn to do with it, and the fact that it always keep changing and improving so there was always something new to learn every day. But what I liked the most it's that the only thing we need for it, its a computer or laptop and good internet👌 . Now, after three years of studying and practicing I consider myself ready to start looking for job opportunities as a programmer in companies or startups. My value proposition lies in my way to adapt to any situations, which makes my projects as a programmer easier to do💡 . So, I invite you to contact me if your interested to gain someone like me !!",
            idiomas : [{title:"Spanish",nivel:"Native"},{title:"English",nivel:"Advanced",certificado:"https://www.efset.org/cert/Q2wtTu"},{title:"French",nivel:"Basic"}]
        },{   
            id:5,
            title: "Contact me",
            contacts : [
                {
                    tittle: "Gmail",
                    url:"kathijcs@gmail.com",
                    icon: iconContact1
                },{
                    tittle: "Linkedin",
                    url:"https://www.linkedin.com/in/katherine-contreras/",
                    icon: iconContact2
                },{
                    tittle: "Github",
                    url:"https://github.com/katherine-j-c-s",
                    icon: iconContact3
                }
            ]
        }
    ]
}