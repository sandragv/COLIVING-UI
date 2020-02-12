import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ColivingInfo.css';
import Apartment from "./Apartment";

const getColiving = id =>
    fetch(`http://localhost:3300/coliving/${id}`)
        .then(r => r.json());

const ColivingInfo = () => {
    const [loading, setLoading] = useState(true);
    const [apartments, setApartments] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const { id } = useParams();

    const [coliving, setColiving] = useState();
    useEffect(() => {
        fetch(`http://localhost:3300/apartments/${id}`)
            .then(response => response.json())
            .then(jsonResponse => {
                setApartments(jsonResponse);
                setLoading(false);
            });

        getColiving(id).then(c => setColiving(c))
    }, [id]);
    if (!coliving) {
        return (
            "loading"
        )
    }

    const divInfoStyle = {
        backgroundImage: `url(${coliving.poster})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "67.5rem",
        height: "40.8rem",
        opacity: 0.85
    };

    return (
        <div className="full-info">
            <div className="coliving-info">
                <div className="coliving-pic">
                    <div className="coliving-info-img" style={divInfoStyle} alt={`${coliving.name} en ${coliving.city}`}></div>
                </div>
                <div className="details">
                    <h2>{coliving.name}</h2>
                    <div className="info">
                        <span className="info-location">{coliving.city}</span>
                        <br />
                        <span className="info-prize">Weekly price: {coliving.weekly_price}</span>
                        <br />
                        <span className="info-prize">Monthly price: {coliving.monthly_price}</span>
                        <br />
                        <span className="info-punctuation">{coliving.score} stars</span>
                    </div>
                    <p className="more">{coliving.description}</p>
                </div>
            </div>
            <div className="apartments">
                <h2>Apartamentos disponibles</h2>
                <div className="book-apartment">
                    {
                        loading && !errorMessage ? (
                            <span>loading...</span>
                        ) : errorMessage ? (
                            <div className="errorMessage">{errorMessage}</div>
                        ) : (
                                    apartments.map((apartment, index) => (
                                        <Apartment key={`${index}-${apartment.id}`} apartment={apartment} />
                                    ))
                                )
                    }
                </div>
            </div>
        </div>
    )
};

export default ColivingInfo




