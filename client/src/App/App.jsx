import './App.css'
import { BrowserRouter as Main , Routes , Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Merchs from '../Pages/Merch/Merchs'
import Prints from '../Pages/Print/Prints'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import OurStory from '../Pages/OurStory/OurStory'
import Cart from '../Pages/Cart/Cart'
import Work from '../Pages/Work/Work'
import Signup from '../Pages/Auth/Signup'
import Login from '../Pages/Auth/Login'



function App() {
  return (
    <>
      <Main>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/merch' element={<Merchs/>}/>
          <Route path='/print' element={<Prints/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/about-us' element={<OurStory/>}/>
          <Route path='/auth/signup' element={<Signup/>}/>
          <Route path='/auth/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </Main>
    </>
  )
}

export default App
