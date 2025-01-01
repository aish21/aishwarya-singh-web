import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import profilePic from '../assets/images/profile_pic.png';

function Main() {
  return (
    <div className="container">
      <div className="main-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/aish21"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/aishwarya-singh-547092174/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
          </div>
          <h1>Aishwarya Singh</h1>
          <p>Technology Analyst</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/aish21"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/aishwarya-singh-547092174/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
