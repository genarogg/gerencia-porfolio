import NextjsIcon from '../components/icons/Nextjs.astro'
import ReactIcon from '../components/icons/React.astro'
import GitIcon from '../components/icons/Git.astro'
import HtmlIcon from '../components/icons/Html.astro'
import CssIcon from '../components/icons/Css.astro'
import JavascriptIcon from '../components/icons/JavaScript.astro'
import LaravelIcon from '../components/icons/Laravel.astro'
import SassIcon from '../components/icons/Sass.astro'
import MySqlIcon from '../components/icons/MySql.astro'
import PythonIcon from '../components/icons/Python.astro'
import NodejsIcon from '../components/icons/Nodejs.astro'

export const EXPERIENCE = [
    {
        title: 'Desarrollador Frontend',
        company: 'Agencia Momentum',
        description:
            'Encargado de desarrollar soluciones web en empresa del sector inmobiliario implementando las mejores prácticas para la construcción de interfaces modernas y dinámicas para mejorar la experiencia del usuario final.',
        date: 'Enero 2023 - Presente',
        link: 'https://agenciamomentum.co/',
    },
    {
        title: 'Web master',
        company: 'Creatic',
        description:
            'Desarrollo de sitios web basados en diseños. Implementación de WordPress y Elementor. Mantener y actualizar sitios web. Levantamiento de requerimientos e implementación de buenas prácticas de SEO',
        date: 'Octubre 2022 - Junio 2023',
    },
    {
        title: 'Desarrollador FullStack',
        company: 'Agencia Momentum',
        description:
            'Desarrollo de landing pages y realizar ajustes a poryectos existentes. Actualización en filtro de búsqueda de inmuebles a nivel de Frontend y Backend.',
        date: 'Jul 2022 - Sept 2022 - Freelance',
    },
    {
        title: 'Web master',
        company: 'Asociaión Recuperando Esperanza',
        description:
            'Administración y Soporte técnico a la página web institucional llevando a cabo actualizaciones de             seguridad. Realización de formularios, cambios de las imágenes, crear enlaces, cambiar los datos de contacto.',
        date: 'May 2021 - Presente - Freelance',
    },
]

export const PROJECTS = [
    {
        title: 'Portal Inmobiliario',
        description:
            'Desarrollo UI de portal inmobiliario. Migración de aplicacion ReactJS a NextJS. Consumo de APIs y manipulación de eventos. Persistencia de datos en Local Storage.',
        link: 'https://colraices.com/casas-apartamentos-colombia-desde-el-exterior',
        class: 'md:col-span-3',
        image: '/projects/portal-inmobiliario.webp',
        imageClass: 'md:h-56',
    },
    {
        title: 'Coagroinduquibdo',
        description:
            'Desarrollo de sitio web empresarial para mejorar la presencia en internet de cooperativa nacional. Implementación de buenas prácticas de SEO. Uso de WordPress y Elementosr.',
        link: 'https://coagroinduquibdo.com/',
        class: 'md:col-span-3',
        image: '/projects/agroquibdo.webp',
        imageClass: 'md:h-56',
    },
    {
        title: 'Plataforma de empleo',
        description:
            'Reclutamiento y selección de personal. Dashboard para gestionar vacantes. Frontend de usuario final. Sistema de roles y autenticación.',
        link: 'https://github.com/genarogg/coldisama',
        class: 'md:col-span-2',
        image: '/projects/recruitment-project.webp',
        imageClass: 'md:h-40',
    },
    {
        title: 'Buscador de juegos',
        description:
            'Consumo de API de juegos gratuitos. UI desarrollada con ReactJS. Funcionalidad para buscar juegos con filtrado en tiempo real y paginación.',
        link: 'https://free-games-play.netlify.app/',
        class: 'md:col-span-2',
        image: '/projects/game-list.webp',
        imageClass: 'md:h-40',
    },
    {
        title: 'Notes App',
        description:
            'Aplicación web de notas para organizar, tomar notas y guardar lo que quieras. Desarrollada con ReactJS y persitencia de datos en Local Storage.',
        link: 'https://genarogg.github.io/app_tareas/',
        class: 'md:col-span-2',
        image: '/projects/notes-app.webp',
        imageClass: 'md:h-40',
    },
]

export const SKILLS = [
    {
        name: 'Next.js',
        class: 'bg-black text-white',
        icon: NextjsIcon,
    },
    {
        name: 'React.js',
        class: 'bg-white text-[#61DBFB]',
        icon: ReactIcon,
    },
    {
        name: 'Git',
        class: 'bg-[#3E2C0033] text-[#f1502f]',
        icon: GitIcon,
    },
    {
        name: 'HTML',
        class: 'bg-white text-[#F1502F]',
        icon: HtmlIcon,
    },
    {
        name: 'CSS',
        class: 'bg-[#0F5298] text-[#D5F3FE]',
        icon: CssIcon,
    },
    {
        name: 'Sass',
        class: 'bg-[#F0F0F0] text-[#6C6C6C]',
        icon: SassIcon,
    },
    {
        name: 'JavaScript',
        class: 'bg-[#323330] text-[#F0D84F]',
        icon: JavascriptIcon,
    },
    {
        name: 'Laravel',
        class: 'bg-[#F0F0F0] text-[#6C6C6C]',
        icon: LaravelIcon,
    },
    {
        name: 'MySQL',
        class: 'bg-[#F29111] text-white',
        icon: MySqlIcon,
    },
    {
        name: 'Python',
        class: 'bg-[#306998] text-[#FFD43B]',
        icon: PythonIcon,
    },
    {
        name: 'Node.js',
        class: 'bg-[#323330] text-[#79e162]',
        icon: NodejsIcon,
    },
]
