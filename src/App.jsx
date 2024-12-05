import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './assets/components/Home'
import Header from './assets/components/Header'
import Rodape from './assets/components/Rodape'
import Escocia from './assets/components/Escocia'
import GrandCanyon from './assets/components/GrandCanyon'
import Arruba from './assets/components/Arruba'
import Muralha from './assets/components/Muralha'

function App() {

  return (
    <>

    <Router>
          <Header />
      <Routes>
           <Route path= '/' element={<Home />} />
           <Route path= 'Escocia' element={<Escocia />} />
           <Route path= 'GrandCanyon' element={<GrandCanyon />} />
           <Route path= 'Arruba' element={<Arruba />} />
           <Route path= 'Muralha' element={<Muralha />} />
     </Routes>
          <Rodape />
  </Router>

    </>
  )
}

export default App
