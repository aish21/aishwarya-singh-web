import React, { useState, useEffect } from 'react';
import {
  Main,
  Experience,
  SkillsStack,
  ProjectsComponent,
  ContactMe,
  NavBar,
  PageFooter,
  Education,
} from './components';
import AnimateComponent from './components/AnimateComponent';
import './index.scss';

function App() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}
    >
      <NavBar parentToChild={{ mode }} modeChange={handleModeChange} />
      <AnimateComponent transitionDuration={700}>
        <Main />
        <SkillsStack />
        <Education />
        <Experience />
        <ProjectsComponent />
        <ContactMe />
      </AnimateComponent>
      <PageFooter />
    </div>
  );
}

export default App;
