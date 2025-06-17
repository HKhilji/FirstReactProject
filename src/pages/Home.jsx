import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import './Home.css';

function Home({ mode }) {
  return (
    <div className={`page ${mode}`}>  
    <img src={'/profile.jpg'} alt="Profile" className="profile-pic" />      
      <h1>Huzaifa Ahmed Khilji</h1>
      <h2>Developer & Tech Enthusiast</h2>
      <br></br>
      <p>Passionate about building modern technology and tools that help society. <br></br>Currently learning ReactJS</p>

      <div className = 'social-icons'>
        <a href="https://github.com/HKhilji" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/huzaifa-ahmed-168120286/" target="_blank" rel="nooperner noreferrer">
          <FaLinkedin />
        </a>
      
        <a href="https://www.facebook.com/yeet.khilji/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    
    </div>
  );
}

export default Home;
