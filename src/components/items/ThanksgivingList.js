import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ThanksgivingItems = () => {
  const [thanksgiving, setThanksgiving] = useState([]) // returns an array: [stateVariable, setStatefunction] takes one argument: the initial value of the state variable
  // const navigate = useNavigate()
  // Use Effect watches for state change
  // It takes two arguments, a function and an array
  // The array is which states we want to observe
  // The function is what we want to do when that observed state changes
  useEffect(() => {
    console.log('I only run once')
    fetch(`http://localhost:8088/items?seasonId=3`)
      .then((res) => res.json())
      .then((itemsArray) => {
        setThanksgiving(itemsArray)
      })
  }, []) // An empty dependency array will watch for the initial render of the component and only run the callback on that  initial run.

  // const navigateToItemDetails = (itemId) => {
  //   navigate(`/${itemId}`)
  // }
  const navigate = useNavigate()  
  
  return (
    <div className="items-container">
      {thanksgiving.map((item) => {
        return (
          <div className="item-card" key={item.id}>
            <img
              src={item.imageUrl}
              alt={item.name}
              className="item-img"
              onClick={() => {
                navigate(`/items/${item.id}`)
            }}
            />
            <div className="item-name">{item.name}</div>
          </div>
        )
      })}
    </div>
  )
}