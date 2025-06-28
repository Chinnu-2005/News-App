import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import News from './components/News'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import LoadingBar from 'react-top-loading-bar'


function App() {

  const loadingBarRef = useRef(null);

  const setProgress = () => {
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart(); // Start bar
      setTimeout(() => loadingBarRef.current.complete(), 800); // End bar after a delay
    }
  };

  return (
    <>

      <NavBar />
      <div className='container mt-5'>
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} category="general" key="general" />} />
          <Route path="/technology" element={<News setProgress={setProgress} category="technology" key="technology" />} />
          <Route path="/sports" element={<News setProgress={setProgress} category="sports" key="sports" />} />
          <Route path="/health" element={<News setProgress={setProgress} category="health" key="health" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} category="entertainment" key="entertainment" />} />
          <Route path="/business" element={<News setProgress={setProgress} category="business" key="business" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
