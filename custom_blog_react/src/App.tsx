import {
  createBrowserRouter,
  RouterProvider,
  // Navigate,
} from "react-router-dom";
import { Header } from './components/Header'
import Footer from './components/Footer'
import { Main } from './components/Main'
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
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
  return (
    <>
      <Header />
      <div style={{ marginBottom: '100px' }} />
      <RouterProvider router={router} />
      <div style={{ marginTop: '100px' }} />
      <Footer />
    </>
  );
}

export default App
