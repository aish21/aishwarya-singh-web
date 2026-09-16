import React from 'react';
import { ExternalLink, links } from './Links';

function Research() {
  return (
    <section className="section shell" id="research" aria-labelledby="research-title">
      <div className="section-heading"><span className="section-number">03 /</span><h2 id="research-title">Research</h2></div>
      <article className="research-layout">
        <div><p className="eyebrow">First-author publication</p><h3 className="research-name">VirtualEYE</h3><p className="muted">2024 IEEE Conference on Artificial Intelligence (CAI)</p><ExternalLink href={links.publication}>Read the publication</ExternalLink></div>
        <div><h4 className="paper-title">Cultivating Navigational Autonomy in the Visually Impaired: A Novel Approach with VirtualEYE</h4>
          <p>An Android indoor navigation system for visually impaired users integrating BLE localisation, motion sensors, computer vision and multimodal feedback.</p>
          <p className="research-results">The evaluated system reduced visual navigation time by <strong>20.48%</strong> and non-visual navigation time by <strong>37.34%</strong>.</p>
        </div>
      </article>
    </section>
  );
}
export default Research;
