import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const RatingColiving = () => {
    const user = useSelector(s => s.user)
    const token = useSelector(s => s.user && s.user.token)
    const coliving = useSelector(s => s.coliving)
    const [colivingScore, setColivingScore] = useState('colivingScore')
    const handleColivingScore = e => setColivingScore(e.target.value)

    const [isError, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const rating = { colivingScore, coliving, user }
        setError(false)
        try {
            const ret = await fetch('http://localhost:3300/user/rating-coliving', {
                method: 'POST',
                body: JSON.stringify(rating),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            const data = await ret.json()
            if (ret.ok)
                setColivingScore(data)
        } catch (err) {
            console.warn('Error:', err)
            setError(true)
        }
    }


    return (
        <form id="coliving-rating" onSubmit={handleSubmit}>
            <h2>Puntúa tu estancia</h2>
            <div className="scorer-elements">
                <label>
                    Puntuación:
                    <select className="score" name="colivingscore" value={colivingScore} size="1" onChange={handleColivingScore} >
                        <option value="one">1 estrella</option>
                        <option value="two">2 estrellas</option>
                        <option value="three">3 estrellas</option>
                        <option value="four">4 estrellas</option>
                        <option value="five">5 estrellas</option>
                    </select>
                </label>
            </div>
            <button className="save-coliving-score">Enviar</button>
            {isError && <div>Error, inténtalo de nuevo</div>}
        </form>
    )
}

export default RatingColiving


