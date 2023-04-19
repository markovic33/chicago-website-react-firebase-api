import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import jordan from '../../img/contactimg.jpg';
import jordan1 from '../../img/jordan1.jpg';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm(
    'service_xm7r7hi', 
    'template_ugf4fne', 
    form.current,
    'mqUne9AHpdwrWsDaa'
    )
    .then(() => {
      alert('Message successfully sent!')
      window.location.reload(false)
    }, () => {
      alert('Failed to send the message, please try again')
    });
  };

  return (
    <div className='contact__'>
        <div className="contact__left">
          <h1>Newsletter</h1>
          <>
          <img src={jordan} alt="/" />
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" />
          </form>
          </>
        </div>
        <div className="contact__right">
          <h1>Location</h1>
            <>
            <iframe style={{width:"550px",borderEndStartRadius:"5px", height:"330px",marginTop:"0px", marginRight: "30px"}} src="https://maps.google.com/maps?width=520&amp;height=442&amp;hl=en&amp;q=%20+(chicago)&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>
            <div className='contact__info'>
              <p>Email: chicago@bulls.com</p>
              <p>Phone: 555-333</p>
              <p>Adress: USA, Chicago</p>
            </div>
            </>
        </div>
    </div>
  )
}

export default Contact