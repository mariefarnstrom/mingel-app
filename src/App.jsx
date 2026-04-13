import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext';

// Pages
import Home from './pages/Home'
import Instructions from './pages/Instructions'
import Questions from './pages/Questions'
import ScoreBoard from './pages/ScoreBoard'
import CreateProfile from './pages/CreateProfile'
import ChooseDifficulty from './pages/ChooseDifficulty'
import FinishedProfile from './pages/FinishedProfile'

// Components
import Header from './components/Header'
import { ColorModeProvider } from './contexts/ColorModeContext';


function App() {

  return (
    <>
      <BrowserRouter>
        <ColorModeProvider>
          <LanguageProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/instructions" element={<Instructions />} />
              <Route path="/questions/:level" element={<Questions />} />
              <Route path="/score" element={<ScoreBoard />} />
              <Route path="/create-profile" element={<CreateProfile />} />
              <Route path="/choose-difficulty" element={<ChooseDifficulty />} />
              <Route path="/finished-profile" element={<FinishedProfile />} />
            </Routes>
          </LanguageProvider>
        </ColorModeProvider>
      </BrowserRouter>

    </>

  )
}

export default App
