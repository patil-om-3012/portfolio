import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import leetcode from './images/leetcode.ico';

const Heading = () => {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li><a href="https://www.linkedin.com/in/om-patil-a22a1322a/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a></li>
            <li><a href="https://github.com/patil-om-3012" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a></li>
            <li><a href="mailto:omvijaypatil07@gmail.com"><EmailIcon /></a></li>
            <li className='lc'><a href='https://leetcode.com/u/__om_patil_30/' target="_blank" rel="noopener noreferrer"> <img src={leetcode} alt="" /> </a></li>
            <li><a href="https://www.instagram.com/__.omp.30/" target="_blank" rel="noopener noreferrer"> <InstagramIcon /> </a></li>
          </ul>
        </nav>
        </div>
    </header>
  );
};

export default Heading;
