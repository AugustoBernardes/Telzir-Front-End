import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faGithub,faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons'

import classes from "../footer/Footer.module.scss"

const Footer = () => {
  return (
    <footer>
        <div className={classes.container}>
            <div className={classes.social}>
                {/* Desativated for now */}
                {/* <div className={classes.social_title}>
                    <h3>Social Media</h3>
                </div> */}
                <div className={classes.social_links}>
                    <a href="mailto:augustobdev@outlook.com"><FontAwesomeIcon className={classes.icons} icon={faEnvelope} size='lg'/></a>
                    <a href="https://github.com/AugustoBernardes" target="_blank"><FontAwesomeIcon className={classes.icons} icon={faGithub} size='lg'/></a>
                    <a href="https://twitter.com/npm_augusto" target="_blank"><FontAwesomeIcon className={classes.icons} icon={faTwitter} size='lg'/></a> 
                    <a href="https://www.linkedin.com/in/augusto-bernardes-a53b291bb/" target="_blank"><FontAwesomeIcon className={classes.icons} icon={faLinkedin} size='lg'/></a> 
                </div>
            </div>
            <div className={classes.about}>
                <p>©  Todos direitos reservados Telzir 2022</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer