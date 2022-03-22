import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  
export function SocialFollow() {
    return (
      <div className='pt-4'>
        <a href="https://www.facebook.com/profile.php?id=100008351808153"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/gagegabaldon/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://github.com/GageGabaldon"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/gage-gabaldon-6a3a97199/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    );
  }