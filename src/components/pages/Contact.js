import React from 'react';
import BreadCrumb from '../BreadCrumb'
import { Link } from 'react-router-dom'

const Contact = (props) => {
  return(
    <section className="contact-page">
      <BreadCrumb match={props.match}/>
      <h1 className="underline">Contact</h1>
      <h2>Get in Touch</h2>
      <p>Don't hesitate to contact us if you have any question, comment or feedback. We are all ears!</p>
        <div className="follow-us">
          <Link to="/">
            <img src= "/images/pictograms/facebook.svg" alt="facebook" className="social facebook"/>
          </Link>
          <Link to="/">
            <img src= "/images/pictograms/instagram.svg" alt="instagram" className="social instagram"/>
          </Link>
          <Link to="/">
            <img src= "/images/pictograms/linkedin.svg" alt="linkedin" className="social linkedin"/>
          </Link>
        </div>
      <div className="contact-main-container">
            <form>
              <div className="form-container">
                <label>Name:</label>
                <input placeholder="Your name"/>
              </div>
              <div className="form-container">
                <label>Email:</label>
                <input placeholder="Your e-mail"/>
              </div>
              <div className="form-container">
                <label>Phone:</label>
                <input placeholder="Your phone"/>
              </div>
              <div className="form-container">
                <label>Message:</label>
                <textarea placeholder="Write your message here"></textarea>
              </div>
              <button>Submit</button>
            </form>
      </div>
    </section>
  )
}

export default Contact
