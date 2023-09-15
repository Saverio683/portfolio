import { Fragment } from 'react'
import './projects.styles.scss'

const projects = [
    {
        url: 'https://i.ibb.co/frFNhzP/logo-1.webp',
        def: 'mobile app start-up',
        title: 'MadNight',
        desc: `An innovative new social media platform that allows its users to express 
        themselves through music, sharing their experiences alongside people who share their same tastes 
        and interests.`,
        tags: ['full-stack developement', 'team leadership', 'product design']
    },
    {
        url: 'https://i.ibb.co/M569pc2/Screenshot-from-2023-09-15-00-25-00.webp',
        def: 'mobile app start-up',
        title: 'MadNight',
        desc: `An innovative new social media platform that allows its users to express 
        themselves through music, sharing their experiences alongside people who share their same tastes 
        and interests.`,
        tags: ['full-stack developement', 'team leadership', 'product design']
    },
    {
        url: 'https://i.ibb.co/hWy5YT0/Screenshot-from-2023-09-15-00-35-35.png',
        def: 'mobile app start-up',
        title: 'MadNight',
        desc: `An innovative new social media platform that allows its users to express 
        themselves through music, sharing their experiences alongside people who share their same tastes 
        and interests.`,
        tags: ['full-stack developement', 'team leadership', 'product design']
    }
]

const Projects = () => {
    return (
        <div className='projects-page' id='projects'>
            <div className='title'>personal projects</div>
            <div className='projects-ct'>
            {
                projects.map((p, i) => (
                    <div className='project'>
                    {
                        window.screen.width < 1250 || i %2 !== 0 ? (
                            <Fragment>
                                <div className='wrapper'>
                                    <span className='definition'>{p.def}</span>
                                    <span className='title'>{p.title}</span>
                                    <span className='desc'>{p.desc}</span>
                                    <div className='tags-ct'>
                                    {
                                        p.tags.map(t => (
                                            <span className='tag'>{t}</span>
                                        ))
                                    }
                                    </div>
                                    <button>see more</button>
                                </div>                                
                                <img 
                                    src={p.url} 
                                    alt='project' 
                                    width='50%'
                                    height='800px'
                                />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <img 
                                    src={p.url} 
                                    alt='project' 
                                    width='50%'
                                    height='800px'
                                />
                                <div className='wrapper'>
                                    <span className='definition'>{p.def}</span>
                                    <span className='title'>{p.title}</span>
                                    <span className='desc'>{p.desc}</span>
                                    <div className='tags-ct'>
                                    {
                                        p.tags.map(t => (
                                            <span className='tag'>{t}</span>
                                        ))
                                    }
                                    </div>
                                    <button>see more</button>
                                </div>
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