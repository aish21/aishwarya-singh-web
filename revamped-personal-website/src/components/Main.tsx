import React from 'react';
import { SocialLinks } from './Links';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <section className="hero shell" id="home" aria-labelledby="hero-title">
      <p className="eyebrow">Backend & platform engineering <span className="hero-location">Singapore</span></p>
      <h1 id="hero-title">Aishwarya Singh<span className="accent">.</span></h1>
      <p className="hero-statement">Software Engineer II building backend and platform systems for global markets.</p>
      <p className="hero-description">I work across APIs, pricing and booking workflows, event-driven systems, production reliability, and applied machine learning.</p>
      <div className="hero-actions"><a className="button primary" href="#projects">View my work <span aria-hidden="true">↓</span></a><SocialLinks includeResume /></div>
      <div className="hero-note"><span>Currently at Bank of America</span><span>Equity Linked Technology / Structured Products</span></div>
    </section>
  );
}
export default Main;
