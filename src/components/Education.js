import React from 'react';
import backgroundImg from './p2.avif';

function Education() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  };

  const educationData = [
    {
      institution: 'VIT-Chennai University',
      degree: 'Bachelor of Technology (B.Tech)',
      fieldOfStudy: 'Computer Science Engineering',
      graduationDate: 'Expected May 2025',
      description: 'Relevant coursework: Data science,Data Structures, Algorithms, Web Development, Databases, etc.',
    },
    {
      institution: 'Sri Chaitanya Junior College',
      degree: 'Intermediate Education',
      fieldOfStudy: 'Science',
      graduationDate: '2021',
      description: 'Achieved 97.3% in the intermediate exams.',
    },
    {
      institution: 'Oxford High School',
      degree: 'Secondary Education',
      fieldOfStudy: 'High School Diploma',
      graduationDate: '2019',
      description: 'Achieved a perfect 9.8 CGPA in secondary school.',
    },
  ];

  const entryStyle = {
    fontFamily: 'Arial, sans-serif',
    marginBottom: '20px',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ fontFamily: 'Cursive, fantasy', fontSize: '2.5rem', margin: '20px' }}>My Educational Journey</h2>
      <div className="education-entries">
        {educationData.map((edu, index) => (
          <div style={entryStyle} key={index}>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginBottom: '10px' }}>{edu.degree}</h3>
            <p className="institution" style={{ fontFamily: 'Verdana, sans-serif', fontSize: '1.2rem' }}>{edu.institution}</p>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem' }}>{edu.fieldOfStudy}</p>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>Graduated in {edu.graduationDate}</p>
            <ul style={{ listStyleType: 'disc', fontFamily: 'Arial, sans-serif', fontSize: '1rem', paddingLeft: '20px' }}>
              <li>{edu.description}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;