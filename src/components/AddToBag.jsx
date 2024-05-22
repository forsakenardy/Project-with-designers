import React from "react";
import { Link } from "react-router-dom"


function AddToBag() {
    return (
        <div className="AddToBag-container">
         <h1 className="message">Item successfully added to your bag!</h1>

         <div className="All-btnAddToBag-container">
         <Link to=""><button className="BtnAddtoBagB"><p >GO TO BAG</p></button> 
        </Link>
        <Link to="/CategoryDresses"><button className="BtnAddtoBag"><p >CONTINUE SHOPPING</p></button>
        </Link>
         </div>
        
        </div>

    )
}
export default AddToBag;


