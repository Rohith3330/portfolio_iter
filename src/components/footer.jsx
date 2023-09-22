import React from 'react'
import { SectionWrapper } from '../hoc';
import { styles } from "../styles";
import { linkedin ,twitter,github} from "../assets";
import "../style.css"
const Footer = () => {
  return (
  <><div
  onClick={() => window.open("https://rohith3330.github.io.", "_blank")}
  className='flex justify-center items-center cursor-pointer'
>
      <a className={`${styles.sectionHeadText}`}>Resume</a>
  </div>
  {/* <div
          onClick={() => window.open("https://www.linkedin.com/in/rohith3330/", "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
          <img
              src={linkedin}
              alt='source code'
              className='w-1/2 h-1/2  flex justify-center object-contain items-center' />
      </div> */}
      <div class="social-links">
        <a href="https://www.linkedin.com/in/rohith3330/" target="_blank">
            <img src={linkedin}alt="linkdin"/>
        </a>
        <a href="https://twitter.com/RohithManikant3" target="_blank">
            <img src={twitter} alt="Twitter"/>
        </a>
        <a href="https://twitter.com/RohithManikant3" target="_blank">
            <img src={github} alt="github"/>
        </a>
    </div>
      </>
      
  )
}

export default SectionWrapper(Footer,"");