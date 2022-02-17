import React from 'react';
import "./footer.css"
import LinkedIn from './linkedInLogo.webp'
import GitHub from './gitLogo.png'


const Footer = () => {

  return (
    <footer>

      <div className='footerProfiles'>
        <a id="footer_names" href="https://www.linkedin.com/in/daniel-lavergne-137772206/" target="_blank" rel="noreferrer noopener">Daniel LaVergne
        </a>
        <a href="https://www.linkedin.com/in/daniel-lavergne-137772206/" target="_blank" rel="noreferrer noopener" className='linkedinlink'>
          <img src={LinkedIn} className='linkedinlogo' alt="" />
        </a>
        <a href='https://github.com/DanielLaV' className='gitlink' target="_blank" rel="noreferrer noopener" >
          <img src={GitHub} className="gitlogo" alt="" />
        </a>
      </div>

    </footer>
  );
}

export default Footer;
