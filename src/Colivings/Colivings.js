import React, { useState, useEffect } from 'react'
import Search from './Search';
import Coliving from './Coliving'
import './Colivings.css';

const Colivings = () => {
    const [loading, setLoading] = useState(true)
    const [colivings, setColivings] = useState([])
    const [errorMessage, setErrorMessage] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3300/colivings')
            .then(response => response.json())
            .then(jsonResponse => {
                setColivings(jsonResponse);
                setLoading(false);
            })
    }, []);


    const filteredSearch = (searchValue) => {
        setLoading(true);
        setErrorMessage(null);
        fetch('http://localhost:3300/search/colivings', {
            method: 'POST',
            body: JSON.stringify(searchValue),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.length) {
                    setColivings(jsonResponse);
                    setLoading(false);
                } else {
                    setErrorMessage('Lo sentimos, no disponemos de colivings en esa ciudad');
                    setLoading(false);
                }
            });
    };

    return (
        <div className="colivingssearch">
            <section id="banner-search"></section>
            <h1>Welcome! Find your next home:</h1>
            <Search search={filteredSearch} isLoading={loading} />
            <div className="colivings">
                {loading && !errorMessage ? (
                    <span>loading...</span>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                            colivings.map((coliving, index) => (
                                <Coliving key={`${index}-${coliving.id}`} coliving={coliving} />
                            ))
                        )}
            </div>
        </div>
    );
};


export default Colivings




