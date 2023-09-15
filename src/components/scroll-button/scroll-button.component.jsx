import { useState } from 'react'
import './scroll-button.styles.scss'

const routes = [
    'home',
    'about',
    'projects',
    'contacts'
]

const ScrollButton = () => {
    const [currentRoute, setCurrentRoute] = useState(1)
    const handleClick = () => {
        if(currentRoute < routes.length) {
            document.getElementById(routes[currentRoute]).scrollIntoView()
            setCurrentRoute(prevRoute => prevRoute+1)
        } else {
            setCurrentRoute(1)
            document.getElementById(routes[0]).scrollIntoView()
        }
    }
    return (
        <div 
            className='scroll-button'
            onClick={handleClick}
        >
            <div className='arrow-animation-wrapper'>
                <div className='arrow' />
            </div>
            <div className='arrow-animation-wrapper'>
                <div className='arrow second' />
            </div>
            <span>see more</span>
        </div>
    )
}

export default ScrollButton