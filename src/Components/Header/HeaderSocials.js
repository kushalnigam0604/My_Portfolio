import React from 'react';
import { BsLinkedin ,BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/kushal-nigam-582281186/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/kushalnigam0604" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials
