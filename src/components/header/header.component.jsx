import './header.styles.scss'

const routes = ['about', 'projects', 'contacts']

const Header = () => {
    const handleClick = route => {
        const section = document.getElementById(route)
        section.scrollIntoView()
    }
    return (
        <header>
            <span 
                className='logo'
                onClick={() => window.scrollTo(0,0)}
            >
                sr
            </span>
            <div className='menu'>
            {
                routes.map(r => (
                    <span 
                        key={r} 
                        onClick={() => handleClick(r)}
                        className='item'
                    >
                        {r}
                    </span>
                ))
            }
            </div>
        </header>
    )
}

export default Header