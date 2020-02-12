import React, { useState } from "react";
import './Search.css';


const useFormField = (initialValue) => {
    const [searchValue, setSearchValue] = useState(initialValue || '')
    const handleChange = e => setSearchValue(e.target.value)
    return [searchValue, handleChange]
}

const Search = ({ search, isloading }) => {
    const [searchCity, handleSearchCity] = useFormField('');
    const [searchEntryWeek, handleSearchEntryWeek] = useFormField('');
    const [searchDepartureWeek, handleSearchDepartureWeek] = useFormField('');
    const [searchWeekPrice, handleSearchWeekPrice] = useFormField('');
    const [searchMonthPrice, handleSearchMonthPrice] = useFormField('');
    const [searchProfession, handleSearchProfession] = useFormField('');

    const handleSubmit = e => {
        e.preventDefault()
        search({ city: searchCity })
    }

    if (isloading) {
        return (
            <p>Buscando...</p>
        )
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <div className="city-filter">
                <label className="city">
                    Ciudad
                </label>
                <input className="searchcity" required type="text" value={searchCity} onChange={handleSearchCity} />
            </div>
            <div className="entry-filter">
                <label className="entry">
                    Entrada
                </label>
                <input className="searchentry" type="date" value={searchEntryWeek} onChange={handleSearchEntryWeek} />
            </div>
            <div className="departure-filter">
                <label className="departure">
                    Salida
                </label>
                <input className="searchdeparture" type="date" value={searchDepartureWeek} onChange={handleSearchDepartureWeek} />
            </div>
            <div className="price-week-filter">
                <label className="week-price">
                    Precio/semana
                </label>
                <input className="search-week-price" type="number" min="150" max="1000" value={searchWeekPrice} onChange={handleSearchWeekPrice} />
            </div>
            <div className="price-month-filter">
                <label className="month-price">
                    Precio/mes
                </label>
                <input className="search-month-price" type="number" min="600" max="3000" value={searchMonthPrice} onChange={handleSearchMonthPrice} />
            </div>
            <div className="profession-filter">
                <label className="profession">
                    Profesión
                </label>
                <input className="searchprofession" type="text" value={searchProfession} onChange={handleSearchProfession} />
            </div>
            <button className="filter">Buscar</button>
        </form>
    );
}

export default Search;


