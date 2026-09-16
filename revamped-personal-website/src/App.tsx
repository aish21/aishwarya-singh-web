import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import ProjectsComponent from './components/ProjectsComponent';
import Research from './components/Research';
import SkillsStack from './components/SkillsStack';
import Education from './components/Education';
import ContactMe from './components/ContactMe';
import PageFooter from './components/PageFooter';
import './index.scss';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch { /* Theme remains usable when storage is unavailable. */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', mode === 'dark' ? '#191b1e' : '#f7f6f2');
    try { localStorage.setItem('portfolio-theme', mode); } catch { /* Optional persistence. */ }
  }, [mode]);

  return (
    <div className="main-container">
      <a className="skip-link" href="#main">Skip to content</a>
      <NavBar mode={mode} modeChange={() => setMode(mode === 'dark' ? 'light' : 'dark')} />
      <main id="main" tabIndex={-1}>
        <Main />
        <Experience />
        <ProjectsComponent />
        <Research />
        <SkillsStack />
        <Education />
        <ContactMe />
      </main>
      <PageFooter />
    </div>
  );
}

export default App;
