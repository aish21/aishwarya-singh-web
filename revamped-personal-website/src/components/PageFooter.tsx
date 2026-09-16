import React from 'react';
import { links, SocialLinks } from './Links';
import '../assets/styles/PageFooter.scss';

function PageFooter() {
  return <footer className="site-footer shell"><p>Aishwarya Singh <span aria-hidden="true">·</span> Singapore</p><div className="footer-links"><SocialLinks /><a href={links.email}>Email</a></div></footer>;
}
export default PageFooter;
