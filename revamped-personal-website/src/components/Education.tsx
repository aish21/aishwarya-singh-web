import React from 'react';
import '../assets/styles/Education.scss';

function Education() {
  return (
    <div className="education-container" id="education">
      <h1>Education</h1>
      <div className="education-grid">
        <div className="education-item">
          <h2>Nanyang Technological University, Singapore</h2>
          <p>Bachelor of Engineering (Hon.) in Computer Engineering</p>
          <p>2019 - 2023</p>
          <ul>
            <li>Specialisation: Data Science & Artificial Intelligence</li>
            <li>
              Publication: 'Cultivating Navigational Autonomy in the Visually
              Impaired: A Novel Approach with VirtualEYE' - 2024 IEEE Conference
              on Artificial Intelligence (CAI)
            </li>
            <li>
              Google Developer Students Club (GDSC) @ NTU (2020-2022) - Events
              Member | Lead
            </li>
            <li>
              Institute of Electrical and Electronics Engineers (IEEE) @ NTU
              (2019-2022) - Tech Director | Logistics Officer | Events
              Chairperson
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
