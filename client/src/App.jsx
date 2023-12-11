import CanvasModel from './canvas'
import Customizer from './pages/Customizer'
import Home from './pages/Home'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return(
    <main className='app transition-all ease-in'>
      <Home/>
      <CanvasModel/>
      <Customizer/>
      <Analytics />
    </main>
  )
}

export default App