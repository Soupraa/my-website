import React from 'react';
import './App.css';
import Scene from './components/react-three/Scene';
import { Canvas } from '@react-three/fiber';
import { Container } from './components/common/styles';

function App() {
  return (
    <Container>
      <Canvas>
        <Scene />
      </Canvas>
    </Container>
  );
}

export default App;
