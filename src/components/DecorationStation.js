import { useEffect, useState } from 'react'
import './DecorationStation.css'
import { NewDecorationForm } from './NewDecorationForm'
import { SeasonsFilter } from './SeasonsFilter'
import { ItemsList } from './ItemsList'

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

    seasonChoice === 0 ? setFilteredItems(items) : setFilteredItems(seasonItems)
         
  }, [seasonChoice, items])


  return (
    <>
      <NewDecorationForm seasons={seasons} setItems={setItems} />
      <SeasonsFilter seasons={seasons} setSeasonChoice={setSeasonChoice} />
      <ItemsList filteredItems={filteredItems} />
    </>
  )
}
