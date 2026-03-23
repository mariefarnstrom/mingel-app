import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Instructions from './pages/Instructions'
import Questions from './pages/Questions'
import Score from './pages/Score'
import CreateProfile from './pages/CreateProfile'
import './App.css'
import { TextCard } from './components/cards/CardText'
import { PresentList } from './components/cards/CardPresent'
import { HeadingCard } from './components/cards/CardHeading'

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

    <PresentList>
      <h2>SPELARE INNE</h2>

      <div>
        <h5>FÖRETAG: </h5>
        <h5>08</h5>
      </div>

      <div>
        <h5>DIGITAL DESIGNERS: </h5>
        <h5>08</h5>
      </div>

      <div>
        <h5>WEBBUTVECKLARE: </h5>
        <h5>08</h5>
      </div>
    </PresentList>

    <HeadingCard>
      <h3>HEADING CARD</h3>
    </HeadingCard>

    </>

  )
}

export default App
