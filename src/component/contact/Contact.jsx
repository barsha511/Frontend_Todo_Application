import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries or feedback!</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your message"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
