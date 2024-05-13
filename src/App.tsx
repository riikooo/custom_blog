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
import './index.scss';
import { Root } from "./components/Root";
import { NoFound } from "./components/Nofound";
import { MoreBlog } from "./components/MoreBlog"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogs/:blogId",
        element: <MoreBlog />,
      },
      {
        path: "*",
        element: <NoFound />,
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
      <div/>
      <RouterProvider router={router} />
      <div/>
    </div>
  );
}

export default App
