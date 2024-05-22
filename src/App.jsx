import './App.css'
import HomePage from './components/HomePage'
import Menu from './assets/images/Menu-hamburger.svg'
import Logo from "./assets/images/Logo.svg"
import Search from "./assets/images/Search.svg"
import Profile from "./assets/images/Profile.svg"
import IconArtwork from "./assets/images/Icon-Artwork.svg"
import Bag from "./assets/images/Bag.svg"
import { Route, Routes, Link } from 'react-router-dom'
import SummerMantra from './components/Summer-Mantra'

function App() {


  return (
    <>
      <div className="navbar">
        <div className="icons1">
          <div className="icons1-1">
            <div className="icons1-1-1">
              <img className="menu" src={Menu} alt="" />
            </div>
          </div>
          <div className="icons1-2">
            <img className="logo" src={Logo} alt="" />
          </div>
        </div>
        <div className="icons2">
          <img className="search" src={Search} alt="" />
          <img className="profile" src={Profile} alt="" />
          <img className="iconartwork" src={IconArtwork} alt="" />
          <img className="bag" src={Bag} alt="" />
        </div>
      </div>
 
      <Link to='/'/>
      <Link to='/dress1' />
      <Link to='/categoryDresses' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dress1' element={<SummerMantra />} />

      </Routes>

      <div className='rectangle'></div>
    </>
  )
}

export default App
