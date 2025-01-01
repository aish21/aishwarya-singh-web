import React from 'react';
import jugaad from '../assets/images/jugaad-logo.jpg';
import covifit from '../assets/images/covifit-logo.jpeg';
import virtualeye from '../assets/images/eye.gif';
import trailx from '../assets/images/trailx-logo.png';
import wyldfire from '../assets/images/wyldfire-logo.jpeg';
import '../assets/styles/ProjectsComponent.scss';

function ProjectsComponent() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/aish21/Jugaad"
            target="_blank"
            rel="noreferrer"
          >
            <img src={jugaad} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/aish21/Jugaad"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Jugaad</h2>
          </a>
          <p>
            A web-app for entrepreneurs that allows them to easily set up an
            online business.
          </p>
        </div>
        <div className="project">
          <a
            href="https://ieeexplore.ieee.org/document/10605378"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={virtualeye}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://ieeexplore.ieee.org/document/10605378"
            target="_blank"
            rel="noreferrer"
          >
            <h2>VirtualEye</h2>
          </a>
          <p>
            "VirtualEYE is an advanced indoor navigation system for visually
            impaired individuals, integrating BLE technology and computer vision
            to provide real-time, voice-enabled assistance."
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.youtube.com/watch?v=UX5o0NyPbFc&t=1s"
            target="_blank"
            rel="noreferrer"
          >
            <img src={trailx} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=UX5o0NyPbFc&t=1s"
            target="_blank"
            rel="noreferrer"
          >
            <h2>TrailX</h2>
          </a>
          <p>
            A mobile application that allows users to explore and discover
            walking trails in Singapore
          </p>
        </div>
        <div className="project">
          <a
            href="https://drive.google.com/file/d/1lyzjULHx8RUe_V0mGnOnzIkuBPX2bxNr/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img src={covifit} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://drive.google.com/file/d/1lyzjULHx8RUe_V0mGnOnzIkuBPX2bxNr/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <h2>CoviFit</h2>
          </a>
          <p>
            A web application that connects fitness tutors and tutees on an
            online platform
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.youtube.com/watch?v=mbAhG0wBNj0"
            target="_blank"
            rel="noreferrer"
          >
            <img src={wyldfire} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=mbAhG0wBNj0"
            target="_blank"
            rel="noreferrer"
          >
            <h2>WyldFire</h2>
          </a>
          <p>A web based wildfire prediction and simulation</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
