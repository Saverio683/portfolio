import emailjs  from 'emailjs-com'

import './contacts.styles.scss'
import { useRef } from 'react'

const { REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_USER_ID } = process.env

const Contacts = () => {
    const formRef = useRef(null)
    const sendMail = e => {
        e.preventDefault()
        emailjs.sendForm(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, e.target, REACT_APP_EMAILJS_USER_ID)
            .then(() => {
                alert('Email correctly sent!')
            }, (err) => {
                alert('Ops... something went wrong')
                console.error(err)
            })

        e.target.reset()
    }
    return (
        <div className='contacts-page' id='contacts'>
            <span className='title'>Let's Connect</span>
            <span className='subtitle'>Reach out to me via email, connect with me, 
            or explore my unique personal content.</span>
            <div className='socials-ct'>
                <a href='mailto:saveriorandazzo51@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <img src='https://i.ibb.co/jrSChg5/7Bj98iE.webp' alt='email' width='65px' height='auto'/>
                </a>
                <a href='https://www.linkedin.com/in/saverio-randazzo-289993291/' target='_blank' rel='noopener noreferrer'>
                    <img src='https://i.ibb.co/hx6xjBt/PeEdSxE.webp' alt='linkedin' width='65px' height='auto' />
                </a>
                <a href='https://github.com/Saverio683' target='_blank' rel='noopener noreferrer'>
                    <img src='https://i.ibb.co/37RLX3S/4AwORQM.webp' alt='github' width='65px' height='auto' />
                </a>
            </div>
            <form ref={formRef} onSubmit={sendMail}>
                <span className='title'>Contact</span>
                <input required type='text' placeholder='Name' name='from_name' />
                <input required type='text' placeholder='Email' name='from_email' />
                <textarea required type='text' placeholder='Message' name='message' />
                <button type='submit'>send message -{'>'}</button>
            </form>
        </div>
    )
}

export default Contacts