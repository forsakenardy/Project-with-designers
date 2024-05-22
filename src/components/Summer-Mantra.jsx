import girl7 from "../assets/images/girl7.png"
import arrow from "../assets/images/arrow.svg"

function SummerMantra() {
    return (
        <div className="summermantra-page">
            <img className="arrow" src={arrow} alt="" />
            <img className="girl7" src={girl7} alt="" />
            <div className="summermantra-info">
                <div className="summermantra-stock">
                    <h1 className="summermantra-name">SUMMERDRESS MANTRA</h1>
                    <h1>55€</h1>
                </div>
                <p className="summermantra-paragraph">Experience effortless elegance with Luna Llena: The perfect addition to your wardrobe</p>
                <div className="sizes">
                    <div className="sizes1">S</div>
                    <div className="sizes1">M</div>
                    <div className="sizes1">L</div>
                    <div className="sizes1">XL</div>
                </div>
                <div className="colors-container">
                    <div className="sizes colors">
                        <div className="color1 sizes1"></div>
                        <div className="color2 sizes1"></div>
                    </div>
                    <button>
                        <h1>-</h1>
                        <h1>1</h1>
                        <h1>+</h1>
                    </button>
                </div>
            </div>
            <button className="addbutton">
                <h2 >ADD TO BAG</h2>
            </button>
        
        </div>
    )
}

export default SummerMantra