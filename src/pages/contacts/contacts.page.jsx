import emailjs  from 'emailjs-com'

import './contacts.styles.scss'
import { useRef } from 'react'

const Contacts = () => {
    const formRef = useRef(null)
    const sendMail = e => {
        e.preventDefault()
        const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } = process.env

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, EMAILJS_USER_ID)
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
                <img src='https://i.ibb.co/jrSChg5/7Bj98iE.webp' alt='email' width='65px' height='auto'/>
                <img src='https://i.ibb.co/hx6xjBt/PeEdSxE.webp' alt='linkedin' width='65px' height='auto' />
                <img src='https://i.ibb.co/37RLX3S/4AwORQM.webp' alt='github' width='65px' height='auto' />
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