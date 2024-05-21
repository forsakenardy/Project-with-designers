import Menu from "../assets/images/Menu-hamburger.svg"
import Logo from "../assets/images/Logo.svg"
import Search from "../assets/images/Search.svg"
import Profile from "../assets/images/Profile.svg"
import IconArtwork from "../assets/images/Icon-Artwork.svg"
import Bag from "../assets/images/Bag.svg"
import Girl1 from "../assets/images/girl1.svg"
import Girl2 from "../assets/images/girl2.svg"
import Girl3 from "../assets/images/girl3.svg"
import Girl4 from "../assets/images/girl4.svg"
import Girl5 from "../assets/images/girl5.svg"
import Girl6 from "../assets/images/girl6.svg"
import { Link } from "react-router-dom"

function HomePage() {
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
            <div className="main">
                <img className="girl1" src={Girl1} alt="" />
            </div>
            <h1 className="best-sellers">BEST SELLERS</h1>
            <div className="main2">
                <img className="girls" src={Girl5} alt="" />
                <img className="girls" src={Girl2} alt="" />
                <img className="girls" src={Girl3} alt="" />
                <img className="girls" src={Girl4} alt="" />
                <img className="girls" src={Girl6} alt="" />
            </div>
            <div className="hidden">

            </div>

        </>
    )
}

export default HomePage