import './App.css'
import { BrowserRouter as Main , Routes , Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Merchs from '../Pages/Merch/Merchs'
import Prints from '../Pages/Print/Prints'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import OurStory from '../Pages/OurStory/OurStory'
import Cart from '../Pages/Cart/Cart'
import SocialMedia from '../Pages/SocialMedia/SocialMedia'



function App() {
  return (
    <>
      <Main>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/merch' element={<Merchs/>}/>
          <Route path='/print' element={<Prints/>}/>
          <Route path='/our-story' element={<OurStory/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/social-media' element={<SocialMedia/>}/>
        </Routes>
        <Footer/>
      </Main>
    </>
  )
}

export default App
