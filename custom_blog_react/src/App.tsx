import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useState } from 'react';
import { Header } from './components/Header'
import Footer from './components/Footer'
import { Main } from './components/Main'
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import ErrorPage from "./ErrorPage";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/main" replace />,
    children: [],
  },
  {
    path: "/main",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
]);

function App() {
  const [darkModeButton, setDarkModeButton] = useState(false);

  const darkModeChange = () => {
    setDarkModeButton(!darkModeButton);
  };

  return (
    <div>
    <div className={`Mode ${darkModeButton ? "dark" : "light"}`}>
      <Header darkModeChange={darkModeChange} darkMode={darkModeButton ? "dark" : "light"} />
      <div style={{ marginBottom: '100px' }} />
      <RouterProvider router={router} />
      <div style={{ marginTop: '100px' }} />
      <Footer />
    </div>
    </div>
    
  );
}

export default App
