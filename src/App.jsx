import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Instructions from './pages/Instructions'
import Questions from './pages/Questions'
import Score from './pages/Score'
import CreateProfile from './pages/CreateProfile'
import './App.css'
import { TextCard } from './components/cards/CardText'
import { PresentCard } from './components/cards/CardPresent'
import { HeadingCard } from './components/cards/CardHeading'
import { InstructionsCard } from './components/cards/CardInstructions'

function App() {
  return (
      <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/score" element={<Score />} />
        <Route path="/create-profile" element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>

    <TextCard>
      <h1>VÄLKOMMEN TILL YRGOXP</h1>
      <p>Spelet som gör det enkelt att börja prata, Samla poäng genom att ställa frågor och vara aktiv i spelet.</p>
      <p>Ju fler frågor du ställer, desto högre klättrar du på scoreboarden.</p>
    </TextCard>

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
    </PresentCard>

    <HeadingCard>
      <h3>HEADING CARD</h3>
    </HeadingCard>

    <InstructionsCard>
      <h3>1. SKAPA PROFIL</h3>
      <p>Välj namn och avatar för att komma igång.</p>
    </InstructionsCard>

    </>

  )
}

export default App
