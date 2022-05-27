import Navbar from "./Website/compo/Navbar";
import {Routes,Route} from "react-router-dom"
import Home from './Website/Home'
import About from './Website/About'
import Contact from './Website/Contact'
import Branch from './Website/Branch'
import Foot from "./Website/compo/foot";
import './App.css'

function App() {
  return(
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/branch' element={<Branch/>}/>
      </Routes>
      <Foot/>


     
     
     
     
    </div>
  )
}

export default App;
