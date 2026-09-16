import React from 'react';
import { links, SocialLinks } from './Links';
import '../assets/styles/ContactMe.scss';

function ContactMe() {
  return <section className="section shell contact-section" id="contact-me" aria-labelledby="contact-title">
    <div className="section-heading"><span className="section-number">06 /</span><h2 id="contact-title">Contact</h2></div>
    <div className="contact-layout"><h3>Want to get in touch?</h3><div><a className="email-link" href={links.email}>work.singh.aishwarya@gmail.com <span aria-hidden="true">↗</span></a><SocialLinks /></div></div>
  </section>;
}
export default ContactMe;
