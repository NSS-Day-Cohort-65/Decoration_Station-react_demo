import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import '../DecorationStation.css'

export const ItemDetails = () => {

    const [item, setItem] = useState()

    const { itemId } = useParams()

    useEffect(() => {
        fetch(`http://localhost:8088/items/${itemId}?_expand=season&_expand=category`)
            .then((res) => res.json())
            .then((itemsData) => {
                setItem(itemsData)
            })
    }, [])

    const handleDelete = () => {
        fetch(`http://localhost:8088/items/${itemId}`, {
        method: 'DELETE',
      })
      .then(
        navigate("/")
      ) 
    }

    const navigate = useNavigate()

    if (!item) { return null  }
    return (
        <>
            <div key={item.id} className="item-card">
                <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="item-img"
                />
                <div className="item-name">{item.name}</div>
                <div className="item-name">{item.season.name}</div>
                <div className="item-name">{item.category.name}</div>
                <button onClick={() => navigate(`/items/${item.id}/edit`)}>Edit</button>
                <button onClick={() => { handleDelete() }}>Delete</button>
            </div>
        </>
    )
}