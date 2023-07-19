import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import '../DecorationStation.css'

export const ItemsList = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:8088/items')
            .then((res) => res.json())
            .then((itemsData) => {
                setItems(itemsData)
            })
    }, [])

    return <div className="item-container">
        {items.map((item) => {
            return (
                <div key={item.id} className="item-card">
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="item-img"
                        onClick={() => navigate(`/items/${item.id}`)}
                    />
                    <div>{item.name}</div>
                </div>
            )
        })}
    </div>
}
