import React from "react";
import { Link } from 'react-router-dom'

const Coliving = ({coliving}) => {
    const divStyle = {
        backgroundImage: `url(${coliving.poster})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "34.37rem",
        height: "20.78rem",
        opacity: 0.85
      }

    return (
        <div className="coliving-view">
            <div className="colivingimg" style={divStyle} alt={`${coliving.name} en ${coliving.city}`}></div>
            <h2><Link to={`/colivings/${coliving.id}`}>{coliving.name}</Link></h2>
            <div className="location-stars">
                <span className="location">{coliving.city} </span>
                <span className="punctuation">{coliving.score} stars</span>
            </div>    
            <div className="weekly-prize">
                <span className="prize">Weekly price: {coliving.weekly_price} €</span>
                <br/>
                <span className="prize">Monthly price: {coliving.monthly_price} €</span>
            </div>    
            
        </div>
    )
}

export default Coliving