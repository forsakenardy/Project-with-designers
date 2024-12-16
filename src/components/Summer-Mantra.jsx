import girl7 from "../assets/images/girl7.png"
import arrow from "../assets/images/arrow.svg"
import AddToBag from "./AddToBag"
import { Link } from "react-router-dom"
import { useState } from "react"

function SummerMantra() {

    const [isSPressed, setIsSPressed] = useState(false);
    const [isMPressed, setIsMPressed] = useState(false);
    const [isLPressed, setIsLPressed] = useState(false);
    const [isXLPressed, setIsXLPressed] = useState(false);
    const [isColor1Pressed, setIsColor1Pressed] = useState(false);
    const [isColor2Pressed, setIsColor2Pressed] = useState(false);
    

    const toggleClass4 = () => {
        setIsSPressed((prevState) => !prevState);
        setIsMPressed(false)
        setIsLPressed(false)
        setIsXLPressed(false)
      };
      const toggleClass5 = () => {
        setIsMPressed((prevState) => !prevState);
        setIsSPressed(false)
        setIsLPressed(false)
        setIsXLPressed(false)
      };
      const toggleClass6 = () => {
        setIsLPressed((prevState) => !prevState);
        setIsMPressed(false)
        setIsSPressed(false)
        setIsXLPressed(false)
      };
      const toggleClass7 = () => {
        setIsXLPressed((prevState) => !prevState);
        setIsMPressed(false)
        setIsLPressed(false)
        setIsSPressed(false)
      };
      const toggleClass8 = () => {
        setIsColor1Pressed((prevState) => !prevState);
        setIsColor2Pressed(false)
      };
      const toggleClass9 = () => {
        setIsColor2Pressed((prevState) => !prevState);
        setIsColor1Pressed(false)
      };

    return (
        <div className="summermantra-page">
            <Link to='/categoryDresses'><img className="arrow" src={arrow} alt="" /></Link>
    
            <img className="girl7" src={girl7} alt="" />
            <div className="summermantra-info">
                <div className="summermantra-stock">
                    <h1 className="summermantra-name">SUMMERDRESS MANTRA</h1>
                    <h1>55€</h1>
                </div>
                <p className="summermantra-paragraph">Experience effortless elegance with Luna Llena: The perfect addition to your wardrobe</p>
                <div className="sizes">
                    <div onClick={toggleClass4} className={isSPressed? 'sizes1-black' : 'sizes1'}>S</div>
                    <div onClick={toggleClass5} className={isMPressed? 'sizes1-black' : 'sizes1'}>M</div>
                    <div onClick={toggleClass6} className={isLPressed? 'sizes1-black' : 'sizes1'}>L</div>
                    <div onClick={toggleClass7} className={isXLPressed? 'sizes1-black' : 'sizes1'}>XL</div>
                </div>
                <div className="colors-container">
                    <div className="sizes colors">
                        <div onClick={toggleClass8} className={isColor1Pressed ?'color1-border sizes1' :'color1 sizes1'}></div>
                        <div onClick={toggleClass9} className={isColor2Pressed ?'color2-border sizes1' :'color2 sizes1'}></div>
                    </div>
                    <button>
                        <h1>-</h1>
                        <h1>1</h1>
                        <h1>+</h1>
                    </button>
                </div>
            </div>
       
            <Link className="addbutton" to='/AddToBag'>
            <button className="addbutton">
                <h2 >ADD TO BAG</h2>
            </button>
            </Link>
           
        
        </div>
    )
}

export default SummerMantra