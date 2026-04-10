import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { LanguageProvider } from './contexts/LanguageContext';
import { useState, useEffect } from 'react';

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
import { IntroVideo, VideoWrapper } from './App.styles';


function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return (
      <VideoWrapper>
        <IntroVideo
          autoPlay
          muted
          playsInline
          onEnded={() => setShowIntro(false)}
        >
          <source src="/intro.mp4" type="video/mp4" />
        </IntroVideo>
      </VideoWrapper>
    )
  }

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
