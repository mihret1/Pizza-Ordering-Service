
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/Home'

function App() {

  return (
   <BrowserRouter>
       <Navbar />
      <Routes>
          <Route exact={true} path='/' element={<Home />}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
