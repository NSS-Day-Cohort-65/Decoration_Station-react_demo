import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { HalloweenItems } from "./HalloweenList"

export const ItemsList = ( ) => {
    const [items, setItems] = useState([]) 
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:8088/items')
          .then((res) => res.json())
          .then((itemsData) => {
            setItems(itemsData)
          })
      }, []) 

    // const navigateToItemDetails = (itemId) => {
    //     navigate(`/${itemId}`)
    //   }

    return <div className="item-container">
        {items.map((item) => {
            return (
                <div key={item.id} className="item-card">
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="item-img"
                        onClick={() => {
                            // navigateToItemDetails(item.id)
                            navigate(`/items/${item.id}`)
                        }}
                    />
                    <div className="item-name">{item.name}</div>
                </div>
            )
        })}
    </div>
}
