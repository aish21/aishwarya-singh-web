import React, { useRef, useState } from 'react';
import '../assets/styles/NavBar.scss';

const sections = [
  ['Experience', 'history'], ['Work', 'projects'], ['Research', 'research'],
  ['Skills', 'skills-stack'], ['Education', 'education'], ['Contact', 'contact-me'],
];

function NavBar({ mode, modeChange }: { mode: 'light' | 'dark'; modeChange: () => void }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header" onKeyDown={event => {
      if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); }
    }}>
      <div className="nav-inner shell">
        <a className="wordmark" href="#home" aria-label="Aishwarya Singh, home" onClick={() => setOpen(false)}>AS<span aria-hidden="true">.</span></a>
        <nav id="section-navigation" className={open ? 'section-nav is-open' : 'section-nav'} aria-label="Main navigation">
          {sections.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <div className="nav-controls">
          <button className="theme-toggle" onClick={modeChange} aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {mode === 'light' ? <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" /> : <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>}
            </svg>
          </button>
          <button ref={menuButton} className="menu-toggle" aria-expanded={open} aria-controls="section-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        </div>
      </div>
    </header>
  );
}
export default NavBar;
