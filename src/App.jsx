import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Instructions from './pages/Instructions'
import Questions from './pages/Questions'
import Score from './pages/Score'
import CreateProfile from './pages/CreateProfile'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/score" element={<Score />} />
        <Route path="/create-profile" element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Instructions from './pages/Instructions'
// import Questions from './pages/Questions'
// import Score from './pages/Score'
// import CreateProfile from './pages/CreateProfile'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/instructions" element={<Instructions />} />
//           <Route path="/questions" element={<Questions />} />
//           <Route path="/score" element={<Score />} />
//           <Route path="/create-profile" element={<CreateProfile />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App
