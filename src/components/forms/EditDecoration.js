import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditDecoration = ({
 
}) => {
  const [seasons, setSeasons] = useState([])
  const [categories, setCategories] = useState([])
  const [item, setItem] = useState({
    name: '',
    imageUrl: '',
    seasonId: '',
    categoryId: ''
  })
  const { itemId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:8088/categories')
      .then((res) => res.json())
      .then((categoriesData) => {
        setCategories(categoriesData)
      })

    fetch('http://localhost:8088/seasons')
      .then((res) => res.json())
      .then((seasonsData) => {
        setSeasons(seasonsData)
      })

    fetch(`http://localhost:8088/items/${itemId}`)
      .then((res) => res.json())
      .then((itemObj) => {
        setItem(itemObj)
      })
  }, [])

  const handleEditDecoration = (evt) => {
    evt.preventDefault() 

      item.name &&
      item.imageUrl &&
      item.seasonId &&
      item.categoryId
      ?
      fetch(`http://localhost:8088/items/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })
      .then(
        navigate("/")
      ) 
      : window.alert("Please finish filling out the form")
  }

  return (
    <form className="decoration-form">
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            required
            id="name"
            type="text"
            className="form-control"
            placeholder="Item"
            value={item.name}
            onChange={(event) => {
              const copy = { ...item }
              copy.name = event.target.value
              setItem(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            required
            id="imgUrl"
            type="text"
            className="form-control"
            placeholder="https://www.example.com"
            value={item.imageUrl}
            onChange={(event) => {
              const copy = { ...item }
              copy.imageUrl = event.target.value
              setItem(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Season:</div>
          {seasons.map((season) => {
            return (
              <div key={season.id} className="radio">
                <label>
                  <input
                    type="radio"
                    value={season.id}
                    checked={item.seasonId === season.id}
                    onChange={(event) => {
                      const copy = { ...item }
                      copy.seasonId = parseInt(event.target.value)
                      setItem(copy)
                    }}
                  />
                  {season.name}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Category:</div>
          {categories.map((category) => {
            return (
              <div key={category.id} className="radio">
                <label>
                  <input
                    type="radio"
                    value={category.id}
                    checked={item.categoryId === category.id}
                    onChange={(event) => {
                      const copy = { ...item }
                      copy.categoryId = parseInt(event.target.value)
                      setItem(copy)
                    }}
                  />
                  {category.name}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset>
      <button
        className="btn"
        onClick={(event) => {
          handleEditDecoration(event)
        }}
      >
        Submit Changes
      </button>
    </form>
  )
}