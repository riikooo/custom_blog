import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Header } from './components/Header'
import Footer from './components/Footer'
import { Main } from './components/Main'


const router = createBrowserRouter([
  {
    path: "/main",
    element: <Main/>,
  },
  // {
  //   path: "/about",
  //   element: <About/>,
  // },
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
