import React from 'react'

import { Header } from './components/Header'
import Footer from './components/Footer'
import { Main } from './components/Main'



function App() {
  return (
    <>
      <Header />
      <div style={{ marginBottom: '100px' }} />
      <Main />
      <div style={{ marginTop: '100px' }} />
      <Footer />
    </>
  );
}

export default App
