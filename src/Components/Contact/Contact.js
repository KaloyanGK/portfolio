import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false)
    let userName = useRef();
    let userEmail = useRef();
    let userText = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_x6hc6gn', 'template_pt8cwpd', form.current, 's0zDqCINWWCJMTaxk')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
        userName.current.value = ''
        userEmail.current.value = ''
        userText.current.value = ''
    };
    return <div className='contact-form' id='Contact'>
        <div className='w-left'>
            <div className='awesome'>
                <span>Believe it or not this form works!</span>
                <span>If what you have seen so far seems interesting to you, <br />please do not hesitate to contact me by email or phone.</span>
                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>

            </div>
        </div>
        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' className='user' placeholder='Name / Company' ref={userName} />
                <input type='email' name='user_email' className='user' placeholder='Email' ref={userEmail} />
                <textarea name='message' className='user' placeholder='Message' ref={userText} />
                <input type='submit' value='Send' className='button' style={{ height: '2rem' }} />
                <span>{done && 'Thank you for reaching me!'}</span>
                <div className='blur c-blur1' style={{ background: 'var(--purple)' }}>
                </div>
            </form>
        </div>
    </div>
}
export default Contact;