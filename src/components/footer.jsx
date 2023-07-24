import React from 'react'
import { SectionWrapper } from '../hoc';
import { styles } from "../styles";
import { linkedin } from "../assets";
const Footer = () => {
  return (
  <><div
  onClick={() => window.open("https://rohith3330.github.io.", "_blank")}
  className='flex justify-center items-center cursor-pointer'
>
      <a className={`${styles.sectionHeadText}`}>Resume</a>
  </div>
  <div
          onClick={() => window.open("https://www.linkedin.com/in/rohith3330/", "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
          <img
              src={linkedin}
              alt='source code'
              className='w-1/2 h-1/2  flex justify-center object-contain items-center' />
      </div></>
  )
}

export default SectionWrapper(Footer,"");