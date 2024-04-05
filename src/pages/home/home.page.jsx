import { useRef, useEffect } from 'react'
import Typed from 'typed.js'

import About from '../about/about.page'
import Contacts from '../contacts/contacts.page'
import Projects from '../projects/projects.page'

import './home.styles.scss'

const Home = () => {
    const spanRef = useRef(null)

    useEffect(() => {
        const typed = new Typed(spanRef.current, {
            strings: ["Hi, I’m Saverio Randazzo", 'Artificial Intelligence Student', 'Software Engineer'],
            typeSpeed: 50,
            backSpeed: 40,
            showCursor: false,
            loop: true
        })
    
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy()
        }
    }, [])

    return (
        <div className='home-page' id='home'>
            <div className='home-section'>
                <span ref={spanRef} />
            </div>
            <About />
            <Projects />
            <Contacts />
        </div>
    )
}

export default Home