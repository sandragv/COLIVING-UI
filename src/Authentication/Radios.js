import React from 'react'

const Radios = ({ name, options, value, onChange }) => {
    return (
        <div id="rooms-type">
            <p>Tipo de habitaciones</p>
            <div className="room-options">
            {options.map(option =>
                <label key={option}>
                    <input type="radio" name={name} value={option}
                        checked={value === option} onChange={onChange} />
                    {option}
                </label>
            )}
            </div>
        </div>
    )
}

export default Radios
