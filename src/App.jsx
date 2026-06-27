import React from 'react';
import Hero from './components/Hero';
import Pipeline from './components/Pipeline';
import CaseFiles from './components/CaseFiles';
import Methodology from './components/Methodology';
import Timeline from './components/Timeline';
import Competencies from './components/Competencies';
import Library from './components/Library';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen">
      <main>
        <Hero />
        <Pipeline />
        <CaseFiles />
        <Methodology />
        <Timeline />
        <Competencies />
        <Library />
      </main>
      <Footer />
    </div>
  );
}

export default App;
