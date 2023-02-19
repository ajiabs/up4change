import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReactDOM from 'react-dom/client';




function FormTestComponents() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gj25ey7', 'template_ojowf4j', form.current, 'H-OUv6evnaVb1Oqlz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

    return ( 

<form id='#myForm' ref={form}  onSubmit={sendEmail}>
<label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
</form>

     );
}

export default FormTestComponents;