// SceneRouter.tsx
import { useLocation } from "react-router-dom";
import HomeScene from "../Scenes/HomeScene";
import AboutScene from "../Scenes/AboutScene";


export default function SceneRouter() {
  const location = useLocation();

  switch (location.pathname) {
    case "/about":
      return <AboutScene />;
    case "/":
    default:
      return <HomeScene />;
  }
}
