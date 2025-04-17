import { Canvas } from '@react-three/fiber';
import './App.css';
import { Container } from './components/common/styles';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SceneRouter from './components/SceneRouter/SceneRouter';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <Container>
      <Router>     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
