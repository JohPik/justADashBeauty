import React from 'react';
import BreadCrumb from '../BreadCrumb'

const Contact = (props) => {
  return(
    <section className="contact-page">
      <BreadCrumb match={props.match}/>
      <h1 className="underline">Contact</h1>
      <h2>Get in Touch</h2>
      <p>Don't hesitate to contact us if you have any question, comment or feedback. We are all ears!</p>

      <div className="contact-main-container">
        <div className="contact-sub-container">
          <h2>Contact</h2>
          <h2>Follow US</h2>
        </div>

        <div className="contact-sub-container">
          <h2>Contact Form</h2>
            <form method="post" action="/contact#contact_form" accept-charset="UTF-8" class="contact-form">
              <div className="form-container">
                <label for="inputName">Name:</label>
                <input name="contact[name]" type="text" placeholder="Your name"/>
              </div>
              <div className="form-container">
                <label for="inputEmail">Email:</label>
                <input name="contact[email]" type="email" placeholder="Your e-mail"/>
              </div>
              <div className="form-container">
                <label for="inputEmail">Phone:</label>
                <input name="contact[phone]" type="tel" placeholder="Your phone"/>
              </div>
              <div className="form-container">
                <label for="inputName">Message:</label>
                <textarea name="contact[body]"rows="8" placeholder="Write your message here" id="textareaMessage"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
