import React from 'react';
import '../assets/styles/Experience.scss';

const roles = [
  {
    title: 'Software Engineer II', team: 'Equity Linked Technology / Structured Products', dates: 'Jul 2025 – Present',
    points: [
      <>Architected a unified Quote API to persist pricing results and metadata across desks, centralising business rules and reducing quote-capture time by <strong>79%</strong>.</>,
      <>Scaled backend and API workflows from approximately 2–10 to <strong>120–150 completed trade bookings per week</strong>.</>,
      <>Reduced end-to-end quote-pricing compute time by approximately <strong>40%</strong> through pricing-engine and downstream integration improvements.</>,
      <>Own delivery and APAC production support for pricing and booking services used across APAC, EMEA and the Americas.</>,
    ],
    technologies: 'Python · APIs · Microservices · Event-driven systems · CI/CD · Production systems',
  },
  {
    title: 'Graduate Technology Analyst', team: 'Equity Linked Technology', dates: 'Jul 2023 – Jul 2025',
    points: [
      <>Scaled a React/TypeScript real-time quote dashboard and blotter from roughly <strong>150K to 1M stored quotes</strong>.</>,
      <>Re-engineered Python microservice APIs for quote retrieval, improving frontend query performance by <strong>60%</strong>.</>,
      <>Strengthened automated testing, CI/CD quality gates and production release reliability.</>,
    ],
    technologies: 'Python · React · TypeScript · Microservices · AMPS · Automated testing',
  },
];
const earlier = [
  ['Panasonic R&D', 'Web and Mobile Development Intern', 'Robotics control interfaces, backend and cloud integration, Docker/Azure, and mobile development.'],
  ['Ubisoft', 'Data Science Intern', 'Recommendation systems, neural networks and model optimisation.'],
  ['TAIGER', 'Software Engineering Intern', 'Search infrastructure, backend automation, crawlers and testing.'],
];

function Experience() {
  return (
    <section className="section shell" id="history" aria-labelledby="experience-title">
      <div className="section-heading"><span className="section-number">01 /</span><h2 id="experience-title">Professional experience</h2></div>
      {roles.map(role => <article className="experience-row" key={role.title}>
        <div className="role-meta"><p className="eyebrow">{role.dates}</p><h3>{role.title}</h3><p className="company">Bank of America</p><p className="muted">{role.team}</p><p className="muted">Singapore</p></div>
        <div><ul className="impact-list">{role.points.map((point, index) => <li key={index}>{point}</li>)}</ul><p className="technologies">{role.technologies}</p></div>
      </article>)}
      <div className="earlier-experience"><h3 className="small-heading">Earlier experience</h3>
        {earlier.map(([company, role, summary]) => <article className="earlier-row" key={company}><div><h4>{company}</h4><p className="muted">{role}</p></div><p>{summary}</p></article>)}
      </div>
    </section>
  );
}
export default Experience;
