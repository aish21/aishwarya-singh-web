import React from 'react';
import { ExternalLink, links } from './Links';
import '../assets/styles/ProjectsComponent.scss';

const earlier = [
  { title: 'TrailX', description: 'A mobile application for discovering and exploring walking trails in Singapore.', tags: 'Mobile · Location services', href: 'https://www.youtube.com/watch?v=UX5o0NyPbFc' },
  { title: 'Jugaad', description: 'A platform for entrepreneurs to set up online storefronts and promote their businesses.', tags: 'Web · E-commerce', href: 'https://github.com/aish21/Jugaad' },
  { title: 'CoviFit', description: 'An online fitness platform connecting tutors and learners, with live sessions and pose correction.', tags: 'Web · Pose detection', href: 'https://drive.google.com/file/d/1lyzjULHx8RUe_V0mGnOnzIkuBPX2bxNr/view' },
  { title: 'WyldFire', description: 'A web-based wildfire prediction and simulation tool using location data and pathfinding.', tags: 'Web · Dijkstra’s algorithm', href: 'https://www.youtube.com/watch?v=mbAhG0wBNj0' },
];

function ProjectsComponent() {
  return (
    <section className="section work-section" id="projects" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-heading"><span className="section-number">02 /</span><h2 id="work-title">Featured work</h2></div>
        <article className="featured-project">
          <div className="project-intro">
            <p className="eyebrow">Independent project / Applied ML & quant</p>
            <h3>ML-Pricer</h3>
            <p className="project-lead">A research and engineering platform exploring machine-learning approximations for path-dependent structured-product pricing while retaining Monte Carlo simulation as the reference pricing engine.</p>
            <div className="link-group project-actions"><ExternalLink className="button primary" href={links.demo}>Live Demo</ExternalLink><ExternalLink href={links.pricer}>GitHub</ExternalLink></div>
            <p className="technologies">Python · FastAPI · Streamlit · LightGBM · Docker</p>
          </div>
          <div className="project-detail">
            <h4>Reference pricing. Measured ML.</h4>
            <p>ML models generate predictions alongside eligible Monte Carlo requests in shadow mode. Predictions never alter the reference price: error, latency and other evidence are recorded while ML stays isolated from the authoritative pricing path.</p>
            <ul className="engineering-list">
              <li>Phoenix and barrier reverse convertible pricing, with scenario and Greeks analytics.</li>
              <li>Model evaluation, sealed audits and artifact validation.</li>
              <li>Error and latency monitoring; health, readiness and metrics endpoints.</li>
              <li>Docker, CI and automated deployment smoke tests.</li>
            </ul>
          </div>
        </article>
        <div className="project-results" aria-label="ML-Pricer evaluation results">
          <p><strong>R² &gt; 0.98</strong><span>on tested configurations</span></p>
          <p><strong>~20–100×</strong><span>faster inference than Monte Carlo in tested configurations</span></p>
          <p className="results-note">Evaluation results are configuration-dependent; they do not imply universal pricing accuracy or speed.</p>
        </div>
        <div className="earlier-projects"><h3 className="small-heading">Earlier projects</h3>
          <div className="earlier-project-grid">{earlier.map(project => <article key={project.title}>
            <h4>{project.href ? <ExternalLink href={project.href}>{project.title}</ExternalLink> : project.title}</h4>
            <p>{project.description}</p><p className="technologies">{project.tags}</p>
          </article>)}</div>
        </div>
      </div>
    </section>
  );
}
export default ProjectsComponent;
