import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactgif from './contactgif.gif';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kdol73s', 'template_u9nccdr', form.current, 'bj8FpBhCfIKssopiK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div id='form-page' className="form">
    <div className="form-left"><img className='contactgif' src={contactgif} alt="" /></div>
    <div className="form-right">

    <div className="form-div">
    <h1 className='form-head'>Contact Me!</h1>
       <form ref={form} onSubmit={sendEmail}>
        <div className="input-container">
        <label>Name</label>
    <input type="text" name="from_name" />
        </div>
   <div className="input-container">
   <label>Email</label>
    <input type="email" name="from_email" />
   </div>
    <div className="input-container">
    <label>Message</label>
    <textarea name="message" />
    </div>
    
    <input className='form-butt' type="submit" value="Send" />
  </form>
    </div>
     
    </div>
    </div>

   
  );
};
export default Contact;