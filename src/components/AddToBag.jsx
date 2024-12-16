import React from "react";
import { Link } from "react-router-dom"


function AddToBag() {
    return (
        <div className="AddToBag-container">
            <h1 className="message">Item successfully added to your bag!</h1>

            <div className="All-btnAddToBag-container">
                <Link to="/BagPageTest"><button className="BtnAddtoBagB"><h1 className="go-to-bag" >GO TO BAG</h1></button></Link>
                <Link to="/Dress1"><button className="BtnAddtoBag"><h1 className="go-to-bag" >CONTINUE SHOPPING</h1></button></Link>
            </div>

        </div>

    )
}
export default AddToBag;


