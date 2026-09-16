import React from 'react';

export const links = {
  github: 'https://github.com/aish21',
  linkedin: 'https://www.linkedin.com/in/aishwarya-singh-547092174/',
  email: 'mailto:work.singh.aishwarya@gmail.com',
  pricer: 'https://github.com/aish21/ml-pricer',
  demo: 'https://aish-ml-pricer-frontend.up.railway.app/',
  publication: 'https://ieeexplore.ieee.org/document/10605378',
};

export function ExternalLink({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} target="_blank" rel="noreferrer">{children}<span aria-hidden="true"> ↗</span></a>;
}

export function SocialLinks() {
  return <div className="link-group"><ExternalLink href={links.github}>GitHub</ExternalLink><ExternalLink href={links.linkedin}>LinkedIn</ExternalLink></div>;
}
