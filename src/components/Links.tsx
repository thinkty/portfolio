import React from 'react';
import { GithubIcon, HomeIcon, LinkedInIcon } from './Icons';

export function Links() {
  return (
    <div className="links"
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "row",
        gap: '3vw',
      }}
    >
      <a
        href="https://github.com/thinkty"
        target="_blank"
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/thinkty/"
        target="_blank"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://thinkty.net/"
        target="_blank"
      >
        <HomeIcon />
      </a>
    </div>
  );
}
