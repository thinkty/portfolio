import React from 'react';
import { GithubIcon, HomeIcon, LinkedInIcon } from './Icons';

export function Links() {
  return (
    <div
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
        style={{
          width: '5vw',
          height: '5vw',
          minWidth: '32px',
          minHeight: '32px',
        }}
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/thinkty/"
        target="_blank"
        style={{
          width: '5vw',
          height: '5vw',
          minWidth: '32px',
          minHeight: '32px',
        }}
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://thinkty.net/"
        target="_blank"
        style={{
          width: '5vw',
          height: '5vw',
          minWidth: '32px',
          minHeight: '32px',
        }}
      >
        <HomeIcon />
      </a>
    </div>
  );
}
