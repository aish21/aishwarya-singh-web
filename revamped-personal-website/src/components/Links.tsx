import React from 'react';

export const links = {
  github: 'https://github.com/aish21',
  linkedin: 'https://www.linkedin.com/in/aishwarya-singh-547092174/',
  email: 'mailto:work.singh.aishwarya@gmail.com',
  pricer: 'https://github.com/aish21/ml-pricer',
  demo: 'https://aish-ml-pricer-frontend.up.railway.app/',
  publication: 'https://ieeexplore.ieee.org/document/10605378',
  resume: `${process.env.PUBLIC_URL}/Aishwarya_Singh_Resume.pdf`,
};

export function ExternalLink({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} target="_blank" rel="noreferrer">{children}<span aria-hidden="true"> ↗</span></a>;
}

export function SocialLinks({ includeResume = false }: { includeResume?: boolean }) {
  return <div className="link-group"><ExternalLink href={links.github}>GitHub</ExternalLink><ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>{includeResume && <ExternalLink href={links.resume} aria-label="Resume (PDF, opens in a new tab)">Resume</ExternalLink>}</div>;
}
