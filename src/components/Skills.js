import React from 'react';
import backgroundImg from './p3.jpg';

function Skills() {
  const skillsList = [
    'Java Programming',
    'HTML/CSS',
    'Python',
    'JavaScript',
    'React',
    'Node.js',
    'SQL',
    'Web Development',
    'Data Structures',
    'Algorithms',
    'Problem Solving',
  ];

  const sectionStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Align content to the top
    alignItems: 'flex-start', // Align content to the left
    color: 'white',
    textAlign: 'left',
    padding: '20px', // Add some padding
  };

  const listStyle = {
    listStyleType: 'none', // Remove default bullets
    fontSize: '1.2rem',
    marginBottom: '10px', // Increased gap between skills
  };

  const arrowStyle = {
    fontSize: '1.5rem',
    color: 'white',
    marginRight: '10px', // Space between arrow and skill
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', margin: '20px' }}>Skills</h2>
      <ul className="skills-list" style={listStyle}>
        {skillsList.map((skill, index) => (
          <li key={index}>
            <span style={arrowStyle}>&rarr;</span>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;