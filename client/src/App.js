
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/login'
import Home from './components/Home'
import Otp from './components/otp'
import DLModelPage from './components/DLModelPage'
import LLMpage from './components/LLMpage'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
        <Route path='/dlmodel' element={<DLModelPage/>}></Route>
        <Route path='/llmmodel' element={<LLMpage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
