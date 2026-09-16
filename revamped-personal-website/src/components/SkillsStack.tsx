import React from 'react';
import '../assets/styles/SkillsStack.scss';

const groups = [
  ['Backend & Platform', ['Python', 'FastAPI', 'REST APIs', 'API Design', 'Microservices', 'Event-Driven Systems', 'AMPS Messaging', 'SQL']],
  ['Production Engineering', ['CI/CD', 'Docker', 'Automated Testing', 'Production Support', 'Incident Triage', 'Microsoft Azure', 'Code Review']],
  ['Applied ML / Quant', ['Machine Learning', 'LightGBM', 'Monte Carlo Simulation', 'Derivatives Pricing', 'Model Evaluation']],
  ['Additional', ['TypeScript', 'React', 'Java']],
] as const;

function SkillsStack() {
  return <section className="section shell" id="skills-stack" aria-labelledby="skills-title">
    <div className="section-heading"><span className="section-number">04 /</span><h2 id="skills-title">Technical skills</h2></div>
    <div className="skills-list">{groups.map(([title, skills]) => <div className="skill-row" key={title}><h3>{title}</h3><ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
  </section>;
}
export default SkillsStack;
