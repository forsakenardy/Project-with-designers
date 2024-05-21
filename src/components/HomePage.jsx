
import Girl1 from "../assets/images/girl1.png"
import Girl2 from "../assets/images/girl2.svg"
import Girl3 from "../assets/images/girl3.svg"
import Girl4 from "../assets/images/girl4.svg"
import Girl5 from "../assets/images/girl5.svg"
import Girl6 from "../assets/images/girl6.svg"
import { Link } from "react-router-dom"

function HomePage() {
    return (
        <>
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