import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Links } from './Links';
import { Projects } from './Projects';

export const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <Links />
      <Projects />
      <Footer />
    </div>
  );
}
