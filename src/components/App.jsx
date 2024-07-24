import React from 'react';
import Heading from './Heading';
import Profile from './Profile';
import Description from './Description';
import Projects from './Projects';
import Skills from './Skills';
import './styles.css';

function App() {
  return (
    <div>
      <Heading />
      <Profile />
      <Description />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
