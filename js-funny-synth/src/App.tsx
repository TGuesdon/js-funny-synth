import { useState } from 'react'
import './App.css'
import { FunnySynth } from './components/FunnySynth'

function App() {
  const [initialized, setInitialized] = useState(false);

  return (
    <>
      {!initialized && <button onClick={() => setInitialized(true)}>Start</button>}
      {initialized && <FunnySynth />}
    </>
  )
}

export default App
