import React from 'react'

const Address = ({ value, onChange }) => {
    const handleStreet = e => {
        const newValue = { ...value }
        newValue.street = e.target.value
        onChange(newValue)
    }
    const handleZipcode = e => onChange({ ...value, zipcode: e.target.value })
    const handleCity = e => onChange({ ...value, city: e.target.value })    
    const handleCountry = e => onChange({ ...value, country: e.target.value })

    return (
        <div className="address">
            <input name="street" value={value.street || ''} onChange={handleStreet} placeholder="Calle" />
            <input name="zipcode" value={value.zipcode || ''} onChange={handleZipcode} placeholder="C.P." />
            <input name="city" value={value.city || ''} onChange={handleCity} placeholder="Ciudad" />            
            <input name="country" value={value.country || ''} onChange={handleCountry} placeholder="País" />
        </div>
    )
}

export default Address
