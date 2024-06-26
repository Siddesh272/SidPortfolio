import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Compose the email body
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Create a mailto link with prefilled data
    const mailtoLink = `mailto:mishrasiddesh777@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(body)}`;

    // Open the default email client with the prefilled email
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
