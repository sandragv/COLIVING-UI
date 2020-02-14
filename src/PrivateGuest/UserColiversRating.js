import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const RatingColiver = () => {
    const user = useSelector(s => s.user)
    const token = useSelector(s => s.user && s.user.token)    
    const coliving = useSelector(s => s.coliving)
    const [coliver, setColiver] = useState ('')
    const [coliverScore, setColiverScore] = useState('coliverScore')
    
    const handleColiverScore = e => setColiverScore(e.target.value)
    const handleColiver = e => setColiver(e.target.value)


    const [isError, setError] = useState(false)
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        const score = { coliverScore, coliving, coliver, user }
        setError(false)
        try {
            const ret = await fetch('http://localhost:3300/user/coliver/rate', {
                method: 'POST',
                body: JSON.stringify(score),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            const data = await ret.json()
            if (ret.ok)
                setColiverScore(data)
        } catch (err) {
            console.warn('Error:', err)
            setError(true)
        }
    }

    return (
        <form id="coliver-rating" onSubmit={handleSubmit}>
            <h2>Puntúa a tus compañeros</h2>
            <div className="scorer-elements">
                <label>
                    Nombre coliver:
                    <input className="scored-item" name="coliver" required value={coliver} onChange={handleColiver} />
                </label>
            </div>
            <div className="scorer-elements">
              <label>
                    Puntuación:
                <select className="score" name="coliverscore" value={coliverScore} size="1" onChange={handleColiverScore} >
                    <option value="one">1 estrella</option>
                    <option value="two">2 estrellas</option>
                    <option value="three">3 estrellas</option>
                    <option value="four">4 estrellas</option>
                    <option value="five">5 estrellas</option>
                </select>
              </label>
            </div>
            <button className="save-score">Enviar</button>
            {isError && <div>Error, inténtalo de nuevo</div>}
        </form>
    )
}

export default RatingColiver 

