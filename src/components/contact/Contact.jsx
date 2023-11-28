// import React from 'react';
// import './contact.css';
// import emailjs from 'emailjs-com';
// import { MdOutlineEmail } from 'react-icons/md';
// import { BsWhatsapp } from 'react-icons/bs';
// import { AiFillLinkedin } from 'react-icons/ai';

// const contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Replace these with your own EmailJS service, template, and user IDs
//     const serviceID = 'service_wi4zldg';
//     const templateID = 'template_8f7isov';
//     const userID = 'XMoehkNpirDy2emZN';

//     emailjs.sendForm(serviceID, templateID, e.target, userID)
//       .then((result) => {
//         console.log('Email sent successfully!', result.text);
//         // You can add a success message or clear the form here if needed.
//       }, (error) => {
//         console.error('Failed to send email:', error);
//         // You can add an error message here if needed.
//       });

//     // Clear the form after submission (optional)
//     e.target.reset();
//   };
//   return (
//     <section>
//       <h5>Get In Touch</h5>
//       <h2>Contact Me</h2>

//       <div className="container contact_containe">
//         <div className="contact_options">
//           <article className='contact_option'>
//             < MdOutlineEmail className='contact_option-icon' />
//             <h4>Email</h4>
//             <h5>btkkumbhar1998@gamil.com</h5>
//             <a href="mailto:bttkumbhar1998@gmailcom" target="_blank">Send a message</a>
//           </article>
//         </div>
//         <div className="contact_options">
//           <article className='contact_option'>
//             <BsWhatsapp className='contact_option-icon'/>
//             <h4>Whatsapp</h4>
//             <h5>tarun</h5>
//             <a href="https://api.whatsapp.com/send?phone+916370800493" target="_blank">Send a message</a>
//           </article>
//         </div>
//         <div className="contact_options">
//           <article className='contact_option'>
//             <AiFillLinkedin className='contact_option-icon'/>
//             <h4>Linkedin</h4>
//             <h5>Tarunaknta Kumbhar</h5>
//             <a href="https://www.linkedin.com/in/tarunakanta-kumbhar-5775a4201/" target="_blank">Send a message</a>
//           </article>
//         </div>

//         {/* End of contact option */}

//         <form action="">
//           <input type="text" name='name' placeholder='Your full name' required />
//           <input type="email" name='email' placeholder='Your email id' required />
//           <textarea name="message" rows="7" placeholder='Your message' required></textarea>
//           <button type='submit' className='btn btn-primary submitbtn'>Send message</button>
//         </form>
//       </div>
//       <br />
//       <br />
//       <br />
//     </section>
    
//   )
// }

// export default contact;



//final
import React from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your own EmailJS service, template, and user IDs
    const serviceID = 'service_wi4zldg';
    const templateID = 'template_8f7isov';
    const userID = 'XMoehkNpirDy2emZN';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        // You can add a success message or clear the form here if needed.
      }, (error) => {
        console.error('Failed to send email:', error);
        // You can add an error message here if needed.
      });

    // Clear the form after submission (optional)
    e.target.reset();
  };

  return (
    <section>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_containe">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>btkkumbhar1998@gamil.com</h5>
            <a href="mailto:bttkumbhar1998@gmailcom" target="_blank">Send a message</a>
          </article>
        </div>
        <div className="contact_options">
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>tarun</h5>
            <a href="https://api.whatsapp.com/send?phone+916370800493" target="_blank">Send a message</a>
          </article>
        </div>
        <div className="contact_options">
          <article className='contact_option'>
            <AiFillLinkedin className='contact_option-icon' />
            <h4>Linkedin</h4>
            <h5>Tarunaknta Kumbhar</h5>
            <a href="https://www.linkedin.com/in/tarunakanta-kumbhar-5775a4201/" target="_blank">Send a message</a>
          </article>
        </div>

        {/* Form for sending emails */}
        <form onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your email id' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary submitbtn'>Send message</button>
        </form>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default Contact;






// const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Replace these with your own EmailJS service, template, and user IDs
//     const serviceID = 'service_wi4zldg';
//     const templateID = 'template_8f7isov';
//     const userID = 'XMoehkNpirDy2emZN';

//     emailjs.sendForm(serviceID, templateID, e.target, userID)
//       .then((result) => {
//         console.log('Email sent successfully!', result.text);
//         // You can add a success message or clear the form here if needed.
//       }, (error) => {
//         console.error('Failed to send email:', error);
//         // You can add an error message here if needed.
//       });

//     // Clear the form after submission (optional)
//     e.target.reset();
//   };

//   return (
//     <section>
//       <h5>Get In Touch</h5>
//       <h2>Contact Me</h2>

//       <div className="container contact_container">
//         <div className="contact_options">
//           <article className='contact_option'>
//             <MdOutlineEmail className='contact_option-icon' />
//             <h4>Email</h4>
//             <h5>btkkumbhar1998@gamil.com</h5>
//             <a href="mailto:bttkumbhar1998@gmailcom" target="_blank">Send a message</a>
//           </article>
//         </div>
//         <div className="contact_options">
//           <article className='contact_option'>
//             <BsWhatsapp className='contact_option-icon' />
//             <h4>Whatsapp</h4>
//             <h5>tarun</h5>
//             <a href="https://api.whatsapp.com/send?phone+916370800493" target="_blank">Send a message</a>
//           </article>
//         </div>
//         <div className="contact_options">
//           <article className='contact_option'>
//             <AiFillLinkedin className='contact_option-icon' />
//             <h4>Linkedin</h4>
//             <h5>Tarunaknta Kumbhar</h5>
//             <a href="https://www.linkedin.com/in/tarunakanta-kumbhar-5775a4201/" target="_blank">Send a message</a>
//           </article>
//         </div>

//         {/* Form for sending emails */}
//         <form onSubmit={handleSubmit}>
//           <input type="text" name='name' placeholder='Your full name' required />
//           <input type="email" name='email' placeholder='Your email id' required />
//           <textarea name="message" rows="7" placeholder='Your message' required></textarea>
//           <button type='submit' className='btn btn-primary submitbtn'>Send message</button>
//         </form>
//       </div>
//       <br />
//       <br />
//       <br />
//     </section>
//   );
// };

// export default Contact;
