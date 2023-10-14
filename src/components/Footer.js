import React from 'react';
import backgroundImg from './p4.jpg';

function Footer() {
  const footerStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    padding: '20px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Align content to the center vertically
    alignItems: 'flex-start', // Align content to the left
  };

  const contactStyle = {
    fontSize: '2.5rem', // Increased font size
  };

  const contactLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    marginLeft: '10px',
  };

  const socialLinksStyle = {
    marginTop: '20px',
  };

  const socialLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    margin: '0 20px',
    fontSize: '2rem',
  };

  return (
    <footer style={footerStyle}>
      <div className="contact-details">
        <h2 style={contactStyle}>Contact Details</h2>
        <ul>
          <li>
            <strong>Email:</strong>
            <a href="mailto:sujanmekala64@gmail.com" style={contactLinkStyle}>sujanmekala</a>
          </li>
          <li>
            <strong>Phone:</strong>
            <a href="7989195631" style={contactLinkStyle}>+91 8639070246</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/mekala-sujan-09b8a3242/" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}>LinkedIn Profile</a>
          </li>
          <li>
            <strong>GitHub:</strong>
            <a href="https://github.com/sujanmekala64" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}>GitHub Profile</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;