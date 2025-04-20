import { Canvas } from '@react-three/fiber';
import './App.css';
import { Container } from './components/common/styles';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SceneRouter from './components/SceneRouter/SceneRouter';
import NavBar from './components/NavBar/NavBar';
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
  return (
   

    <Container> <ParallaxProvider>
      <Router>     
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router></ParallaxProvider>
    </Container>
  );
}

export default App;
