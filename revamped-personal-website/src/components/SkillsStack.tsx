import React from 'react';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faDocker,
  faPython,
  faAndroid,
} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/SkillsStack.scss';

const webDev = [
  'ReactJS',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Flask',
  'Python',
  'SQL',
  'Postman',
];

const DevOps = ['Git', 'Docker', 'Azure'];

const mobileDev = ['Kotlin', 'Java', 'Flutter', 'Android Studio', 'Firebase'];

const dsML = ['Python', 'Pandas', 'NumPy', 'TensorFlow', 'OpenCV'];

function SkillsStack() {
  return (
    <div className="container" id="skills-stack">
      <div className="skills-group">
        <h1>Skills Stack</h1>
        <div className="skills-group-container">
          <div className="skills-group-item">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Web Development</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using modern technologies such as React and Flask, demonstrating
              strong proficiency in frontend and backend development.
            </p>
            <div className="all-skills">
              <span className="chip-title">Tech stack:</span>
              {webDev.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skills-group-item">
            <FontAwesomeIcon icon={faAndroid} size="3x" />
            <h3>Android Development</h3>
            <p>
              I have developed feature-rich Android applications using Kotlin
              and Java, with hands-on experience in Android Studio and a solid
              understanding of app lifecycle management.
            </p>
            <div className="all-skills">
              <span className="chip-title">Tech stack:</span>
              {mobileDev.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skills-group-item">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps</h3>
            <p>
              I have implemented CI/CD pipelines and containerized applications
              using Docker, Azure, and GIT, ensuring efficient deployment and
              robust version control.
            </p>
            <div className="all-skills">
              <span className="chip-title">Tech stack:</span>
              {DevOps.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skills-group-item">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Data Science & Machine Learning</h3>
            <p>
              I have worked on data analysis and machine learning projects using
              Python and frameworks like Pandas, NumPy, and TensorFlow,
              showcasing expertise in data manipulation and predictive modeling.
            </p>
            <div className="all-skills">
              <span className="chip-title">Tech stack:</span>
              {dsML.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsStack;
