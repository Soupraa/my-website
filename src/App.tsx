import { Canvas } from '@react-three/fiber';
import './App.css';
import { Container } from './components/common/styles';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Scene from './components/Scenes/HomeScene';
import SceneRouter from './components/SceneRouter/SceneRouter';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <Container>
      <Router>
        <NavBar/>
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          style={{ position: "fixed", width: "100%", height: "100%", backgroundColor: "#000" }}
          camera={{ position: [0, 0, 25] }}
        >  
          <SceneRouter />
        </Canvas>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
