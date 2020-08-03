import React from 'react';

const Contact = () => (
  
  <div>
    <h3>Contact Page</h3>
      <form class='cForm'>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text"  name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email"  />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>    
      </form>
  </div>
);

export default Contact;
