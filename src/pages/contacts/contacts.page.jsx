import './contacts.styles.scss'

const Contacts = () => {
    return (
        <div className='contacts-page' id='contacts'>
            <span className='title'>Let's Connect</span>
            <span className='subtitle'>Reach out to me via email, connect with me, 
            or explore my unique personal content.</span>
            <div className='socials-ct'>
                <img src='https://i.ibb.co/jrSChg5/7Bj98iE.webp' alt='email' width='65px' height='auto'/>
                <img src='https://i.ibb.co/hx6xjBt/PeEdSxE.webp' alt='linkedin' width='65px' height='auto' />
                <img src='https://i.ibb.co/37RLX3S/4AwORQM.webp' alt='github' width='65px' height='auto' />
            </div>
            <form>
                <span className='title'>Contact</span>
                <input required type='text' placeholder='Name' />
                <input required type='text' placeholder='Email' />
                <textarea required type='text' placeholder='Message' />
                <button type='submit'>send message -{'>'}</button>
            </form>
        </div>
    )
}

export default Contacts