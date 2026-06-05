import React from 'react'
import './Contact.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import babblu from '../assets/babblu.png'

const Contact = () => {
  return (
    <div>
      <div className="card">
        <div className="card__img"></div>

        <div className="card__avatar">
          <img
            src={babblu}
            alt="profile"
            className="profile-img"
          />
        </div>

        <div className="card__title">Sandiri Dayakar</div>

        <div className="card__subtitle">
          Java Full Stack Developer
        </div>

        <div className="card__wrapper">
          <a
            href="https://github.com/sandiridayakar"
            target="_blank"
            rel="noreferrer"
            className="social-card github"
          >
            <FaGithub size={35} />
          </a>
          &nbsp;
          <a
            href="https://www.linkedin.com/in/sandiri-dayakar46/"
            target="_blank"
            rel="noreferrer"
            className="social-card linkedin"
          >
            <FaLinkedin size={35} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact