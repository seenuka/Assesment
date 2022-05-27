import React from 'react'
import './style/contact.css'

function Contact() {
  return (
    <div className="contact">
    <div className="rightSide">
      <h3> Contact Us</h3>

      <form id="contact-form" method="POST">
        <label htmlFor="name">Full Name</label>
        <input name="name" placeholder="Enter full name..." type="text" />
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="Enter email..." type="email" />
        <label htmlFor="message">Why you need Starlink</label>
        <textarea
          rows="2"
          placeholder="Enter message..."
          name="message"
          required
        ></textarea>
        <p>We will contact you back by sending request </p>
        <button type="submit"> Send Request</button>
      </form>
    </div>
  </div>
  )
}

export default Contact