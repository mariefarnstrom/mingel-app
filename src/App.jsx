import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Instructions from './pages/Instructions'
import Questions from './pages/Questions'
import Score from './pages/Score'
import CreateProfile from './pages/CreateProfile'
import './App.css'
import { BaseCard, PresentCard } from "./components/cards/Cards"
import ChooseDifficulty from './pages/ChooseDifficulty'
import FinishedProfile from './pages/FinishedProfile'
import { supabase } from './lib/supabaseClient'
import Header from './components/Header'
import { useState } from "react";

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




      {/* <BaseCard>
      <h1>VÄLKOMMEN TILL YRGOXP</h1>
      <p>Spelet som gör det enkelt att börja prata, Samla poäng genom att ställa frågor och vara aktiv i spelet.</p>
      <p>Ju fler frågor du ställer, desto högre klättrar du på scoreboarden.</p>
    </BaseCard>

    <PresentCard>
      <h2>SPELARE INNE</h2>

      <div>
        <p>FÖRETAG: </p>
        <p>08</p>
      </div>

      <div>
        <p>DIGITAL DESIGNERS: </p>
        <p>08</p>
      </div>

      <div>
        <p>WEBBUTVECKLARE: </p>
        <p>08</p>
      </div>
    </PresentCard> */}



    </>

  )
}

export default App
