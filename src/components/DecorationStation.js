import { useEffect, useState } from 'react'
import './DecorationStation.css'

export const DecorationStation = () => {

  // useState hook returns an array: [stateVariable, setStatefunction] takes one argument: the initial value of the state variable
  const [items, setItems] = useState([]) 
  const [seasons, setSeasons] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [seasonChoice, setSeasonChoice] = useState(0)

  // useEffect hook watches for state change
  // it takes two arguments, a function and an array
  // the array is which states we want to observe
  // the function is what we want to do when that observed state   changes
  useEffect(() => {
    fetch('http://localhost:8088/items')
      .then((res) => res.json())
      .then((itemsData) => {
        setItems(itemsData)
      })

    fetch('http://localhost:8088/seasons')
      .then((res) => res.json())
      .then((seasonsData) => {
        setSeasons(seasonsData)
      })


  }, []) //An empty dependency array will watch for the initial render of the component and only run the callback on that initial run

  useEffect(() => {

    const seasonItems = items.filter((item) => item.seasonId === seasonChoice)

    // if (seasonChoice === 0) {
    //   setFilteredItems(items)
    // } else {
    //   setFilteredItems(seasonItems)
    // }

    seasonChoice === 0 ? setFilteredItems(items) : setFilteredItems(seasonItems)
         
  }, [seasonChoice, items])


  return (
    <>
      <div id="filter-bar">
        <select
          className="filter-box"
          id="season-select"
          onChange={(event) => {
            setSeasonChoice(parseInt(event.target.value))
          }}
        >
          <option key="0" value="0">
            All Seasons
          </option>

          {seasons.map((season) => {
            return (
              <option key={season.id} value={season.id}>
                {season.name}
              </option>
            )
          })}
        </select>
      </div>

    <div className="item-container">
        {filteredItems.map((item) => {
          return (
            <div key={item.id} className="item-card">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="item-img"
                onClick={() => 
                  window.alert(`You clicked the ${item.name} image`)
                }
              />
              <div className="item-name">{item.name}</div>
            </div>
          )
        })}
      </div>


      {/* <div className="item-container">
        {filteredItems.map((item) => {
          return (
            <div key={item.id} className="item-card">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="item-img"
              ></img>
              <div className="item-name">{item.name}</div>
            </div>
          )
        })}
      </div> */}
    </>
  )
}
