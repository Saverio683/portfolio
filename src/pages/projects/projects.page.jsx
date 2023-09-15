import { Fragment } from 'react'
import './projects.styles.scss'

const projects = [
    {
        imgUrl: 'https://i.ibb.co/frFNhzP/logo-1.webp',
        def: 'mobile app start-up',
        title: 'MadNight',
        desc: `An innovative new social media platform that allows its users to express 
        themselves through music, sharing their experiences alongside people who share their same tastes 
        and interests.`,
        tags: ['full-stack developement', 'team leadership', 'product design'],
        link: 'https://www.madnight.it'
    },
    {
        imgUrl: 'https://i.ibb.co/M569pc2/Screenshot-from-2023-09-15-00-25-00.webp',
        def: 'fullstack ecommerce platform',
        title: 'E-commerce',
        desc: `A fullstack project that I show potential clients when I'm freelancing. 
        It was implemented with the MERN stack and TypeScript.
        The design was realized with Canva`,
        tags: ['full-stack project', 'typescript', 'real-life applications'],
        link: 'https://github.com/Saverio683/ecommerce-front'
    },
    {
        imgUrl: 'https://i.ibb.co/hWy5YT0/Screenshot-from-2023-09-15-00-35-35.png',
        def: 'portfolio site',
        title: 'Personal portfolio',
        desc: `This is the second portfolio I have made and published in my github, 
        made with React and designed with Figma.`,
        tags: ['react', 'figma', 'web design'],
        link: 'https://github.com/Saverio683/portfolio'
    }
]

const Projects = () => {
    const Wrapper = ({p}) => (
        <div className='wrapper'>
            <span className='definition'>{p.def}</span>
            <span className='title'>{p.title}</span>
            <span className='desc'>{p.desc}</span>
            <div className='tags-ct'>
            {
                p.tags.map(t => (
                    <span className='tag' key={t}>{t}</span>
                ))
            }
            </div>
            <button>see more</button>
        </div>  
    )
    const Image = ({p}) => (
        <img 
            src={p.imgUrl} 
            alt='project' 
            width='50%'
            height='800px'
        />
    )
    return (
        <div className='projects-page' id='projects'>
            <div className='title'>personal projects</div>
            <div className='projects-ct'>
            {
                projects.map((p, i) => (
                    <div className='project' key={p.title}>
                    {
                        (window.screen.width < 1250 || i %2 !== 0) ? (
                            <Fragment>
                                <Wrapper p={p} />                                
                                <Image p={p} />
                            </Fragment>
                        ) : (
                            <Fragment>                               
                                <Image p={p} />
                                <Wrapper p={p} /> 
                            </Fragment>
                        )
                    }
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Projects