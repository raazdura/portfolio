import React from "react"

import IconGithub from './images/github'
import IconLinkedIn from './images/in'
import IconTwitter from './images/twitter'
import IconInstagram from './images/instagram'
import IconCodepen from './images/codepen'
import IconCodewars from './images/codewars'


const SocialIconLinks = ({ flexDirection }) => {

  return (
    <div className={`flex ${flexDirection} gap-4`}>
      <a href="https://github.com/raazdura" target="_blank" rel="noopener noreferrer">
        <IconGithub  />
      </a>
      <a href="https://www.instagram.com/raaz_dura" target="_blank" rel="noopener noreferrer">
        <IconLinkedIn   />
      </a>
      {/* <a href="https://twitter.com/cadekynaston" target="_blank" rel="noopener noreferrer">
        <IconTwitter   />
      </a> */}
      <a href="https://www.instagram.com/raaz_dura" target="_blank" rel="noopener noreferrer">
        <IconInstagram   />
      </a>
      {/* <a href="https://codepen.io/cadekynaston/" target="_blank" rel="noopener noreferrer">
        <IconCodepen   />
      </a>
      <a href="https://codewars.com/users/ck1" target="_blank" rel="noopener noreferrer">
        <IconCodewars   />
      </a> */}
    </div>
  )
}

export default SocialIconLinks
