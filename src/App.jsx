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
import CategoryDresses from './components/CategoryDresses'
import AddToBag from './components/AddToBag'
import close from "./assets/images/close.svg"
import plus from "./assets/images/plus.svg"
import less from "./assets/images/Less.svg"
import { useState } from 'react'



function App() {

  const [isMenuPressed, setIsMenuPressed] = useState(false);
  const [isPlusPressed, setIsPlusPressed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleClass = () => {
    if (isMenuPressed) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuPressed(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsMenuPressed(true);
    }
  };

  const toggleClass2 = () => {
    setIsPlusPressed((prevState) => !prevState);
  };

  const toggleClass3 = () => {
    setIsMenuOpen((prevState) => !prevState);
  };



  return (
    <>
      <div className="navbar">
        <div className="icons1">
          <div className="icons1-1">
            <div className="icons1-1-1">
              <img onClick={() => {
            toggleClass()
            toggleClass3()
          }} className="menu" src={Menu} alt="" />
            </div>
          </div>
          <div className="icons1-2">
            <img onClick={() => {
            toggleClass()
            toggleClass3()
          }} className="logo" src={Logo} alt="" />
          </div>
        </div>
        <div className="icons2">
          <img className="search" src={Search} alt="" />
          <img className="profile" src={Profile} alt="" />
          <img className="iconartwork" src={IconArtwork} alt="" />
          <img className="bag" src={Bag} alt="" />
        </div>
      </div>
      <div className={isMenuPressed ? (isClosing ? 'menu-show closing' : 'menu-show') : 'hidden'}>
        <img onClick={() => {
            toggleClass()
            // toggleClass3()
          }} className='close' src={close} alt="" />
        <Link onClick={() => {
            toggleClass()
            // toggleClass3()
          }} to='/'><h1 className='without-line-height'>HOME</h1></Link>
        <hr />
        <div className='allcategories'>
          <h1 className='without-line-height'>ALL CATEGORIES</h1>
          <img onClick={toggleClass2} className='plus' src={isPlusPressed ? less : plus} alt='' />
        </div>
        <div className={isMenuPressed && !isPlusPressed ?'hidden' :(isPlusPressed ? 'allcategories-show' : 'allcategories-hide ') }>
          <h1>SALE - 60%</h1>
          <h1>BLOUSES</h1>
          <Link onClick={toggleClass} to='/categoryDresses'><h1>DRESSES</h1></Link>
          <h1>JACKETS</h1>
          <h1>KNITEWEAR</h1>
          <h1>SHIRTS</h1>
          <h1>SKIRTS</h1>
          <h1>TOPS</h1>
          <h1>TROUSERS</h1>
          <h1>ACCESORIES</h1>
        </div>
        <hr />
        <h1 className='without-line-height'>ACCOUNT</h1>
        <hr />
        <h1 className='without-line-height'>Contact</h1>
        <hr />
        <h1 className='without-line-height'>PROFESSIONAL ACCES</h1>
      </div>



      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dress1' element={<SummerMantra />} />
        <Route path='/categoryDresses' element={<CategoryDresses />} />
        <Route path='/AddToBag' element={<AddToBag />} />
      </Routes>
    </>
  )
}

export default App; 
