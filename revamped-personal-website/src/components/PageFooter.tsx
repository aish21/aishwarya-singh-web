import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import '../assets/styles/PageFooter.scss';

function PageFooter() {
  return (
    <footer>
      <div>
        <a href="https://github.com/aish21" target="_blank" rel="noreferrer">
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/aishwarya-singh-547092174/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
    </footer>
  );
}

export default PageFooter;
