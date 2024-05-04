import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { useState } from 'react';
// import { Header } from './components/Header'
// import Footer from './components/Footer'
import { Main } from './components/Main'
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import ErrorPage from "./ErrorPage";
import './index.css';
import { Root } from "./components/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
    ],
  },
]);

const App = () => {
  // const [darkModeButton, setDarkModeButton] = useState(false);

  // const darkModeChange = () => {
  //   setDarkModeButton(!darkModeButton);
  // };

  return (
    <div>
    {/* <div className={`Mode ${darkModeButton ? "dark" : "light"}`}> */}
      {/* <Header darkModeChange={darkModeChange} darkMode={darkModeButton ? "dark" : "light"} /> */}
      <div style={{ marginBottom: '100px' }} />
      <RouterProvider router={router} />
      <div style={{ marginTop: '100px' }} />
    </div>
  );
}

export default App
