import React from 'react';

const Contact = () => (
  
  <div>
    <h1>Contact Page</h1>
      <form>
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
