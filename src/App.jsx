import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import './App.css'

// Pages
import Home from './pages/Home'
import Instructions from './pages/Instructions'
import Questions from './pages/Questions'
import Score from './pages/Score'
import CreateProfile from './pages/CreateProfile'
import ChooseDifficulty from './pages/ChooseDifficulty'
import FinishedProfile from './pages/FinishedProfile'

// Components
import Header from './components/Header'


function App() {

  const [lang, setLang] = useState("sv");

  return (
    <>
      <BrowserRouter>
        <Header lang={lang} setLang={setLang} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/questions/:level" element={<Questions />} />
          <Route path="/score" element={<Score />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/choose-difficulty" element={<ChooseDifficulty />} />
          <Route path="/finished-profile" element={<FinishedProfile />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
