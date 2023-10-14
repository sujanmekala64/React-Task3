// export function Header(props){   //props is object here we sent sujan so it willl be name: sujan
//     return(
//         <div>
//             <h3>Header:{props.name} </h3>   
//         </div>
//     )
// }  //In the header we use props.name curly braces because in html code ur giving js code to represent the js code we use {}
// export function Footer(props){
//     return(
//         <div>
//            <h4>Footer:{props.brand}</h4>   
//         </div>
//     )
// }
//since the header and footer are here they will be displayed in the app.js since it imported this file
// export default Header;    //By using default only 1 will exported for one file

//TASK 6
import React from 'react';
import backgroundImg from './p1.avif';

function Header() {
  const headerStyle = {
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

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '10px',
  };

  const textContainerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    padding: '20px', // Add some padding to the text container
  };

  const textStyle = {
    fontSize: '1.2rem',
  };

  return (
    <header style={headerStyle}>
      <h1 style={headingStyle}>Hello, I am Mekala Sujan</h1>
      <div style={textContainerStyle}>
        <p style={textStyle}>
          I am a passionate and driven 3rd-year Computer Science Engineering student at VIT-Chennai University. With a strong academic foundation in computer science and engineering, I am on a mission to transform my love for technology into impactful projects and innovations.
        </p>
      </div>
    </header>
  );
}

export default Header;