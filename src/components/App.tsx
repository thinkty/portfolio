import React from 'react';
import { Header } from './Header';
import { Links } from './Links';
import { Projects } from './Projects';

export const App = (): JSX.Element => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        color: 'white',
        fontFamily: 'Verdana, sans-serif',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Links />
      <Projects />
    </div>
  );
}
